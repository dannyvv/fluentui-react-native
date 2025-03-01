/** @jsx withSlots */
import * as React from 'react';
import { Platform, View } from 'react-native';
import {
  ContextualMenuItemSlotProps,
  ContextualMenuItemState,
  ContextualMenuItemProps,
  ContextualMenuItemRenderData,
  contextualMenuItemName,
  ContextualMenuItemType,
} from './ContextualMenuItem.types';
import { compose, IUseComposeStyling } from '@uifabricshared/foundation-compose';
import { ISlots, withSlots } from '@uifabricshared/foundation-composable';
import { Text } from '@fluentui-react-native/text';
import { settings } from './ContextualMenuItem.settings';
import { backgroundColorTokens, borderTokens, textTokens, foregroundColorTokens, getPaletteFromTheme } from '@fluentui-react-native/tokens';
import { mergeSettings } from '@uifabricshared/foundation-settings';
import { useAsPressable, useKeyUpProps, useViewCommandFocus } from '@fluentui-react-native/interactive-hooks';
import { CMContext } from './ContextualMenu';
import { Icon } from '@fluentui-react-native/icon';
import { createIconProps } from '@fluentui-react-native/interactive-hooks';

export const ContextualMenuItem = compose<ContextualMenuItemType>({
  displayName: contextualMenuItemName,
  usePrepareProps: (userProps: ContextualMenuItemProps, useStyling: IUseComposeStyling<ContextualMenuItemType>) => {
    const defaultComponentRef = React.useRef(null);
    const {
      disabled,
      itemKey,
      icon,
      text,
      accessibilityLabel = userProps.text,
      onClick,
      testID,
      componentRef = defaultComponentRef,
      ...rest
    } = userProps;

    // Grabs the context information from ContextualMenu (currently selected menuItem and client's onItemClick callback)
    const context = React.useContext(CMContext);

    const onItemClick = React.useCallback(
      (e) => {
        if (!disabled) {
          context?.onDismissMenu();
          onClick ? onClick() : context?.onItemClick(itemKey);
          e.stopPropagation();
        }
      },
      [context, disabled, itemKey, onClick],
    );

    const cmRef = useViewCommandFocus(componentRef);

    const onItemHoverIn = React.useCallback(() => {
      componentRef.current.focus();
      context?.setSubmenuItemHovered && context.setSubmenuItemHovered(false);
      // dismiss submenu
      if (!disabled && context?.isSubmenuOpen) {
        context?.dismissSubmenu && context.dismissSubmenu();
      }
    }, [componentRef, disabled, context]);

    const pressable = useAsPressable({ ...rest, onPress: onItemClick, onHoverIn: onItemHoverIn });

    const onKeyUpProps = useKeyUpProps(onItemClick, ' ', 'Enter');

    // set up state
    const state: ContextualMenuItemState = {
      ...pressable.state,
      selected: context.selectedKey === userProps.itemKey,
      disabled: userProps.disabled,
      content: !!text,
      icon: !!icon,
    };

    /*
     * On Desktop, focus gets moved to the root of the menu, so hovering off the menu does not automatically call onBlur as we expect it to.
     * OnMouseEnter and onMouseLeave are overridden with the below callbacks that calls onFocus and onBlur explicitly
     */
    const onMouseEnter = React.useCallback(
      (e) => {
        pressable.props.onMouseEnter && pressable.props.onMouseEnter(e);
        pressable.props.onFocus && pressable.props.onFocus(e);
        e.stopPropagation();
      },
      [pressable],
    );

    const onMouseLeave = React.useCallback(
      (e) => {
        pressable.props.onMouseLeave && pressable.props.onMouseLeave(e);
        pressable.props.onBlur && pressable.props.onBlur(e);
        e.stopPropagation();
      },
      [pressable],
    );

    // grab the styling information, referencing the state as well as the props
    const styleProps = useStyling(userProps, (override: string) => state[override] || userProps[override]);
    // create the merged slot props
    const slotProps = mergeSettings<ContextualMenuItemSlotProps>(styleProps, {
      root: {
        ...pressable.props,
        ref: cmRef,
        ...onKeyUpProps,
        onMouseEnter,
        onMouseLeave,
        accessible: true,
        accessibilityLabel: accessibilityLabel,
        accessibilityRole: 'menuitem',
        accessibilityState: { disabled: state.disabled, selected: state.selected },
        accessibilityValue: { text: itemKey },
        focusable: Platform.select({
          /**
           * GH #1208: On macOS, disabled NSMenuItems are not focusable unless VoiceOver is enabled.
           * To mimic the non VoiceOver-enabled functionality, let's set focusable to !disabled for now.
           * As a followup, we could query AccessibilityInfo.isScreenReaderEnabled, and pass that info to
           * CMContext so that the event handler is only handled once per ContextualMenu.
           */
          macos: !disabled,
          // Keep win32 behavior as is
          default: true,
        }),
        ...rest,
      },
      content: { children: text },
      icon: createIconProps(icon),
    });

    return { slotProps, state };
  },
  settings,
  render: (Slots: ISlots<ContextualMenuItemSlotProps>, renderData: ContextualMenuItemRenderData, ...children: React.ReactNode[]) => {
    // We shouldn't have to specify the source prop on Slots.icon, here, but we need another drop from @uifabricshared
    return (
      <Slots.root>
        <Slots.stack>
          {renderData!.state.icon && <Slots.icon />}
          {renderData!.state.content && <Slots.content />}
          {children}
        </Slots.stack>
      </Slots.root>
    );
  },
  slots: {
    root: View,
    stack: { slotType: View },
    icon: { slotType: Icon as React.ComponentType },
    content: Text,
  },
  styles: {
    root: [backgroundColorTokens, borderTokens],
    stack: [],
    icon: [{ source: 'iconColor', lookup: getPaletteFromTheme, target: 'color' }],
    content: [textTokens, foregroundColorTokens],
  },
});

export default ContextualMenuItem;

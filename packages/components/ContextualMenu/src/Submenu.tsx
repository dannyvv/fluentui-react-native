/** @jsx withSlots */
import * as React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { submenuName, SubmenuProps, SubmenuSlotProps, SubmenuType, SubmenuRenderData, SubmenuState } from './Submenu.types';
import { settings } from './Submenu.settings';
import { IUseComposeStyling, compose } from '@uifabricshared/foundation-compose';
import { useSelectedKey } from '@fluentui-react-native/interactive-hooks';
import { mergeSettings } from '@uifabricshared/foundation-settings';
import { backgroundColorTokens, borderTokens } from '@fluentui-react-native/tokens';
import { Callout } from '@fluentui-react-native/callout';
import { ISlots, withSlots } from '@uifabricshared/foundation-composable';
import { CMContext } from './ContextualMenu';
import { IViewProps } from '@fluentui-react-native/adapters';
import { FocusZone } from '@fluentui-react-native/focus-zone';

export const Submenu = compose<SubmenuType>({
  displayName: submenuName,
  usePrepareProps: (userProps: SubmenuProps, useStyling: IUseComposeStyling<SubmenuType>) => {
    const { setShowMenu, maxWidth, maxHeight, shouldFocusOnMount = true, shouldFocusOnContainer = true, ...rest } = userProps;

    // Grabs the context information from ContextualMenu (onDismissMenu callback)
    const context = React.useContext(CMContext);

    // This hook updates the Selected Button and calls the customer's onClick function. This gets called after a button is pressed.
    const data = useSelectedKey(null, userProps.onItemClick);

    const onShow = React.useCallback(() => {
      userProps?.onShow && userProps.onShow();
      context.isSubmenuOpen = true;
    }, [context]);
    const onDismiss = React.useCallback(() => {
      userProps?.onDismiss();
      setShowMenu(false);
      context.isSubmenuOpen = false;
    }, [context, setShowMenu]);
    const dismissCallback = React.useCallback(() => {
      onDismiss();
      context?.onDismissMenu();
    }, [onDismiss, context]);

    context.dismissSubmenu = onDismiss;

    const [containerFocus, setContainerFocus] = React.useState(true);
    const toggleContainerFocus = React.useCallback(() => {
      setContainerFocus(false);
    }, [setContainerFocus]);

    const state: SubmenuState = {
      context: {
        selectedKey: data.selectedKey,
        onItemClick: data.onKeySelect,
        onDismissMenu: dismissCallback,
      },
    };

    const styleProps = useStyling(userProps, (override: string) => state[override] || userProps[override]);

    const containerPropsWin32: IViewProps = {
      accessible: shouldFocusOnContainer,
      focusable: shouldFocusOnContainer && containerFocus,
      onBlur: toggleContainerFocus,
      style: { maxHeight: maxHeight, width: maxWidth },
    };

    const slotProps = mergeSettings<SubmenuSlotProps>(styleProps, {
      root: {
        ...rest,
        onShow: onShow,
        onDismiss: onDismiss,
        setInitialFocus: shouldFocusOnMount,
      },
      container: Platform.select({
        macos: {},
        default: containerPropsWin32,
      }),
    });

    return { slotProps, state };
  },
  settings: settings,
  slots: {
    root: Callout,
    container: View,
  },
  styles: {
    root: [backgroundColorTokens, borderTokens],
    container: [],
  },
  render: (Slots: ISlots<SubmenuSlotProps>, renderData: SubmenuRenderData, ...children: React.ReactNode[]) => {
    if (renderData.state == undefined) {
      return null;
    }
    return (
      <CMContext.Provider value={renderData.state.context}>
        <Slots.root>
          <Slots.container>
            {Platform.OS === 'macos' ? (
              <FocusZone focusZoneDirection={'vertical'}>{children}</FocusZone>
            ) : (
              <ScrollView contentContainerStyle={{ flexDirection: 'column', flexGrow: 1 }} showsVerticalScrollIndicator={true}>
                {children}
              </ScrollView>
            )}
          </Slots.container>
        </Slots.root>
      </CMContext.Provider>
    );
  },
});

export default Submenu;

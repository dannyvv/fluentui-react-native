/** @jsx withSlots */
import * as React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import {
  contextualMenuName,
  ContextualMenuProps,
  ContextualMenuSlotProps,
  ContextualMenuType,
  ContextualMenuRenderData,
  ContextualMenuContext,
  ContextualMenuState,
} from './ContextualMenu.types';
import { settings } from './ContextualMenu.settings';
import { IUseComposeStyling, compose } from '@uifabricshared/foundation-compose';
import { useSelectedKey } from '@fluentui-react-native/interactive-hooks';
import { mergeSettings } from '@uifabricshared/foundation-settings';
import { backgroundColorTokens, borderTokens } from '@fluentui-react-native/tokens';
import { Callout } from '@fluentui-react-native/callout';
import { ISlots, withSlots } from '@uifabricshared/foundation-composable';
import { FocusZone } from '@fluentui-react-native/focus-zone';
import { IViewProps } from '@fluentui-react-native/adapters';

export const CMContext = React.createContext<ContextualMenuContext>({
  selectedKey: null,
  onItemClick: (/* key: string */) => {
    return;
  },
  onDismissMenu: () => {
    return;
  },
});

export const ContextualMenu = compose<ContextualMenuType>({
  displayName: contextualMenuName,
  usePrepareProps: (userProps: ContextualMenuProps, useStyling: IUseComposeStyling<ContextualMenuType>) => {
    const { setShowMenu, maxHeight, maxWidth, shouldFocusOnMount = true, shouldFocusOnContainer = false, ...rest } = userProps;

    // This hook updates the Selected Button and calls the customer's onClick function. This gets called after a button is pressed.
    const data = useSelectedKey(null, userProps.onItemClick);

    const dismissCallback = React.useCallback(() => {
      userProps.onDismiss();
      setShowMenu(false);
    }, [setShowMenu, userProps.onDismiss]);

    const [containerFocus, setContainerFocus] = React.useState(true);
    const toggleContainerFocus = React.useCallback(() => {
      setContainerFocus(false);
    }, [setContainerFocus]);

    const state: ContextualMenuState = {
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

    const slotProps = mergeSettings<ContextualMenuSlotProps>(styleProps, {
      root: {
        accessibilityRole: 'menu',
        setInitialFocus: shouldFocusOnMount,
        ...rest,
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
  render: (Slots: ISlots<ContextualMenuSlotProps>, renderData: ContextualMenuRenderData, ...children: React.ReactNode[]) => {
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

export default ContextualMenu;

import { ButtonCoreTokens, ButtonSlotProps, ButtonCorePropsWithInnerRef } from '../Button.types';
import { Theme, UseStylingOptions, buildProps } from '@fluentui-react-native/framework';
import { borderStyles, layoutStyles, fontStyles } from '@fluentui-react-native/tokens';
import { buttonCoreStates } from '../Button.styling';
import { getTextMarginAdjustment } from '@fluentui-react-native/styling-utils';
import { defaultFABTokens } from './FABTokens';
import { defaultFABColorTokens } from './FABColorTokens';

export const stylingSettings: UseStylingOptions<ButtonCorePropsWithInnerRef, ButtonSlotProps, ButtonCoreTokens> = {
  tokens: [defaultFABTokens, defaultFABColorTokens],
  states: [...buttonCoreStates],
  slotProps: {
    root: buildProps(
      (tokens: ButtonCoreTokens, theme: Theme) => ({
        style: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          width: tokens.width,
          backgroundColor: tokens.backgroundColor,
          ...borderStyles.from(tokens, theme),
          ...layoutStyles.from(tokens, theme),
        },
      }),
      ['backgroundColor', 'width', ...borderStyles.keys, ...layoutStyles.keys],
    ),
    content: buildProps(
      (tokens: ButtonCoreTokens, theme: Theme) => ({
        style: {
          color: tokens.color,
          ...getTextMarginAdjustment(),
          ...(tokens.spacingIconContent && { marginLeft: tokens.spacingIconContent }),
          ...fontStyles.from(tokens, theme),
        },
      }),
      ['color', 'spacingIconContent', ...fontStyles.keys],
    ),
    icon: buildProps(
      (tokens: ButtonCoreTokens) => ({
        style: {
          tintColor: tokens.iconColor,
        },
        height: tokens.iconSize,
        width: tokens.iconSize,
      }),
      ['iconColor', 'iconSize'],
    ),
  },
};

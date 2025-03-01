import { buttonName, ButtonCoreTokens, ButtonTokens, ButtonSlotProps, ButtonPropsWithInnerRef, ButtonSize } from './Button.types';
import { Theme, UseStylingOptions, buildProps } from '@fluentui-react-native/framework';
import { borderStyles, layoutStyles, fontStyles, shadowStyles } from '@fluentui-react-native/tokens';
import { defaultButtonTokens } from './ButtonTokens';
import { defaultButtonColorTokens } from './ButtonColorTokens';
import { Platform } from 'react-native';
import { getTextMarginAdjustment } from '@fluentui-react-native/styling-utils';

export const buttonCoreStates: (keyof ButtonCoreTokens)[] = ['hovered', 'focused', 'pressed', 'disabled', 'hasContent', 'hasIcon'];

export const buttonStates: (keyof ButtonTokens)[] = [
  'block',
  'primary',
  'subtle',
  'hovered',
  'pressed',
  'disabled',
  'small',
  'medium',
  'large',
  'hasContent',
  'hasIcon',
  'rounded',
  'circular',
  'square',
  'focused',
];

export const stylingSettings: UseStylingOptions<ButtonPropsWithInnerRef, ButtonSlotProps, ButtonTokens> = {
  tokens: [defaultButtonTokens, defaultButtonColorTokens, buttonName],
  states: buttonStates,
  slotProps: {
    root: buildProps(
      (tokens: ButtonTokens, theme: Theme) => ({
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
          ...shadowStyles.from(tokens, theme),
        },
      }),
      ['backgroundColor', 'width', ...borderStyles.keys, ...layoutStyles.keys, ...shadowStyles.keys],
    ),
    content: buildProps(
      (tokens: ButtonTokens, theme: Theme) => {
        const spacingIconContent = tokens.spacingIconContent
          ? {
              marginLeft: tokens.spacingIconContent,
              marginRight: tokens.spacingIconContent,
            }
          : {};
        return {
          style: {
            color: tokens.color,
            ...getTextMarginAdjustment(),
            ...spacingIconContent,
            ...fontStyles.from(tokens, theme),
          },
        };
      },
      ['color', 'spacingIconContent', ...fontStyles.keys],
    ),
    icon: buildProps(
      (tokens: ButtonTokens) => ({
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

export const getDefaultSize = (): ButtonSize => {
  if (Platform.OS === 'windows') {
    return 'medium';
  } else if ((Platform.OS as any) === 'win32') {
    return 'small';
  }

  return 'medium';
};

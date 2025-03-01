import { ThemeColorDefinition } from '@fluentui-react-native/theme-types';
import { getCurrentAppearance } from '@fluentui-react-native/theming-utils';
import { AppleSemanticPalette, FluentUIApplePalette } from './appleColors.types.macos';
import { PlatformColor, DynamicColorMacOS, ColorWithSystemEffectMacOS } from 'react-native-macos';
import { Appearance } from 'react-native';
import { createMacOSAliasTokens } from './createMacOSAliasTokens';

/** Creates a Palette of PlatformColors defined for macOS */
export function getAppleSemanticPalette(): AppleSemanticPalette {
  return {
    labelColor: PlatformColor('labelColor'),
    secondaryLabelColor: PlatformColor('secondaryLabelColor'),
    tertiaryLabelColor: PlatformColor('tertiaryLabelColor'),
    quaternaryLabelColor: PlatformColor('quaternaryLabelColor'),

    textColor: PlatformColor('textColor'),
    placeholderTextColor: PlatformColor('placeholderTextColor'),
    textBackgroundColor: PlatformColor('textBackgroundColor'),

    selectedTextColor: PlatformColor('selectedTexColor'),
    selectedTextBackgroundColor: PlatformColor('selectedTextBackgroundColor'),
    keyboardFocusIndicatorColor: PlatformColor('keyboardFocusIndicatorColor'),
    unemphasizedSelectedTextColor: PlatformColor('unemphasizedSelectedTextColor'),
    unemphasizedSelectedTextBackgroundColor: PlatformColor('unemphasizedSelectedTextBackgroundColor'),

    linkColor: PlatformColor('linkColor'),
    separatorColor: PlatformColor('separatorColor'),
    selectedContentBackgroundColor: PlatformColor('selectedContentBackgroundColor'),
    unemphasizedSelectedContentBackgroundColor: PlatformColor('unemphasizedSelectedContentBackgroundColor'),

    selectedMenuItemTextColor: PlatformColor('selectedMenuItemTextColor'),

    gridColor: PlatformColor('gridColor'),
    headerTextColor: PlatformColor('headerTextColor'),
    alternatingOddContentBackgroundColor: PlatformColor('alternatingOddContentBackgroundColor'),
    alternatingEvenContentBackgroundColor: PlatformColor('alternatingOddContentBackgroundColor'),

    controlAccentColor: PlatformColor('controlAccentColor'),
    controlColor: PlatformColor('controlColor'),
    controlBackgroundColor: PlatformColor('controlBackgroundColor'),
    controlTextColor: PlatformColor('controlTextColor'),
    disabledControlTextColor: PlatformColor('disabledControlTextColor'),
    selectedControlColor: PlatformColor('selectedControlColor'),
    selectedControlTextColor: PlatformColor('selectedControlTextColor'),
    alternateSelectedControlTextColor: PlatformColor('alternateSelectedControlTextColor'),
    scrubberTexturedBackground: PlatformColor('scrubberTexturedBackground'),

    windowBackgroundColor: PlatformColor('windowBackgroundColor'),
    windowFrameTextColor: PlatformColor('windowFrameTextColor'),
    underPageBackgroundColor: PlatformColor('underPageBackgroundColor'),

    findHighlightColor: PlatformColor('findHighlightColor'),
    highlightColor: PlatformColor('highlightColor'),
    shadowColor: PlatformColor('shadowColor'),
  };
}

function getFluentUIApplePalette(): FluentUIApplePalette {
  const appearance = Appearance.getColorScheme();
  const mode = getCurrentAppearance(appearance, 'light');
  const macOSAliasColorTokens = createMacOSAliasTokens(mode);

  return {
    blue10: '#4F6BED',
    blueMagenta20: '#8764B8',
    blueMagenta30: '#5C2E91',
    communicationBlue: DynamicColorMacOS({
      light: '#0078D4',
      dark: '#1890F1',
    }),
    communicationBlueShade10: DynamicColorMacOS({
      light: '#106EBE',
      dark: '#1890F1',
    }),
    communicationBlueShade20: DynamicColorMacOS({
      light: '#005A9E',
      dark: '#3AA0F3',
    }),
    communicationBlueShade30: DynamicColorMacOS({
      light: '#004578',
      dark: '#6CB8F6',
    }),
    communicationBlueTint10: DynamicColorMacOS({
      light: '#2B88D8',
      dark: '#0078D4',
    }),
    communicationBlueTint20: DynamicColorMacOS({
      light: '#C7E0F4',
      dark: '#004C87',
    }),
    communicationBlueTint30: DynamicColorMacOS({
      light: '#DEECF9',
      dark: '#043862',
    }),
    communicationBlueTint40: DynamicColorMacOS({
      light: '#EFF6FC',
      dark: '#092C47',
    }),

    cyan20: '#038387',
    cyan30: '#005B70',
    cyanBlue10: '#0078D4',
    cyanBlue20: '#004E8C',
    dangerPrimary: DynamicColorMacOS({
      light: '#D92C2C',
      dark: '#clear',
    }),
    dangerShade10: DynamicColorMacOS({
      light: '#C32727',
      dark: '#clear',
    }),
    dangerShade20: DynamicColorMacOS({
      light: '#A52121',
      dark: '#clear',
    }),
    dangerShade30: DynamicColorMacOS({
      light: '#791818',
      dark: '#clear',
    }),
    dangerTint10: DynamicColorMacOS({
      light: '#DD4242',
      dark: '#clear',
    }),
    dangerTint20: DynamicColorMacOS({
      light: '#E87979',
      dark: '#clear',
    }),
    dangerTint30: DynamicColorMacOS({
      light: '#F4B9B9',
      dark: '#clear',
    }),
    dangerTint40: DynamicColorMacOS({
      light: '#F9D9D9',
      dark: '#clear',
    }),
    gray20: '#69797E',
    gray25: '#F8F8F8',
    gray30: '#7A7574',
    gray40: '#393939',
    gray50: '#F1F1F1',
    gray100: '#E1E1E1',
    gray200: '#C8C8C8',
    gray300: '#ACACAC',
    gray400: '#919191',
    gray500: '#6E6E6E',
    gray600: '#404040',
    gray700: '#303030',
    gray800: '#292929',
    gray900: '#212121',
    gray950: '#141414',
    green10: '#498205',
    green20: '#0B6A0B',
    magenta10: '#C239B3',
    magenta20: '#881798',
    magentaPink10: '#E3008C',
    orange20: '#CA5010',
    orange30: '#8E562E',
    orangeYellow20: '#986F0B',
    pinkRed10: '#750B1C',
    presenceAvailable: DynamicColorMacOS({
      light: '#6BB700',
      dark: '#92C353',
    }),
    presenceAway: DynamicColorMacOS({
      light: '#FFAA44',
      dark: '#F8D22A',
    }),
    presenceBlocked: DynamicColorMacOS({
      light: '#C50F1F',
      dark: '#D74553',
    }),
    presenceBusy: DynamicColorMacOS({
      light: '#C50F1F',
      dark: '#D74553',
    }),
    presenceDnd: DynamicColorMacOS({
      light: '#C50F1F',
      dark: '#D74553',
    }),
    presenceOffline: DynamicColorMacOS({
      light: '#8A8886',
      dark: '#979593',
    }),
    presenceOof: DynamicColorMacOS({
      light: '#B4009E',
      dark: '#E959D9',
    }),
    presenceUnknown: DynamicColorMacOS({
      light: '#8A8886',
      dark: '#979593',
    }),
    red10: '#D13438',
    red20: '#A4262C',
    successPrimary: DynamicColorMacOS({
      light: '#13A10E',
      dark: '#979593',
    }),
    successShade10: DynamicColorMacOS({
      light: '#11910D',
      dark: '#20BA53',
    }),
    successShade20: DynamicColorMacOS({
      light: '#0F7A0B',
      dark: '#3BC569',
    }),
    successShade30: DynamicColorMacOS({
      light: '#0B5A08',
      dark: '#67D48B',
    }),
    successTint10: DynamicColorMacOS({
      light: '#27AC22',
      dark: '#0D9D3D',
    }),
    successTint20: DynamicColorMacOS({
      light: '#5EC65A',
      dark: '#096B29',
    }),
    successTint30: DynamicColorMacOS({
      light: '#A7E3A5',
      dark: '#043615',
    }),
    successTint40: DynamicColorMacOS({
      light: '#CEF0CD',
      dark: '#021D0B',
    }),
    warningPrimary: DynamicColorMacOS({
      light: '#FFD335',
      dark: '#FFC328',
    }),
    warningShade10: DynamicColorMacOS({
      light: '#E6BE30',
      dark: '#FFC83E',
    }),
    warningShade20: DynamicColorMacOS({
      light: '#C2A129',
      dark: '#FFDD15',
    }),
    warningShade30: DynamicColorMacOS({
      light: '#8F761E',
      dark: '#FFDD87',
    }),
    warningTint10: DynamicColorMacOS({
      light: '#FFD94E',
      dark: '#E0AB24',
    }),
    warningTint20: DynamicColorMacOS({
      light: '#FFE586',
      dark: '#997518',
    }),
    warningTint30: DynamicColorMacOS({
      light: '#FFF2C3',
      dark: '#4D3A0C',
    }),
    warningTint40: DynamicColorMacOS({
      light: '#FFF8DF',
      dark: '#291F07',
    }),

    brandForegroundDisabled: DynamicColorMacOS({
      light: '#2525253F',
      dark: '#FFFFFF3F',
    }),
    brandBackgroundDisabled: DynamicColorMacOS({
      light: '#2525253F',
      dark: '#5656567F',
    }),

    brandedBackground: macOSAliasColorTokens.brandBackground,
    brandBackgroundPressed: macOSAliasColorTokens.brandBackgroundPressed,
    brandBackgroundHovered: macOSAliasColorTokens.brandBackgroundHover,
    neutralBackgroundInverted: macOSAliasColorTokens.neutralBackgroundInverted,
    neutralForegroundInverted: macOSAliasColorTokens.neutralForegroundInverted,
    neutralForeground2: macOSAliasColorTokens.neutralForeground2,
    neutralBackground2: macOSAliasColorTokens.neutralBackground2,
    neutralStroke2: macOSAliasColorTokens.neutralStroke2,
    neutralForeground3: macOSAliasColorTokens.neutralForeground3,
    neutralBackground3: macOSAliasColorTokens.neutralBackground3,
    neutralStrokeDisabled: macOSAliasColorTokens.neutralStrokeDisabled,
    transparentBackground: macOSAliasColorTokens.transparentBackground,
  };
}

/** Creates a palette of colors for the apple theme, given the FluentUI Apple Palette and Apple Semantic Palette
 * The fallback palette is loaded while we wait for  the native theming module to load, or if the module is not found
 */
export function fallbackApplePalette(): ThemeColorDefinition {
  const fluentUIApple = getFluentUIApplePalette();
  const applePlatform = getAppleSemanticPalette();
  return {
    /* PaletteBackgroundColors & PaletteTextColors */

    background: applePlatform.windowBackgroundColor,
    bodyStandoutBackground: applePlatform.underPageBackgroundColor,
    bodyFrameBackground: applePlatform.windowBackgroundColor,
    bodyFrameDivider: applePlatform.separatorColor,
    bodyText: applePlatform.labelColor,
    bodyTextChecked: applePlatform.labelColor,
    subText: applePlatform.secondaryLabelColor,
    bodyDivider: applePlatform.separatorColor,

    disabledBackground: fluentUIApple.gray100,
    disabledText: applePlatform.tertiaryLabelColor,
    disabledBodyText: applePlatform.tertiaryLabelColor,
    disabledSubtext: applePlatform.quaternaryLabelColor,
    disabledBodySubtext: applePlatform.quaternaryLabelColor,

    focusBorder: 'transparent',
    variantBorder: applePlatform.separatorColor,
    variantBorderHovered: applePlatform.separatorColor,
    defaultStateBackground: applePlatform.controlBackgroundColor,

    errorText: fluentUIApple.dangerPrimary,
    warningText: fluentUIApple.warningPrimary,
    errorBackground: fluentUIApple.dangerTint10,
    blockingBackground: fluentUIApple.dangerTint10,
    warningBackground: fluentUIApple.warningPrimary,
    warningHighlight: fluentUIApple.warningTint10,
    successBackground: fluentUIApple.successTint10,

    inputBorder: applePlatform.separatorColor,
    inputBorderHovered: applePlatform.separatorColor,
    inputBackground: applePlatform.textBackgroundColor,
    inputBackgroundChecked: applePlatform.textBackgroundColor,
    inputBackgroundCheckedHovered: applePlatform.textBackgroundColor,
    inputForegroundChecked: fluentUIApple.communicationBlue,
    inputFocusBorderAlt: applePlatform.keyboardFocusIndicatorColor,
    smallInputBorder: applePlatform.separatorColor,
    inputText: applePlatform.textColor,
    inputTextHovered: applePlatform.textColor,
    inputPlaceholderText: applePlatform.placeholderTextColor,

    // Set the default button tokens to match the Acrylic Button style
    buttonBackground: fluentUIApple.neutralBackground3,
    buttonBackgroundChecked: fluentUIApple.neutralBackground3,
    buttonBackgroundHovered: fluentUIApple.neutralBackground3,
    buttonBackgroundCheckedHovered: fluentUIApple.neutralBackground3,
    buttonBackgroundPressed: ColorWithSystemEffectMacOS(fluentUIApple.neutralBackground3, 'pressed'),
    buttonBackgroundDisabled: ColorWithSystemEffectMacOS(fluentUIApple.neutralBackground3, 'disabled'),
    buttonBorder: fluentUIApple.transparentBackground,
    buttonText: fluentUIApple.neutralForeground3,
    buttonTextHovered: fluentUIApple.neutralForeground3,
    buttonTextChecked: fluentUIApple.neutralForeground3,
    buttonTextCheckedHovered: fluentUIApple.neutralForeground3,
    buttonTextPressed: ColorWithSystemEffectMacOS(fluentUIApple.neutralForeground3, 'pressed'),
    buttonTextDisabled: ColorWithSystemEffectMacOS(fluentUIApple.neutralForeground3, 'disabled'),

    buttonBorderDisabled: fluentUIApple.transparentBackground,
    buttonBorderFocused: fluentUIApple.transparentBackground,

    primaryButtonBackground: fluentUIApple.communicationBlue,
    primaryButtonBackgroundHovered: fluentUIApple.communicationBlue,
    primaryButtonBackgroundPressed: ColorWithSystemEffectMacOS(fluentUIApple.communicationBlue, 'pressed'),
    primaryButtonBackgroundDisabled: fluentUIApple.brandBackgroundDisabled,
    primaryButtonBorder: 'transparent',
    primaryButtonBorderFocused: 'transparent',
    primaryButtonText: fluentUIApple.neutralForegroundInverted,
    primaryButtonTextHovered: fluentUIApple.neutralForegroundInverted,
    primaryButtonTextPressed: ColorWithSystemEffectMacOS(fluentUIApple.neutralForegroundInverted, 'pressed'),
    primaryButtonTextDisabled: fluentUIApple.brandForegroundDisabled,

    accentButtonBackground: fluentUIApple.communicationBlue,
    accentButtonText: fluentUIApple.neutralForegroundInverted,

    menuBackground: 'transparent',
    menuDivider: applePlatform.separatorColor,
    menuIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor
    menuHeader: applePlatform.headerTextColor,
    menuItemBackgroundHovered: applePlatform.controlAccentColor,
    menuItemBackgroundPressed: ColorWithSystemEffectMacOS(applePlatform.controlAccentColor, 'pressed'),
    menuItemText: applePlatform.labelColor,
    menuItemTextHovered: 'white',

    listBackground: 'transparent',
    listText: applePlatform.labelColor,
    listItemBackgroundHovered: 'transparent',
    listItemBackgroundChecked: 'transparent',
    listItemBackgroundCheckedHovered: 'transparent',

    listHeaderBackgroundHovered: applePlatform.headerTextColor,
    listHeaderBackgroundPressed: applePlatform.headerTextColor,

    actionLink: applePlatform.linkColor,
    actionLinkHovered: applePlatform.linkColor,
    link: applePlatform.linkColor,
    linkHovered: applePlatform.linkColor,
    linkPressed: applePlatform.selectedControlColor,

    /* ControlColorTokens */

    // Set the default button tokens to match the Acrylic Button style
    defaultBackground: fluentUIApple.neutralBackground3,
    defaultBorder: 'transparent',
    defaultContent: fluentUIApple.neutralForeground3,
    defaultIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor

    defaultHoveredBackground: fluentUIApple.neutralBackground3,
    defaultHoveredBorder: 'transparent',
    defaultHoveredContent: fluentUIApple.neutralForeground3,
    defaultHoveredIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor

    defaultFocusedBackground: fluentUIApple.neutralBackground3,
    defaultFocusedBorder: 'transparent',
    defaultFocusedContent: fluentUIApple.neutralForeground3,
    defaultFocusedIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor

    defaultPressedBackground: ColorWithSystemEffectMacOS(fluentUIApple.neutralBackground3, 'pressed'),
    defaultPressedBorder: 'transparent',
    defaultPressedContent: ColorWithSystemEffectMacOS(fluentUIApple.neutralForeground3, 'pressed'),
    defaultPressedIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor

    defaultDisabledBackground: fluentUIApple.neutralStrokeDisabled,
    defaultDisabledBorder: 'transparent',
    defaultDisabledContent: ColorWithSystemEffectMacOS(fluentUIApple.neutralForeground3, 'pressed'),
    defaultDisabledIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor

    ghostBackground: 'transparent',
    ghostBorder: 'transparent',
    ghostContent: fluentUIApple.communicationBlue,
    ghostIcon: fluentUIApple.communicationBlue,

    ghostHoveredBackground: 'transparent',
    ghostHoveredBorder: 'transparent',
    ghostHoveredContent: fluentUIApple.communicationBlue,
    ghostHoveredIcon: fluentUIApple.communicationBlue,

    ghostFocusedBackground: 'transparent',
    ghostFocusedBorder: 'transparent',
    ghostFocusedContent: fluentUIApple.communicationBlue,
    ghostFocusedIcon: fluentUIApple.communicationBlue,

    ghostPressedBackground: 'transparent',
    ghostPressedBorder: 'transparent',
    ghostPressedContent: ColorWithSystemEffectMacOS(fluentUIApple.communicationBlue, 'deepPressed'),
    ghostPressedIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor

    ghostDisabledBackground: 'transparent',
    ghostDisabledBorder: 'transparent',
    ghostDisabledContent: fluentUIApple.brandForegroundDisabled,
    ghostDisabledIcon: fluentUIApple.brandForegroundDisabled,

    brandedBackground: fluentUIApple.brandedBackground,
    brandedBorder: 'transparent',
    brandedContent: fluentUIApple.neutralForegroundInverted,
    brandedIcon: fluentUIApple.neutralForegroundInverted,

    brandedHoveredBackground: fluentUIApple.brandBackgroundHovered,
    brandedHoveredBorder: 'transparent',
    brandedHoveredContent: fluentUIApple.neutralForegroundInverted,
    brandedHoveredIcon: fluentUIApple.neutralForegroundInverted,

    brandedFocusedBackground: fluentUIApple.communicationBlue,
    brandedFocusedBorder: 'transparent',
    brandedFocusedContent: fluentUIApple.neutralForegroundInverted,
    brandedFocusedIcon: fluentUIApple.neutralForegroundInverted,

    brandedPressedBackground: fluentUIApple.brandBackgroundPressed, //ColorWithSystemEffectMacOS(fluentUIApple.communicationBlue, 'pressed'),
    brandedPressedBorder: 'transparent',
    brandedPressedContent: fluentUIApple.neutralForegroundInverted,
    brandedPressedIcon: fluentUIApple.neutralForegroundInverted,

    brandedDisabledBackground: fluentUIApple.brandBackgroundDisabled,
    brandedDisabledBorder: 'transparent',
    brandedDisabledContent: fluentUIApple.brandForegroundDisabled,
    brandedDisabledIcon: fluentUIApple.neutralForeground3, //GH:728 Icon doesn't support PlatformColor

    defaultCheckedBackground: fluentUIApple.communicationBlue,
    defaultCheckedContent: fluentUIApple.neutralForegroundInverted,
    defaultCheckedHoveredBackground: fluentUIApple.communicationBlue,
    defaultCheckedHoveredContent: fluentUIApple.neutralForegroundInverted,

    brandedCheckedBackground: fluentUIApple.communicationBlue,
    brandedCheckedContent: fluentUIApple.neutralForegroundInverted,
    brandedCheckedHoveredBackground: fluentUIApple.communicationBlue,
    brandedCheckedHoveredContent: fluentUIApple.neutralForegroundInverted,

    ghostCheckedBackground: 'transparent',
    ghostCheckedContent: fluentUIApple.communicationBlue,
    ghostCheckedHoveredBackground: 'transparent',
    ghostCheckedHoveredContent: fluentUIApple.communicationBlue,
    ghostCheckedHoveredBorder: 'transparent',

    ghostSecondaryContent: fluentUIApple.communicationBlue,
    ghostFocusedSecondaryContent: fluentUIApple.communicationBlue,
    ghostHoveredSecondaryContent: fluentUIApple.communicationBlue,
    ghostPressedSecondaryContent: ColorWithSystemEffectMacOS(fluentUIApple.communicationBlue, 'deepPressed'),

    brandedSecondaryContent: fluentUIApple.neutralForegroundInverted,
    brandedFocusedSecondaryContent: fluentUIApple.neutralForegroundInverted,
    brandedHoveredSecondaryContent: fluentUIApple.neutralForegroundInverted,
    brandedPressedSecondaryContent: ColorWithSystemEffectMacOS(fluentUIApple.neutralForegroundInverted, 'pressed'),

    defaultDisabledSecondaryContent: fluentUIApple.brandForegroundDisabled,
    defaultHoveredSecondaryContent: fluentUIApple.neutralForegroundInverted,
    defaultPressedSecondaryContent: fluentUIApple.neutralForegroundInverted,

    checkboxBackground: fluentUIApple.communicationBlue,
    checkboxBackgroundDisabled: fluentUIApple.brandBackgroundDisabled,
    checkboxBorderColor: fluentUIApple.gray600,
    checkmarkColor: fluentUIApple.neutralForegroundInverted,

    personaActivityRing: fluentUIApple.neutralForegroundInverted,
    personaActivityGlow: fluentUIApple.red10,
  };
}

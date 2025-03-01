import { IFilterMask } from './filter.types';
import { TextProps, ViewProps, ImageProps } from 'react-native';
import { TextProps as TextPropsWeb, ViewProps as ViewPropsWeb, ImageProps as ImagePropsWeb } from 'react-native-web';

// export core interface types
export type ITextProps = TextProps & Partial<TextPropsWeb>;
export type IViewProps = ViewProps & Partial<ViewPropsWeb>;
export type IImageProps = ImageProps & Partial<ImagePropsWeb>;

const _viewMask: IFilterMask<IViewProps> = {
  children: true,
  accessible: true,
  accessibilityLabel: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityHint: true,
  hitSlop: true,
  onLayout: true,
  pointerEvents: true,
  removeClippedSubviews: true,
  style: true,
  testID: true,
  nativeID: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onResponderEnd: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onAccessibilityAction: true,
  onAccessibilityTap: true,
  onMagicTap: true,
  onResponderRelease: true,
  onResponderStart: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchStart: true,
  importantForAccessibility: true,
  accessibilityActions: true,
  accessibilityComponentType: true,
  accessibilityElementsHidden: true,
  accessibilityIgnoresInvertColors: true,
  accessibilityLiveRegion: true,
  accessibilityTraits: true,
  accessibilityViewIsModal: true,
  collapsable: true,
  needsOffscreenAlphaCompositing: true,
  isTVSelectable: true,
  renderToHardwareTextureAndroid: true,
  shouldRasterizeIOS: true,
  hasTVPreferredFocus: true,
  tvParallaxMagnification: true,
  tvParallaxProperties: true,
  tvParallaxShiftDistanceX: true,
  tvParallaxShiftDistanceY: true,
  tvParallaxTiltAngle: true,
};

const _textMask: IFilterMask<ITextProps> = {
  children: true,
  accessibilityActions: true,
  accessibilityComponentType: true,
  accessibilityElementsHidden: true,
  accessibilityHint: true,
  accessibilityIgnoresInvertColors: true,
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityTraits: true,
  accessibilityViewIsModal: true,
  accessible: true,
  onAccessibilityAction: true,
  onAccessibilityTap: true,
  importantForAccessibility: true,
  textBreakStrategy: true,
  testID: true,
  allowFontScaling: true,
  ellipsizeMode: true,
  lineBreakMode: true,
  numberOfLines: true,
  onLayout: true,
  onLongPress: true,
  onMagicTap: true,
  onPress: true,
  style: true,
  nativeID: true,
  maxFontSizeMultiplier: true,
  adjustsFontSizeToFit: true,
  minimumFontScale: true,
  selectable: true,
  selectionColor: true,
  suppressHighlighting: true,
};

const _imageMask: IFilterMask<IImageProps> = {
  children: true,
  accessibilityActions: true,
  accessibilityComponentType: true,
  accessibilityElementsHidden: true,
  accessibilityHint: true,
  accessibilityIgnoresInvertColors: true,
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityTraits: true,
  accessibilityViewIsModal: true,
  accessible: true,
  onAccessibilityAction: true,
  onAccessibilityTap: true,
  importantForAccessibility: true,
  style: true,
  onError: true,
  onLayout: true,
  onLoad: true,
  onLoadEnd: true,
  onLoadStart: true,
  onMagicTap: true,
  onPartialLoad: true,
  onProgress: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  progressiveRenderingEnabled: true,
  source: true,
  resizeMethod: true,
  resizeMode: true,
  loadingIndicatorSource: true,
  testID: true,
  defaultSource: true,
  blurRadius: true,
  capInsets: true,
  width: true,
  height: true,
  fadeDuration: true,
};

export function filterViewProps(propName: string): boolean {
  return _viewMask[propName];
}

export function filterTextProps(propName: string): boolean {
  return _textMask[propName];
}

export function filterImageProps(propName: string): boolean {
  return _imageMask[propName];
}

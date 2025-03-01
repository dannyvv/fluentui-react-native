import { Button } from '@fluentui-react-native/experimental-button';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { commonTestStyles, stackStyle } from '../Common/styles';
import { SvgIconProps } from '@fluentui-react-native/icon';
import TestSvg from './test.svg';
import { SvgXml } from 'react-native-svg';

export const ButtonIconTest: React.FunctionComponent = () => {
  const fontBuiltInProps = {
    fontFamily: 'Arial',
    codepoint: 0x2663,
    fontSize: 24,
  };

  /* eslint-disable @typescript-eslint/no-var-requires */
  const testImage = require('./icon_24x24.png');

  const svgProps: SvgIconProps = {
    src: TestSvg,
    viewBox: '0 0 500 500',
  };
  const svgIconsEnabled = ['ios', 'macos', 'win32', 'android'].includes(Platform.OS as string);

  const chevronXml = `
          <svg width="12" height="16" viewBox="0 0 11 6" color="#000">
            <path fill='currentColor' d='M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.5 4.79289L9.64645 0.646447C9.84171 0.451185 10.1583 0.451185 10.3536 0.646447C10.5488 0.841709 10.5488 1.15829 10.3536 1.35355L5.85355 5.85355C5.65829 6.04882 5.34171 6.04882 5.14645 5.85355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z' />
          </svg>`;

  return (
    <View style={[stackStyle, commonTestStyles.view]}>
      <Button icon={{ fontSource: { ...fontBuiltInProps, fontSize: 32 }, color: '#060' }} style={commonTestStyles.vmargin}>
        Font icon
      </Button>
      <Button
        icon={{ fontSource: { ...fontBuiltInProps, fontSize: 32 }, color: '#060' }}
        style={commonTestStyles.vmargin}
        iconPosition="after"
      >
        Icon after
      </Button>
      {svgIconsEnabled && (
        <Button style={commonTestStyles.vmargin} icon={{ svgSource: svgProps }}>
          Icon Button and Chevron
          <SvgXml xml={chevronXml} />
        </Button>
      )}
      <Button icon={{ fontSource: fontBuiltInProps }} style={commonTestStyles.vmargin}>
        Font icon
      </Button>
      <Button appearance="primary" icon={{ fontSource: fontBuiltInProps }} style={commonTestStyles.vmargin}>
        Font icon
      </Button>
      {svgIconsEnabled && (
        <>
          <Button appearance="primary" icon={{ svgSource: svgProps, color: 'red' }} style={commonTestStyles.vmargin}>
            SVG
          </Button>
          <Button icon={{ svgSource: svgProps }} style={commonTestStyles.vmargin}>
            SVG
          </Button>
        </>
      )}
      <Button appearance="primary" icon={testImage} style={commonTestStyles.vmargin}>
        PNG
      </Button>
      <Button icon={testImage} style={commonTestStyles.vmargin}>
        PNG
      </Button>
    </View>
  );
};

import type { ReactNode } from 'react';
import * as React from 'react';
import type { NativeMethods } from 'react-native';
import RNSVGUse from '../fabric/UseNativeComponent';
import { withoutXY } from '../lib/extract/extractProps';
import type { CommonPathProps, NumberProp } from '../lib/extract/types';
import { idPattern } from '../lib/util';
import Shape from './Shape';

export interface UseProps extends CommonPathProps {
  children?: ReactNode;
  xlinkHref?: string;
  href?: string;
  width?: NumberProp;
  height?: NumberProp;
  x?: NumberProp;
  y?: NumberProp;
  opacity?: NumberProp;
}

export default class Use extends Shape<UseProps> {
  static displayName = 'Use';

  static defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };

  render() {
    const { props } = this;
    const {
      children,
      x,
      y,
      width,
      height,
      xlinkHref,
      href = xlinkHref,
    } = props;

    const matched = href && href.match(idPattern);
    const match = matched && matched[1];

    if (!match) {
      console.warn(
        'Invalid `href` prop for `Use` element, expected a href like "#id", but got: "' +
          href +
          '"'
      );
    }
    const useProps = {
      href: match ?? undefined,
      x,
      y,
      width,
      height,
    };
    return (
      <RNSVGUse
        ref={(ref) => this.refMethod(ref as (Use & NativeMethods) | null)}
        {...withoutXY(this, props)}
        {...useProps}>
        {children}
      </RNSVGUse>
    );
  }
}

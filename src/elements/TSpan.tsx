import type { Component } from 'react';
import * as React from 'react';
import RNSVGTSpan from '../fabric/TSpanNativeComponent';
import extractProps, { propsAndStyles } from '../lib/extract/extractProps';
import type { TextChild } from '../lib/extract/extractText';
import extractText, { setTSpan } from '../lib/extract/extractText';
import extractTransform from '../lib/extract/extractTransform';
import type {
  ColumnMajorTransformMatrix,
  CommonPathProps,
  FontProps,
  NumberArray,
  NumberProp,
} from '../lib/extract/types';
import { pickNotNil } from '../lib/util';
import Shape from './Shape';

export interface TSpanProps extends CommonPathProps, FontProps {
  children?: TextChild;
  x?: NumberArray;
  y?: NumberArray;
  dx?: NumberArray;
  dy?: NumberArray;
  rotate?: NumberArray;
  inlineSize?: NumberProp;
}

export default class TSpan extends Shape<TSpanProps> {
  static displayName = 'TSpan';

  setNativeProps = (
    props: TSpanProps & {
      matrix?: ColumnMajorTransformMatrix;
      style?: [] | unknown;
    }
  ) => {
    const matrix = !props.matrix && extractTransform(props);
    if (matrix) {
      props.matrix = matrix;
    }
    const prop = propsAndStyles(props);
    Object.assign(prop, pickNotNil(extractText(prop, false)));
    this.root && this.root.setNativeProps(prop);
  };

  render() {
    const prop = propsAndStyles(this.props);
    const props = extractProps(
      {
        ...prop,
        x: null,
        y: null,
      },
      this
    );
    Object.assign(props, extractText(prop, false));
    props.ref = this.refMethod as (instance: Component | null) => void;
    return <RNSVGTSpan {...props} />;
  }
}

setTSpan(TSpan);

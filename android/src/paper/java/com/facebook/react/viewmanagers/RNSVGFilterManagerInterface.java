/**
* This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
*
* Do not edit this file as changes may cause incorrect behavior and will be lost
* once the code is regenerated.
*
* @generated by codegen project: GeneratePropsJavaInterface.js
*/

package com.facebook.react.viewmanagers;

import android.view.View;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.Dynamic;

public interface RNSVGFilterManagerInterface<T extends View> {
  void setName(T view, @Nullable String value);
  void setX(T view, Dynamic value);
  void setY(T view, Dynamic value);
  void setHeight(T view, Dynamic value);
  void setWidth(T view, Dynamic value);
  void setFilterUnits(T view, @Nullable String value);
  void setPrimitiveUnits(T view, @Nullable String value);
}
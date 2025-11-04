import type { NativeStackHeaderItemButton } from '@react-navigation/native-stack';
import { Children, type ReactNode } from 'react';
import type { ColorValue, StyleProp, TextStyle } from 'react-native';

import { StackHeaderBadge, StackHeaderIcon, StackHeaderLabel } from './common-primitives';
import { convertTextStyleToRNTextStyle, getFirstChildOfType } from './utils';

export interface StackHeaderItemSharedProps {
  /**
   * Supports two approaches:
   * 1. <Stack.Header.Button>Text</Stack.Header.Button> - children as text
   * 2. children as components:<Stack.Header.Button>
   * <Icon sf="icon-name" />
   * <Label>Button Text</Label>
   * <Badge>3</Badge>
   * </Stack.Header.Button>
   */
  children?: ReactNode;
  style?: StyleProp<
    Pick<TextStyle, 'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'width'> & {
      /**
       * When set to 'transparent', the button will have no background color.
       *
       * @platform iOS 26+
       */
      backgroundColor?: 'transparent';
    }
  >;
  // Note: when only label (no icon) is used the background is always separated
  separateBackground?: boolean;
  identifier?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  tintColor?: ColorValue;
  /**
   * @default 'plain'
   */
  variant?: 'plain' | 'done' | 'prominent';
}

// We need to pick these properties, as the SharedHeaderItem is not exported by React Navigation
type RNSharedHeaderItem = Pick<
  NativeStackHeaderItemButton,
  | 'label'
  | 'labelStyle'
  | 'icon'
  | 'variant'
  | 'tintColor'
  | 'disabled'
  | 'width'
  | 'hidesSharedBackground'
  | 'sharesBackground'
  | 'identifier'
  | 'badge'
  | 'accessibilityLabel'
  | 'accessibilityHint'
>;

export function convertStackHeaderSharedPropsToRNSharedHeaderItem(
  props: StackHeaderItemSharedProps
): RNSharedHeaderItem {
  const { children, style, separateBackground, ...rest } = props;
  const stringChildren = Children.toArray(children)
    .filter((child) => typeof child === 'string')
    .join('');
  const label = getFirstChildOfType(children, StackHeaderLabel);
  const iconComponent = getFirstChildOfType(children, StackHeaderIcon);
  const badgeComponent = getFirstChildOfType(children, StackHeaderBadge);
  const icon: NativeStackHeaderItemButton['icon'] = (() => {
    if (!iconComponent) {
      return undefined;
    }
    if ('src' in iconComponent.props) {
      return {
        type: 'image',
        source: iconComponent.props.src,
      };
    }
    return {
      type: 'sfSymbol',
      name: iconComponent.props.sf,
    };
  })();
  const item: RNSharedHeaderItem = {
    ...rest,
    label: label?.props.children ?? stringChildren,
    sharesBackground: !separateBackground,
  };
  if (style) {
    const { backgroundColor, ...convertedStyle } = convertTextStyleToRNTextStyle(style) ?? {};
    item.labelStyle = convertedStyle;
    item.hidesSharedBackground = backgroundColor === 'transparent';
  } else {
    item.hidesSharedBackground = false;
  }
  if (badgeComponent) {
    item.badge = {
      value: badgeComponent.props.children ?? '',
    };
    const badgeStyle = convertTextStyleToRNTextStyle(badgeComponent.props.style);
    if (badgeStyle) {
      item.badge.style = badgeStyle;
    }
  }
  if (icon) {
    item.icon = icon;
  }
  return item;
}

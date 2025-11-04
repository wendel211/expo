"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStackHeaderSharedPropsToRNSharedHeaderItem = convertStackHeaderSharedPropsToRNSharedHeaderItem;
const react_1 = require("react");
const common_primitives_1 = require("./common-primitives");
const utils_1 = require("./utils");
function convertStackHeaderSharedPropsToRNSharedHeaderItem(props) {
    const { children, style, separateBackground, ...rest } = props;
    const stringChildren = react_1.Children.toArray(children)
        .filter((child) => typeof child === 'string')
        .join('');
    const label = (0, utils_1.getFirstChildOfType)(children, common_primitives_1.StackHeaderLabel);
    const iconComponent = (0, utils_1.getFirstChildOfType)(children, common_primitives_1.StackHeaderIcon);
    const badgeComponent = (0, utils_1.getFirstChildOfType)(children, common_primitives_1.StackHeaderBadge);
    const icon = (() => {
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
    const item = {
        ...rest,
        label: label?.props.children ?? stringChildren,
        sharesBackground: !separateBackground,
    };
    if (style) {
        const { backgroundColor, ...convertedStyle } = (0, utils_1.convertTextStyleToRNTextStyle)(style) ?? {};
        item.labelStyle = convertedStyle;
        item.hidesSharedBackground = backgroundColor === 'transparent';
    }
    else {
        item.hidesSharedBackground = false;
    }
    if (badgeComponent) {
        item.badge = {
            value: badgeComponent.props.children ?? '',
        };
        const badgeStyle = (0, utils_1.convertTextStyleToRNTextStyle)(badgeComponent.props.style);
        if (badgeStyle) {
            item.badge.style = badgeStyle;
        }
    }
    if (icon) {
        item.icon = icon;
    }
    return item;
}
//# sourceMappingURL=shared.js.map
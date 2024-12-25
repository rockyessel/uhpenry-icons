'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { getIcon } from '../../lib';
const UnsourceIcon = (props) => {
    const { name, className, size, defaultOption } = props, rest = __rest(props, ["name", "className", "size", "defaultOption"]);
    if (!name)
        return null;
    const Icon = getIcon(name, defaultOption);
    return React.createElement(Icon, Object.assign({ size: size, className: className }, rest));
};
export default UnsourceIcon;

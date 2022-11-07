/**
 * 自定义iconfont
 * @param props {object}
 * @name className {string} 类型
 * @example <Icon className="图标名称" />
 *
 * */

import React from "react";
import classnames from "classnames";
import "./style/iconfont.css";

const Icon = ({ className = "", pointer, ...restProps }: any) => {
  return (
    <span
      className={classnames("iconfont", className.includes('icon-') ? className : `icon-${className}`)}
      style={{ cursor: pointer ? "pointer" : "" }}
      {...restProps}
    />
  );
};

export default Icon;

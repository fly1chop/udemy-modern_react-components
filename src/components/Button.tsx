import React from 'react';
import classNames from 'classnames';

export enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

interface Props {
  children: React.ReactNode;
  variant: Variant;
  rounded?: boolean;
  outline?: boolean;
  [props: string]: any;
}

function Button({
  children,
  variant,
  rounded = false,
  outline = false,
  ...props
}: Props) {
  const baseStyle = 'px-3 py-1.5 border flex items-center gap-1';
  const styleClassNames = classNames(baseStyle, props.className, {
    'border-blue-500 bg-blue-500': variant === 'primary',
    'border-gray-900 bg-gray-900': variant === 'secondary',
    'border-green-600 bg-green-500': variant === 'success',
    'border-yellow-400 bg-yellow-400': variant === 'warning',
    'border-red-600 bg-red-500': variant === 'danger',
    'text-white': !outline,
    'rounded-full': rounded,
    'bg-white': outline,
    'px-1.5': typeof children === 'object' && !Array.isArray(children),
  });

  return (
    <button {...props} className={styleClassNames}>
      {children}
    </button>
  );
}

export default Button;

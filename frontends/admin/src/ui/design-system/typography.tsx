import React from "react";

interface Props {
  variant?:  Variant;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  children: React.ReactNode;
  className?: string;
}

type Variant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body-lg' | 'body-base' | 'body-sm' | 'caption1' | 'caption2' | 'caption3' | 'caption4';

export const Typography = ({children, variant, component: Component = 'div', className}: Props) => {

  let varientStyles: string = '';

  switch (variant) {
    case 'h2':
      varientStyles = 'text-red-500';
  }

  return (
    <Component className={varientStyles}>
      {children}
    </Component>
  )
}
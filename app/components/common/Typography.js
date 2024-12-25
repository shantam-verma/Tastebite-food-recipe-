import React from 'react';

const tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'p',
  'body-small': 'p',
  small: 'span',
};

const sizes = {
  h1: 'font-bold text-[clamp(24px,4.5vw,62px)]',
  h2: 'font-bold text-[clamp(22px,4vw,48px)]',
  h3: 'font-bold text-[clamp(20px,2.5vw,32px)]',
  h4: 'font-bold text-[clamp(18px,2vw,28px)]',
  h5: 'font-bold text-[clamp(16px,1.8vw,24px)]',
  body: 'text-[clamp(14px,2vw,20px)]',
  'body-small': 'text-[clamp(12px,1.5vw,18px)]',
  small: 'text-[clamp(10px,1.2vw,16px)]',
};

export const Typography = ({ variant, children, className, as }) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className || ''}`}>{children}</Tag>;
};

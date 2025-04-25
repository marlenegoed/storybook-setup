import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return <button className={clsx(styles.button, styles[variant])} {...props} />;
};

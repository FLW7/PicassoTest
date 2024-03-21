import { ReactNode } from 'react';
import styles from './container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

export default Container;

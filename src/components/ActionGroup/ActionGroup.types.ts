import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export interface ActionGroupRootProps extends HTMLAttributes<HTMLDivElement> {
  floated?: boolean;
}

export type ActionGroupItemProps = ButtonHTMLAttributes<HTMLButtonElement>;

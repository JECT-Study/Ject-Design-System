'use client';

import { forwardRef } from 'react';

import { ActionGroupItemProps, ActionGroupRootProps } from './ActionGroup.types';

const ActionGroupRoot = forwardRef<HTMLDivElement, ActionGroupRootProps>(
  ({ floated = false, className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-6 border-semantic-stroke-subtle bg-semantic-surface-shallow flex items-center overflow-hidden border ${floated ? 'shadow-md' : ''} ${className} `}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ActionGroupRoot.displayName = 'ActionGroup.Root';

const ActionGroupItem = forwardRef<HTMLButtonElement, ActionGroupItemProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`border-semantic-stroke-subtle flex items-center justify-center border-r bg-transparent p-4 transition-colors last:border-r-0 ${className} `}
        {...props}
      >
        {children}
      </button>
    );
  },
);

ActionGroupItem.displayName = 'ActionGroup.Item';

export const ActionGroup = {
  Root: ActionGroupRoot,
  Item: ActionGroupItem,
};

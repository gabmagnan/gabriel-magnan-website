import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Icon, { type IconName } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        skill:
          'border-transparent bg-muted/80 text-foreground backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  width?: number;
  height?: number;
  icon?: IconName;
}

function Badge({
  className,
  variant,
  width = 15,
  height = 15,
  icon,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon && (
        <Icon className="me-2" height={height} icon={icon} width={width} />
      )}
      {props.children}
    </div>
  );
}

export { Badge, badgeVariants };

"use client";

import React, { ReactNode } from 'react';
import { Card, CardProps } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface AnimatedGradientCardProps extends CardProps {
  gradientClassName?: string;
  children?: ReactNode;
}

const AnimatedGradientCard = React.forwardRef<HTMLDivElement, AnimatedGradientCardProps>(
  ({ className, gradientClassName, children, ...props }: any, ref) => {
    return (
      <div className="relative group">
        <div
          className={cn(
            "absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt",
            gradientClassName
          )}
        />
        <Card
          ref={ref}
          className={cn("relative bg-white dark:bg-black rounded-lg overflow-hidden", className)}
          {...props}
        >
          {children}
        </Card>
      </div>
    );
  }
);

AnimatedGradientCard.displayName = "AnimatedGradientCard";

export { AnimatedGradientCard };

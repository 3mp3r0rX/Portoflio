"use client"

import React from 'react';
import { Card, CardProps } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface AnimatedGradientCardProps extends CardProps {
  gradientClassName?: string;
}

const AnimatedGradientCard = React.forwardRef<HTMLDivElement, AnimatedGradientCardProps>(
  ({ className, gradientClassName, ...props }, ref) => {
    return (
      <div className="relative group">
        <div
          className={cn(
            "absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt",
            gradientClassName
          )}
        />
        <Card
          ref={ref}
          className={cn("relative", className)}
          {...props}
        />
      </div>
    );
  }
);

AnimatedGradientCard.displayName = "AnimatedGradientCard";

export { AnimatedGradientCard };
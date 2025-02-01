import { forwardRef } from 'react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageProps extends Omit<NextImageProps, 'className'> {
  className?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, alt, ...props }, ref) => {
    return (
      <div className={cn('overflow-hidden', className)}>
        <NextImage
          ref={ref}
          alt={alt}
          className="object-cover"
          quality={75}
          {...props}
        />
      </div>
    );
  }
);
Image.displayName = 'Image';

export { Image };

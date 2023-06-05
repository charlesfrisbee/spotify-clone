import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "~/utils/twhelper";

const itemImageVariants = cva("", {
  variants: {
    variant: {
      default: "rounded-md",
      artist: "rounded-full",
      album: "rounded-full",
      playlist: "rounded-md",
    },
    size: {
      sm: "h-12 w-12",
      md: "h-16 w-16",
      lg: "h-20 w-20",
      responsive: "aspect-square w-full object-cover object-center",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ItemImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof itemImageVariants> {}

const ItemImage = React.forwardRef<HTMLImageElement, ItemImageProps>(
  ({ src, size, alt, className, variant, ...props }, ref) => {
    return (
      <img
        src={src}
        className={cn(itemImageVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        alt={alt}
      />
    );
  }
);
ItemImage.displayName = "Button";

export default ItemImage;

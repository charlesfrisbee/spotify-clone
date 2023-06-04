import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "~/utils/twhelper";

const itemImageVariants = cva("h-12 w-12", {
  variants: {
    variant: {
      default: "rounded-md",
      artist: "rounded-full",
      album: "rounded-full",
      playlist: "rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ItemImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof itemImageVariants> {}

const ItemImage = React.forwardRef<HTMLImageElement, ItemImageProps>(
  ({ src, className, variant, ...props }, ref) => {
    return (
      <img
        src={src}
        className={cn(itemImageVariants({ variant, className }))}
        ref={ref}
        {...props}
        alt="alt text"
      />
    );
  }
);
ItemImage.displayName = "Button";

export default ItemImage;

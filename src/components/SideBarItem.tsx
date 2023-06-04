import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/twhelper";
import ItemImage from "./ItemImage";

type SideBarItemProps = {
  itemName: string;
  itemInfo: string;
  type: "artist" | "album" | "playlist";
  src: string;
};

const SideBarItem = ({ itemName, itemInfo, type, src }: SideBarItemProps) => {
  return (
    <div className="flex cursor-pointer gap-4 rounded-md p-2 transition-colors duration-300 hover:bg-gray-800">
      <ItemImage variant={type} src={src} />
      <div className="flex flex-col items-start gap-2">
        <span>{itemName}</span>
        <span className="text-xs text-gray-500">{itemInfo}</span>
      </div>
    </div>
  );
};

export default SideBarItem;

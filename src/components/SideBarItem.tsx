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
    <div className="flex items-center gap-4 rounded-md p-2 transition-colors duration-300 hover:bg-gray-800">
      <ItemImage variant={type} src={src} />
      <div className="flex flex-col">
        <span>{itemName}</span>
        <span>{itemInfo}</span>
      </div>
    </div>
  );
};

export default SideBarItem;

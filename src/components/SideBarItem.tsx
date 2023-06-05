import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/twhelper";
import ItemImage from "./ItemImage";
import Link from "next/link";

type SideBarItemProps = {
  itemName: string;
  itemInfo: string;
  type: "artist" | "album" | "playlist";
  src: string;
};

const SideBarItem = ({ itemName, itemInfo, type, src }: SideBarItemProps) => {
  return (
    <Link
      href="/test"
      className="flex cursor-pointer gap-4 rounded-md p-2 transition-colors duration-300 hover:bg-gray-800"
    >
      <ItemImage variant={type} src={src} size={"sm"} />
      <div className="flex flex-col items-start gap-2">
        <span>{itemName}</span>
        <span className="text-xs text-gray-500">{itemInfo}</span>
      </div>
    </Link>
  );
};

export default SideBarItem;

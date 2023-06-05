import { ArrowRight, Home, Library, Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Dropdown } from "./DropDown";
import SideBarItem from "./SideBarItem";
import { ScrollArea } from "./ui/scroll-area";

const topItems = [
  {
    icon: Home,
    text: "Home",
  },
  {
    icon: Search,
    text: "Search",
  },
];

const SideBar = () => {
  return (
    <div className="flex h-screen w-2/12 min-w-fit flex-col gap-2 p-2 text-sm">
      <section className="rounded-md bg-slate-900/80 p-5" id="top-part">
        <ul className=" flex flex-col gap-6 font-semibold">
          {topItems.map((item) => (
            <li className="flex items-center gap-4" key={item.text}>
              <item.icon className="h-6 w-6" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
      <section
        className="flex h-full flex-col overflow-hidden rounded-md bg-slate-900/80 pb-2 pl-2 pr-2 pt-4"
        id="main-part"
      >
        <header className="flex items-center justify-between gap-6 pl-2">
          <div className="inline-flex gap-6 text-gray-400 transition-colors duration-300 hover:cursor-pointer hover:text-white">
            <Library />
            Your library
          </div>
          <div className="inline-flex items-center gap-6 ">
            <Plus className="text-gray-400 transition-colors duration-300 hover:cursor-pointer hover:text-white" />
            <ArrowRight className="text-gray-400 transition-colors duration-300 hover:cursor-pointer hover:text-white" />
          </div>
        </header>
        <section className="flex items-center justify-between pt-4">
          <Search className="h-4 w-5" />
          <Dropdown />
        </section>
        <ScrollArea className="flex max-h-full flex-col">
          <SideBarItem
            itemName="Liked Songs"
            itemInfo="Playlist - 1379 songs"
            type="playlist"
            src={"https://misc.scdn.co/liked-songs/liked-songs-640.png"}
          />
          <SideBarItem
            itemName="Your episodes"
            itemInfo="Saved & downloaded episodes"
            type="playlist"
            src={"https://misc.scdn.co/your-episodes/SE-640.png"}
          />
          <SideBarItem
            itemName="Radiolab"
            itemInfo="Podcast - WNYC Studios"
            type="playlist"
            src={
              "https://i.scdn.co/image/ab6765630000c3440f5e5d3a9892bdcedf2c72b6"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />{" "}
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="2NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
          <SideBarItem
            itemName="2NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
        </ScrollArea>
      </section>
    </div>
  );
};

export default SideBar;

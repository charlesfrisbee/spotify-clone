import { ArrowRight, Home, Library, Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Dropdown } from "./DropDown";
import SideBarItem from "./SideBarItem";

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
    <div className="flex h-screen w-2/12 min-w-fit flex-col gap-2 p-2">
      <section className="rounded-md bg-slate-900/80 p-6" id="top-part">
        <ul className=" flex flex-col gap-6 font-semibold">
          {topItems.map((item) => (
            <li className="flex items-center gap-6" key={item.text}>
              <item.icon className="h-6 w-6" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
      <section
        className="flex-1 gap-4 overflow-hidden rounded-md bg-slate-900/80 p-6"
        id="main-part"
      >
        <header className="flex items-center justify-between gap-6">
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
        <section className="flex max-h-full flex-col overflow-y-scroll">
          <SideBarItem
            itemName="Liked Songs"
            itemInfo="Playlist - 1379 songs"
            type="playlist"
            src={"https://misc.scdn.co/liked-songs/liked-songs-640.png"}
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
          />{" "}
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
          />{" "}
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
          />{" "}
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
          />{" "}
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
          />{" "}
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
          />{" "}
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
          />{" "}
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
          />{" "}
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
          />{" "}
          <SideBarItem
            itemName="3NIGMA"
            itemInfo="Artist"
            type="artist"
            src={
              "https://i.scdn.co/image/ab6761610000a0005e2b010d47e2ae21dc564719"
            }
          />
        </section>
      </section>
    </div>
  );
};

export default SideBar;

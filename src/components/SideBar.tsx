import { ArrowRight, Home, Library, Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Dropdown } from "./DropDown";

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
        className="flex-1 gap-4 rounded-md bg-slate-900/80 p-6"
        id="main-part"
      >
        <header className="flex items-center justify-between gap-6">
          <div className="inline-flex gap-6">
            <Library />
            Your library
          </div>
          <div className="inline-flex items-center gap-6">
            <Plus />
            <ArrowRight />
          </div>
        </header>
        <section className="flex items-center justify-between pt-4">
          <Search className="h-4 w-5" />
          <Dropdown />
        </section>
      </section>
    </div>
  );
};

export default SideBar;

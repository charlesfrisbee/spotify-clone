import { ArrowRight, Home, Library, Plus, Search } from "lucide-react";
import { Button } from "./Button";

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
    <div className="flex h-screen w-2/12 flex-col gap-2 p-2">
      <section className="rounded-md bg-slate-900/80 p-4" id="top-part">
        <ul className=" flex flex-col gap-4 font-semibold">
          {topItems.map((item) => (
            <li className="flex items-center gap-4" key={item.text}>
              <item.icon className="h-6 w-6" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex-1 rounded-md bg-slate-900/80 p-4" id="main-part">
        <header className="flex items-center justify-between gap-4">
          <div className="inline-flex gap-4">
            <Library />
            Your library
          </div>
          <div className="inline-flex gap-4">
            <Plus />
            <ArrowRight />
          </div>
          {/* <Button variant={"destructive"}>
            <span>hey</span>
          </Button> */}
        </header>
      </section>
    </div>
  );
};

export default SideBar;

import DataTable from "./DataTable";
import GridItem from "./GridItem";
import Header from "./Header";
import ItemImage from "./ItemImage";
import { ScrollArea } from "./ui/scroll-area";

const MainSection = () => {
  return (
    <main className="h-screen flex-1 overflow-hidden">
      <div className="flex h-full flex-col py-2 pr-2">
        <div className="flex h-full flex-col rounded-md bg-gray-600/30 p-2 py-2  pr-2 text-sm">
          <Header />
          <ScrollArea className="h-full rounded-md  p-2 text-sm">
            <div className="grid grid-cols-1 gap-6 p-3 sm:grid-cols-2 md:grid-cols-3 md:p-6 lg:grid-cols-6 xl:grid-cols-8">
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
            </div>
            <DataTable />
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default MainSection;

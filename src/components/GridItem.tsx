import ItemImage from "./ItemImage";

const GridItem = () => {
  return (
    <div className="flex cursor-pointer flex-col rounded-md bg-gray-800/70 p-4 transition-colors duration-300 hover:bg-gray-700">
      <ItemImage
        src="https://i.scdn.co/image/ab6765630000c3440f5e5d3a9892bdcedf2c72b6"
        variant="playlist"
        size={"responsive"}
        className="aspect-sqaure w-full object-cover object-center"
        alt="Darknet Diaries"
      />
      <p className="text-lg font-bold">Darknet Diaries</p>
      <p className="">Jack Rhysider</p>
    </div>
  );
};

export default GridItem;

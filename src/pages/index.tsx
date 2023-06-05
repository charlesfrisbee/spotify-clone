import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SideBar from "~/components/SideBar";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-black text-white">
        <SideBar />
        <main className="m-2 flex-1">
          <div className=" h-full  rounded-md bg-gray-600 text-sm">
            Main section
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;

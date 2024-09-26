import { Button } from "@nextui-org/button";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Head from "next/head";
import Image from "next/image";
import Header from "./_components/Header"
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="bg-[#cad3ff]">
      {/*Header*/}
      <Header/>

      {/*Hero*/}
      <Hero/>
    </div>
  );
}

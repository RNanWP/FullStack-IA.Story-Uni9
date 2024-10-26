import { Button } from "@nextui-org/button";
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers";
import Head from "next/head";
import Image from "next/image";
import Header from "./_components/Header"
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6] overflow-hidden min-h-screen">

      {/*Hero*/}
      <Hero/>
    </div>
  );
}

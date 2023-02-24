import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Intro from "@/components/Intro/Intro";
import RoyalService from "@/components/RoyalService/RoyalService";
import Architecture from "@/components/ArchitectureComponents/Architecture";
import Location from "@/components/LocationComponents/Location";
import ResidentialComplex from "@/components/ResidentialComplex/ResidentialComplex";
import Description from "@/components/Description/Description";
import Landscaping from "@/components/Landscaping/Landscaping";
import { Planning } from "@/components/Planning/Planning";
import { useEffect, useState } from "react";

const AroundViewer = dynamic(
  () =>
    import("../components/AroundViewer/AroundViewer").then(
      (res) => res.AroundViewer
    ),
  { ssr: false }
);

export default function Home() {

  return (
    <>
      <Head>
        <title>Brooklyn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Intro />
        <RoyalService />
        <Architecture />
        <ResidentialComplex />
        <Description />
        <Landscaping />
        <Planning />
        <AroundViewer />
        <Location />
    </>
  );
}

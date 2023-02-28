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
import CallBack from "@/components/CallBackHun/CallBack";
import { useEffect, useState } from "react";
import ContactUs from "@/components/ContactUs/ContactUs";
import { outputFileTracing } from "@/next.config";
import PlanningMobile from "@/components/PlaningMobile/PlanningMobile";

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
        <meta name="description" content="Brooklyn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Intro />
      <RoyalService />
      <Architecture />
      <ContactUs />
      <ResidentialComplex />
      <Description />
      <Landscaping />
      <ContactUs />
      <Planning />
      <PlanningMobile />
      <AroundViewer />
      <Location />
      <CallBack />
    </>
  );
}

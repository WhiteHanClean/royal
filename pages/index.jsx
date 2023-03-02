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
          <meta
              keywords="
                Строительство
                Ремонт и отделка
                Архитектура и проектирование
                Новостройки
                Коммерческая недвижимость
                Жилая недвижимость
                Промышленное строительство
                Инженерные сети и коммуникации
                Строительные материалы и оборудование
                Управление проектами и строительными работами
                Безопасность на строительных объектах
                Экологические аспекты строительства
                Строительные технологии и инновации
                Финансовые аспекты строительства
                Юридические аспекты строительства.
                Капитальный ремонт и реконструкция зданий
                Строительство дорог и мостов
                Производство строительных материалов
                Энергоэффективное строительство
                Строительство объектов инфраструктуры
                Благоустройство и ландшафтный дизайн
                Проектно-изыскательские работы
                Аренда спецтехники и оборудования для строительства
                Разработка и согласование проектной документации
                Строительство промышленных и складских комплексов
                Консультационные услуги в сфере строительства
                Оценка стоимости строительства и сметное проектирование
                Управление энергетической эффективностью зданий
                Строительство коттеджей и загородных домов
                Строительство объектов социальной инфраструктуры (школы, больницы и т.д.).
              "
          ></meta>
      </Head>
      <Intro />
      <RoyalService />
      <Architecture />
      <ContactUs text="ПОЛУЧИТЕ БОЛЕЕ ОБШИРНУЮ ИНФОРМАЦИЮ!"/>
      <ResidentialComplex />
      <Description />
      <Landscaping />
      <ContactUs text="ОСТАЛИСЬ ВОПРОСЫ?" text2="С УДОВОЛЬСТВИЕМ НА НИХ ОТВЕТИМ!" />
      <Planning />
      <PlanningMobile />
      <AroundViewer />
      <Location />
      <CallBack />
    </>
  );
}

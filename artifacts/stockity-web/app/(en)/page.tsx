import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FootballBannerSection from "@/components/FootballBannerSection";
import EarthSection from "@/components/EarthSection";
import TradersNeedsSection from "@/components/TradersNeedsSection";
import UsableSection from "@/components/UsableSection";
import AssetsSection from "@/components/AssetsSection";
import ProtectSection from "@/components/ProtectSection";
import CopytradingSection from "@/components/CopytradingSection";
import WithdrawSection from "@/components/WithdrawSection";
import DeviceSection from "@/components/DeviceSection";
import CharitySection from "@/components/CharitySection";
import PartnerSection from "@/components/PartnerSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      id: "/id",
      "x-default": "/",
    },
  },
};

export default function Home() {
  return (
    <main>
      <Header locale="en" />
      <HeroSection locale="en" />
      <FootballBannerSection locale="en" />
      <EarthSection locale="en" />
      <TradersNeedsSection locale="en" />
      <UsableSection locale="en" />
      <AssetsSection locale="en" />
      <ProtectSection locale="en" />
      <CopytradingSection locale="en" />
      <WithdrawSection locale="en" />
      <DeviceSection locale="en" />
      <CharitySection locale="en" />
      <PartnerSection locale="en" />
      <ReviewsSection locale="en" />
      <FaqSection locale="en" />
      <JoinSection locale="en" />
      <Footer locale="en" />
    </main>
  );
}

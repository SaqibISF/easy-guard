import React, { FC } from "react";
import HomeSection from "@/components/sections/HomeSection";
import WhyChooseEasyGuardSection from "../components/sections/WhyChooseEasyGuardSection";
import Section from "@/components/Section";
import DownloadSection from "@/components/sections/DownloadSection";
import { Button } from "@heroui/button";
import Link from "next/link";
import { DOWNLOADS_PAGE_PATH } from "@/lib/pathnames";

const HomePage: FC = () => (
  <>
    <HomeSection isHeroSection bgDefaultGradient />

    <WhyChooseEasyGuardSection bgDefault />

    <Section className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { title: "5M+", subTitle: "Trusted Users" },
        { title: "100+", subTitle: "Server Locations" },
        { title: "99.9%", subTitle: "Uptime" },
        { title: "24/7", subTitle: "Support" },
      ].map(({ title, subTitle }, index) => (
        <div key={index} className="space-y-2">
          <h1 className="text-primary text-2xl font-bold">{title}</h1>
          <p className="text-default-500 text-base">{subTitle}</p>
        </div>
      ))}
    </Section>

    <DownloadSection />

    <Section
      bgDefaultGradient
      heading="Ready to Secure Your Digital Life?"
      description="Join millions of users who trust SafePro VPN to protect their online privacy and security."
    >
      <Button as={Link} href={DOWNLOADS_PAGE_PATH} color="primary" size="lg">
        Get Started
      </Button>
    </Section>
  </>
);

export default HomePage;

import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
  SectionProps,
} from "../Section";
import { Button } from "@heroui/button";
import Link from "next/link";
import { PRICING_PAGE_PATH } from "@/lib/pathnames";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

const HomeSection: FC<SectionProps> = ({ ...props }) => (
  <Section className="grid lg:grid-cols-2 gap-8" {...props}>
    <div className="flex flex-col items-start order-2 lg:order-1">
      <SectionHeading className="text-4xl sm:text-5xl font-black text-start">
        Secure Your <span className="text-primary">Digital Life</span>
      </SectionHeading>

      <SectionDescription className="lg:w-full text-start p-0 font-medium leading-8">
        Experience ultimate online privacy and security with Essay Guard VPN.
        Connect to 100+ servers worldwide and browse the internet safely.
      </SectionDescription>
      <Button as={Link} href={PRICING_PAGE_PATH} color="primary" size="lg">
        Get Started
      </Button>

      <div className="mt-4 flex gap-8">
        {["30-day money-back", "No Logs Policy"].map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <CheckCircleIcon className="size-4 text-primary" />
            <span className="text-default-500">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <Image
      src="/home-section-image.png"
      alt="Home Section Image"
      width={0}
      height={0}
      sizes="100vw"
      className="w-full max-w-lg h-auto place-self-center order-1 lg:order-2"
      placeholder="blur"
      blurDataURL="/home-section-image.png"
    />
  </Section>
);

export default HomeSection;

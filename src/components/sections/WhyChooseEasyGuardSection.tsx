import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Card, CardBody } from "@heroui/card";
import {
  GlobeAltIcon,
  LockClosedIcon,
  EyeSlashIcon,
  BoltIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const WhyChooseEasyGuardSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    heading="Why Choose EasyGuard VPN?"
    description="Advanced security features to protect your online presence"
    {...props}
  >
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Military-Grade Encryption",
          description:
            "AES-256 encryption protects your data with the same security standards used by governments.",
          Icon: LockClosedIcon,
        },
        {
          title: "100+ Server Locations",
          description:
            "Access content from anywhere with our global network of high-speed servers.",
          Icon: GlobeAltIcon,
        },
        {
          title: "Zero Logs Policy",
          description:
            "We don't track, collect, or store your online activity. Your privacy is guaranteed.",
          Icon: EyeSlashIcon,
        },
        {
          title: "Lightning Fast",
          description:
            "Optimized servers ensure you get the fastest possible connection speeds.",
          Icon: BoltIcon,
        },
        {
          title: "Multi-Device Support",
          description:
            "Protect up to 10 devices simultaneously with a single subscription.",
          Icon: QuestionMarkCircleIcon,
        },
        {
          title: "24/7 Support",
          description:
            "Get help whenever you need it with our round-the-clock customer support.",
          Icon: InformationCircleIcon,
        },
      ].map(({ title, description, Icon }, index) => (
        <Card key={index}>
          <CardBody className="p-6 gap-y-4">
            <span className="size-16 bg-primary text-white rounded-2xl grid place-items-center">
              <Icon className="size-8" />
            </span>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-default-500 text-base text-justify">{description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
);

export default WhyChooseEasyGuardSection;

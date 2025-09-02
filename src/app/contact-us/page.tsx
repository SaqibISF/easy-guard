import React, { FC } from "react";
import Section, {
  SectionDescription,
  SectionHeading,
} from "@/components/Section";
import {
  MapPinIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import FeedBackFormCard from "@/components/FeedBackFormCard";
import FAQSection from "@/components/sections/FAQSection";

const ContactUsPage: FC = () => {
  return (
    <>
      <Section bgDefaultGradient>
        <SectionHeading className="text-4xl sm:text-5xl font-black text-start">
          Get in <span className="text-primary">Touch</span>
        </SectionHeading>

        <SectionDescription className="font-medium leading-8">
          Have questions about EasyGuard VPN? Our support team is here to help
          you 24/7
        </SectionDescription>
      </Section>

      <Section className="grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-start">
          <SectionHeading className="text-4xl sm:text-5xl font-black text-start">
            Send us a Message
          </SectionHeading>

          <SectionDescription className="lg:w-full text-start p-0 font-medium leading-8">
            Fill out the form and our team will get back to you within 24 hours.
            We&apos;re here to help with any questions about EasyGuard VPN.
          </SectionDescription>

          <div className="flex flex-col gap-y-6">
            {[
              {
                title: "Our Office",
                subTitle: "123 Privacy Street, Secure City, SC 12345",
                Icon: MapPinIcon,
              },
              {
                title: "Business Hours",
                subTitle: "24/7 Support Available",
                Icon: ClockIcon,
              },
              {
                title: "Security First",
                subTitle: "All communications are encrypted",
                Icon: QuestionMarkCircleIcon,
              },
            ].map(({ title, subTitle, Icon }, index) => (
              <div key={index} className="flex items-center gap-x-4">
                <span
                  className="size-16 text-primary grid place-items-center rounded-md"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 59, 48, 0.10) 0%, rgba(26, 189, 204, 0.10) 100%)",
                  }}
                >
                  <Icon className="size-8" />
                </span>
                <div className="flex-grow text-start">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-default-500 text-base">{subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <FeedBackFormCard />
      </Section>

      <FAQSection bgDefault />
    </>
  );
};

export default ContactUsPage;

"use client";

import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQSection: FC<SectionProps> = ({ ...props }) => {
  const faqs = [
    {
      question: "How do I set up EasyGuard VPN?",
      answer:
        "Setting up EasyGuard VPN is simple. Download the app for your device, create an account, and connect to any server location with just one click.",
    },
    {
      question: "Can I use EasyGuard VPN on multiple devices?",
      answer:
        "You’ll be automatically billed $11.99/month — no contracts, cancel whenever.",
    },
    {
      question: "What is your refund policy?",
      answer: "Never. We operate with a 100% no-logs policy.",
    },
    {
      question: "Do you keep logs of my activity?",
      answer: "No. Our global server architecture is optimized for speed.",
    },
    {
      question: "Which devices are supported?",
      answer: "Yes — one account covers unlimited devices.",
    },
  ];

  return (
    <Section
      heading="Frequently Asked Questions"
      description="Quick answers to common questions about EasyGuard VPN"
      {...props}
    >
      <Accordion variant="splitted" className="max-w-3xl">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            aria-label={"FAQ " + (index + 1)}
            title={faq.question}
            className="text-start"
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQSection;

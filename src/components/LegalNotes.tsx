import React, { FC } from "react";
import Section from "./Section";
import { Alert } from "@heroui/alert";

const LegalNotes: FC<{
  heading: string;
  htmlContent?: string;
  errorMessage?: string;
}> = ({ heading, htmlContent, errorMessage }) => (
  <Section className="flex-col justify-start gap-4 py-10">
    <h2 className="text-4xl sm:text-5xl font-bold">{heading}</h2>

    {errorMessage && (
      <Alert
        color="danger"
        title={errorMessage}
        classNames={{ base: "w-full max-w-xl flex-grow-0" }}
      />
    )}

    {htmlContent && (
      <article
        className="w-full max-w-7xl prose prose-neutral dark:prose-invert text-start"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    )}
  </Section>
);

export default LegalNotes;

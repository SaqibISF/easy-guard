import React, { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  isHeroSection?: boolean;
  heading?: ReactNode;
  description?: ReactNode;
  bgDefaultGradient?: boolean;
  bgDefault?: boolean;
  classNames?: {
    section?: string;
    container?: string;
    heading?: string;
    description?: string;
  };
};

const SectionHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <h1
      className={cn(
        "sm:text-4xl text-3xl font-bold leading-14 text-center mb-6",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  ) : null;

const SectionDescription: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) =>
  children ? (
    <p
      className={cn(
        "text-default-500 lg:w-2/3 px-8 text-lg leading-8 capitalize text-center mb-14",
        className
      )}
      {...props}
    >
      {children}
    </p>
  ) : null;

const Section: FC<SectionProps> = ({
  isHeroSection,
  heading,
  description,
  bgDefaultGradient,
  bgDefault,
  classNames,
  className,
  children,
  style,
  ...props
}) => (
  <section
    className={cn(
      "w-full flex flex-col items-center justify-center",
      bgDefault ? "bg-neutral-100 dark:bg-gray-900" : "",
      classNames?.section
    )}
    style={{
      background: bgDefaultGradient
        ? "linear-gradient(90deg, rgba(255, 59, 48, 0.10) 0%, rgba(26, 189, 204, 0.10) 100%)"
        : undefined,
      ...style,
    }}
    {...props}
  >
    <div
      className={cn(
        "container w-full max-w-7xl flex flex-col items-center justify-center text-center",
        isHeroSection ? "p-4 min-h-[calc(100vh-4rem)]" : "px-4 py-12 lg:py-14",
        classNames?.container,
        className
      )}
    >
      {heading && (
        <SectionHeading className={classNames?.heading}>
          {heading}
        </SectionHeading>
      )}
      {description && (
        <SectionDescription className={classNames?.description}>
          {description}
        </SectionDescription>
      )}
      {children}
    </div>
  </section>
);

export { SectionHeading, SectionDescription };

export default Section;

"use client";

import React, { FC } from "react";
import { Textarea as HeroTextarea, TextAreaProps } from "@heroui/react";

const Textarea: FC<TextAreaProps> = ({
  isRequired,
  label,
  labelPlacement = "outside",
  size = "lg",
  minRows = 5,
  errorMessage,
  ...props
}) => (
  <HeroTextarea
    label={
      isRequired ? (
        <>
          {label} <span className="text-danger-500">*</span>
        </>
      ) : (
        label
      )
    }
    labelPlacement={labelPlacement}
    size={size}
    isInvalid={errorMessage ? true : false}
    errorMessage={errorMessage}
    minRows={minRows}
    classNames={{
      inputWrapper:
        "dark:bg-gray-950 dark:outline-2 dark:outline-offset-2 dark:outline-gray-800 rounded-md",
      label: "text-start",
      errorMessage: "mt-2 whitespace-pre-line",
    }}
    {...props}
  />
);

export default Textarea;

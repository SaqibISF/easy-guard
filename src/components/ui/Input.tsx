"use client";

import React, { FC, useState } from "react";
import { Input as HeroInput, InputProps } from "@heroui/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Input: FC<InputProps> = ({
  isRequired,
  label,
  labelPlacement = "outside",
  type,
  endContent,
  size = "lg",
  errorMessage,
  ...props
}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const togglePasswordHide = () => {
    setIsPasswordShow((prev) => !prev);
  };

  return (
    <HeroInput
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
      type={type === "password" ? (isPasswordShow ? "text" : "password") : type}
      size={size}
      isInvalid={errorMessage ? true : false}
      errorMessage={errorMessage}
      classNames={{
        inputWrapper: "dark:bg-gray-950 dark:outline-2 dark:outline-offset-2 dark:outline-gray-800 rounded-md",
        errorMessage: "mt-2 whitespace-pre-line",
      }}
      endContent={
        type === "password" ? (
          isPasswordShow ? (
            <EyeIcon
              onClick={togglePasswordHide}
              className="w-5 text-default-500 cursor-default"
            />
          ) : (
            <EyeSlashIcon
              onClick={togglePasswordHide}
              className="w-5 text-default-500 cursor-default"
            />
          )
        ) : (
          endContent
        )
      }
      {...props}
    />
  );
};

export default Input;

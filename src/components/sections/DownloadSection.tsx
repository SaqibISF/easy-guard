import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Button } from "@heroui/button";
import WindowsIcon from "@/icons/WindowsIcon";
import AppleIcon from "@/icons/AppleIcon";
import AndroidIcon from "@/icons/AndroidIcon";
import AppleStoreIcon from "@/icons/AppleStoreIcon";

const DownloadSection: FC<SectionProps> = ({ ...props }) => {
  return (
    <Section
      heading="Download EasyGuard VPN"
      description="Available on all your favorite platforms"
      {...props}
    >
      <div className="w-full flex flex-wrap justify-center gap-8">
        {[
          {
            title: "Windows",
            subTitle: "Windows 7, 8, 10, 11",
            Icon: WindowsIcon,
          },
          { title: "macOS", subTitle: "macOS 10.13+", Icon: AppleIcon },
          { title: "Android", subTitle: "Android 5.0+", Icon: AndroidIcon },
          { title: "iOS", subTitle: "iOS 12.0+", Icon: AppleStoreIcon },
        ].map(({ title, subTitle, Icon }, index) => (
          <Button
            key={index}
            variant="flat"
            className="w-56 p-6 h-auto dark:bg-gray-900 flex flex-col items-center gap-1"
          >
            <Icon className="size-12 text-primary" />
            <span className="text-base font-semibold">{title}</span>
            <span className="text-default-500 text-sm mt-2">{subTitle}</span>
          </Button>
        ))}
      </div>
    </Section>
  );
};

export default DownloadSection;

import React, { FC } from "react";
import Image from "next/image";

const AppLogo: FC = () => (
  <div className="flex items-center gap-1">
    <Image
      src="/logo.png"
      alt="logo"
      width={0}
      height={0}
      sizes="100vw"
      className="w-12 h-auto"
    />
    <span className="flex-grow text-xl font-bold">EasyGuard</span>
  </div>
);

export default AppLogo;

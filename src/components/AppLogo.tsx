import React, { FC } from "react";
import ShieldIcon from "@/icons/ShieldIcon";

const AppLogo: FC = () => (
  <div className="flex items-center gap-1">
    <span className="bg-primary p-2 rounded-xl">
      <ShieldIcon className="text-white size-8" />
    </span>
    <span className="flex-grow text-xl font-bold">Easy Guard</span>
  </div>
);

export default AppLogo;

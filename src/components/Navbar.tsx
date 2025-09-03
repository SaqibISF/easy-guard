"use client";

import React, { FC } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { link as linkStyles } from "@heroui/theme";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { ThemeSwitch } from "@/components/ThemeSwitch";

import {
  HOME_PAGE_PATH,
  CONTACT_US_PAGE_PATH,
  DOWNLOADS_PAGE_PATH,
} from "@/lib/pathnames";
import AppLogo from "./AppLogo";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  const pathname = usePathname();

  const navItems: { label: string; href: string }[] = [
    // { label: "Home", href: HOME_PAGE_PATH },
    // {
    //   label: "Features",
    //   href: FEATURES_PAGE_PATH,
    // },
  ];

  return (
    <HeroUINavbar position="static" maxWidth="xl" className="bg-transparent">
      <NavbarContent>
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link href={HOME_PAGE_PATH}>
            <AppLogo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-8 justify-start ml-2">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={cn(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium border-b-2 border-transparent pb-2 duration-300",
                  pathname === item.href
                    ? "text-primary border-primary dark:text-white dark:border-white"
                    : "text-foreground"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex lg:gap-4 gap-3">
          <ThemeSwitch />

          <Button
            as={Link}
            href={DOWNLOADS_PAGE_PATH}
            color="primary"
            radius="full"
          >
            Download
          </Button>
        </NavbarItem>
        <NavbarMenuToggle className="lg:hidden" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={
                  pathname === item.href ? "text-primary" : "text-foreground"
                }
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem>
            <Button
              as={Link}
              href={CONTACT_US_PAGE_PATH}
              color="primary"
              radius="full"
              fullWidth
            >
              Contact Us
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;

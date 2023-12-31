import MobileDialog from "./mobile-dialog";
import { useTranslations } from "next-intl";
import LanguageButton from "@/components/navbar/language-button";
import Link from "next-intl/link";
import ThemeButton from "@/components/navbar/theme-button";

export default function Navbar() {
  const dict = useTranslations("Components.Navbar");
  const navigations = [
    { name: dict("posts"), href: "/posts" },
    { name: dict("about"), href: "/about" },
  ];
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between border-b border-b-gray-200 p-6 dark:border-b-gray-800 lg:px-8"
        aria-label="Navbar"
        role="navigation"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">1BitBool</span>
            <img className="h-8 w-auto" src="/assets/logo.svg" alt="1BitBool" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <ThemeButton
            dict={{
              system: dict("ThemeButton.system"),
              light: dict("ThemeButton.light"),
              dark: dict("ThemeButton.dark"),
            }}
            aria_dict={{ switch_theme: dict("Aria.switch_theme") }}
          ></ThemeButton>
          <LanguageButton
            aria_dict={{ switch_language: dict("Aria.switch_language") }}
          ></LanguageButton>
          <div className="flex lg:hidden">
            <MobileDialog
              navigations={navigations}
              aria_dict={{
                open_menu: dict("Aria.open_menu"),
                close_menu: dict("Aria.close_menu"),
              }}
            ></MobileDialog>
          </div>
        </div>
      </nav>
    </header>
  );
}

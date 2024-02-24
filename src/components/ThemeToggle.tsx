"use client";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
// icons
import { MdSunny, MdDarkMode } from "react-icons/md";
// utils
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const ThemeDropdownItem = ({
  themeOption,
}: {
  themeOption: "Light" | "Dark" | "System";
}) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuItem
      onClick={() => setTheme(themeOption.toLowerCase())}
      className="text-base"
    >
      {themeOption}
    </DropdownMenuItem>
  );
};

const ThemeToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="size-12 rounded-full"
        >
          <MdSunny className={cn("size-full p-2 text-primary dark:hidden")} />
          <MdDarkMode
            className={cn("size-full p-2 hidden dark:block dark:scale-100")}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ThemeDropdownItem themeOption="Light" />
        <ThemeDropdownItem themeOption="Dark" />
        <ThemeDropdownItem themeOption="System" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;

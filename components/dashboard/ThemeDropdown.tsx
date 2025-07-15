import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const themeOptions = [
  {
    value: "theme-light-blue",
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    value: "theme-light-emerald",
    gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
  },
  {
    value: "theme-light-rose",
    gradient: "bg-gradient-to-br from-rose-400 to-rose-600",
  },
  {
    value: "theme-light-amber",
    gradient: "bg-gradient-to-br from-amber-400 to-amber-500",
  },
  {
    value: "theme-dark-purple",
    gradient: "bg-gradient-to-br from-purple-700 to-purple-900",
  },
  {
    value: "theme-dark-cyan",
    gradient: "bg-gradient-to-br from-cyan-700 to-cyan-900",
  },
  {
    value: "theme-dark-lime",
    gradient: "bg-gradient-to-br from-lime-500 to-lime-700",
  },
  {
    value: "theme-dark-red",
    gradient: "bg-gradient-to-br from-red-700 to-red-900",
  },
];

const LOCAL_KEY = "custom-theme";

export function ThemeDropdown() {
  const currentTheme =
    typeof window !== "undefined"
      ? localStorage.getItem(LOCAL_KEY)
      : "theme-light-blue";

  const setTheme = (theme: string) => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_KEY, theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="grid grid-cols-4 gap-2 p-3 w-36">
        {themeOptions.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setTheme(theme.value)}
            className={`w-6 h-6 rounded-full border-2 ${
              currentTheme === theme.value
                ? "border-accent"
                : "border-transparent"
            } ${theme.gradient} transition hover:scale-110`}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

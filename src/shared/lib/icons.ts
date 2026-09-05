import { createElement } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowDownToLine,
  BarChart3,
  Bell,
  BookMarked,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CircleDashed,
  Clock,
  CloudRain,
  Ear,
  FileClock,
  HandHeart,
  Heart,
  Info,
  List,
  Minus,
  Moon,
  MoonStar,
  PencilLine,
  Plus,
  RotateCcw,
  Save,
  Search,
  Settings,
  Shield,
  Sparkles,
  Star,
  Sun,
  SunMedium,
  Sunrise,
  Sunset,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
  arrowDown: ArrowDown,
  arrowDownToLine: ArrowDownToLine,
  barChart3: BarChart3,
  bell: Bell,
  bookMarked: BookMarked,
  bookOpen: BookOpen,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  circleDashed: CircleDashed,
  clock: Clock,
  cloudRain: CloudRain,
  ear: Ear,
  fileClock: FileClock,
  handHeart: HandHeart,
  heart: Heart,
  info: Info,
  list: List,
  minus: Minus,
  moon: Moon,
  moonStar: MoonStar,
  pencil: PencilLine,
  plus: Plus,
  rotateCcw: RotateCcw,
  save: Save,
  search: Search,
  settings: Settings,
  shield: Shield,
  sparkles: Sparkles,
  star: Star,
  sun: Sun,
  sunMedium: SunMedium,
  sunrise: Sunrise,
  sunset: Sunset,
  user: User,
} satisfies Record<string, LucideIcon>;

export type AppIconName = keyof typeof ICONS;

export function getAppIcon(name: string): LucideIcon {
  if (name in ICONS) {
    return ICONS[name as AppIconName];
  }
  return BookOpen;
}

export function AppIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return createElement(getAppIcon(name), {
    className: cn(className),
    "aria-hidden": true,
  });
}

/**
 * Icon registry — maps the string names used in course data files to Lucide
 * icon components. Keeping this explicit (rather than importing all of
 * lucide-react) keeps the bundle lean.
 *
 * To use a new icon in a course, add one import here and one entry to the map.
 */
import {
  MessageSquare, Upload, Globe, Mic, Search, Settings, Folder, Plug,
  FileText, Sparkles, Keyboard, Puzzle, Code2, GitBranch, Share2, Palette,
  RefreshCw, Eye, Layers, PenLine, Boxes, Briefcase, ListTodo, Workflow,
  ShieldCheck, CalendarClock, Mail, FolderGit2, FileSearch, Bot, Repeat,
  Terminal, GitCommitHorizontal, Map, Slash, Webhook, Server,
  MonitorSmartphone, Cloud, FileCog, Clock, Database, Braces, Bell, KeyRound,
  Image,
  type LucideIcon,
} from "lucide-react"

export const ICONS: Record<string, LucideIcon> = {
  MessageSquare, Upload, Globe, Mic, Search, Settings, Folder, Plug,
  FileText, Sparkles, Keyboard, Puzzle, Code2, GitBranch, Share2, Palette,
  RefreshCw, Eye, Layers, PenLine, Boxes, Briefcase, ListTodo, Workflow,
  ShieldCheck, CalendarClock, Mail, FolderGit2, FileSearch, Bot, Repeat,
  Terminal, GitCommitHorizontal, Map, Slash, Webhook, Server,
  MonitorSmartphone, Cloud, FileCog, Clock, Database, Braces, Bell, KeyRound,
  Image,
}

/** Resolve an icon name to a component, falling back to a neutral icon. */
export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Sparkles
}

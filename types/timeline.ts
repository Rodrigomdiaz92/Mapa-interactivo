// types/timeline.ts
export type TimelineLayout = "left" | "right" | "center";

export interface TimelineItem {
  id: string;
  sectionId?: string; // Para vincular con NauticalTimelineNav (ej: 'origen', 'zarpe', 'curazao')
  badge: string;
  title: string;
  subtitle?: string;
  text: string;
  instagramUrl: string;
  quote?: string;
  layout: TimelineLayout;
}

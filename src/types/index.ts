export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'warning' | 'success';
  isNew?: boolean;
}

export interface AdBanner {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  isActive: boolean;
}

export interface Recruitment {
  id: string;
  title: string;
  game: string;
  teamName: string;
  rank: string;
  positions: string[];
  description: string;
  requirements: string[];
  contact: string;
  postedAt: string;
  isUrgent?: boolean;
}

export interface SliderImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
  isActive: boolean;
}

export interface GameStats {
  game: string;
  playerCount: number;
  teamCount: number;
  trending: boolean;
}

export interface Activity {
  emoji: string;
  message: string;
  time: string;
}
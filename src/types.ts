export interface AcademicModule {
  id: string;
  title: string;
  duration: string; // e.g. "3 min"
  xpReward: number;
  badge: string;
  description: string;
  keyConcepts: string[];
}

export interface YearCurriculum {
  year: number; // 1 to 5
  yearLabel: string; // "1.er Año Bachillerato"
  modules: AcademicModule[];
}

export interface PillarData {
  id: 'pilar1' | 'pilar2' | 'pilar3';
  title: string;
  subtitle: string;
  iconName: string;
  color: string; // hex or tailwind class
  accentColor: string;
  description: string;
  highlights: string[];
  curriculum: YearCurriculum[];
}

export interface MarketTicker {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  type: 'bvc' | 'fx' | 'crypto' | 'youth';
}

export interface SponsorshipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  ctaText: string;
}

export interface UserSimState {
  airScore: number;
  level: number;
  xp: number;
  streakDays: number;
  badgesUnlocked: string[];
  completedChallenges: string[];
}

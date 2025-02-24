
export type ThemeOptions = {
  dark: string;
  light: string;
};

export interface iSVG {
  id?: number;
  title: string;
  category: tCategory | tCategory[];
  route: string | ThemeOptions;
  wordmark?: string | ThemeOptions;
  brandUrl?: string;
  url: string;
}

// ---- END OF src/types/svg.ts ----

// ---- START OF src/types/categories.ts ----
export type tCategory =
  | 'All'
  | 'AI'
  | 'Software'
  | 'Hardware'
  | 'Library'
  | 'Hosting'
  | 'Framework'
  | 'Devtool'
  | 'Monorepo'
  | 'CMS'
  | 'Database'
  | 'Compiler'
  | 'Crypto'
  | 'Cybersecurity'
  | 'Social'
  | 'Entertainment'
  | 'Browser'
  | 'Language'
  | 'Education'
  | 'Design'
  | 'Community'
  | 'Marketplace'
  | 'Music'
  | 'Vercel'
  | 'Google'
  | 'Payment'
  | 'VoidZero'
  | 'Authentication'
  | 'IoT'
  | 'Home Automation'
  | 'Config'
  | 'Secrets';

// ---- END OF src/types/categories.ts ----


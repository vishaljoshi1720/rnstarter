import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import CaretDownIcon from '@/assets/icons/caret-down.svg';
import GithubIcon from '@/assets/icons/github.svg';
import HomeIcon from '@/assets/icons/home.svg';
import LanguageIcon from '@/assets/icons/language.svg';
import RateIcon from '@/assets/icons/rate.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import ShareIcon from '@/assets/icons/share.svg';
import SupportIcon from '@/assets/icons/support.svg';
import WebsiteIcon from '@/assets/icons/website.svg';

/**
 * Icon registry — map a stable name → SVG React component.
 *
 * Adding a new icon:
 * 1. Drop optimized SVG in `src/assets/icons/<name>.svg` (use currentColor)
 * 2. Import it below
 * 3. Add an entry to `icons`
 */
export const icons = {
  'home': HomeIcon,
  'settings': SettingsIcon,
  'share': ShareIcon,
  'rate': RateIcon,
  'support': SupportIcon,
  'github': GithubIcon,
  'website': WebsiteIcon,
  'arrow-right': ArrowRightIcon,
  'caret-down': CaretDownIcon,
  'language': LanguageIcon,
} satisfies Record<string, FC<SvgProps>>;

export type IconName = keyof typeof icons;

/** Design-guideline defaults (pre-scale) when size/width/height omitted. */
export const iconDefaults: Partial<
  Record<IconName, { width: number; height: number }>
> = {
  'arrow-right': { width: 7, height: 14 },
  'caret-down': { width: 12, height: 13 },
  'language': { width: 40, height: 28 },
};

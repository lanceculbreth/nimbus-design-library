'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  ChevronRight,
  Palette,
  Type,
  Layers,
  Box,
  MessageSquare,
  Heart,
  BookOpen,
  Sparkles,
  LayoutGrid,
  Settings,
  Megaphone,
  Users,
  FileText,
  CircleDot
} from 'lucide-react';

interface NavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Brand',
    icon: <Heart size={18} />,
    children: [
      { title: 'Foundations', href: '/brand/foundations' },
      { title: 'Voice & Tone', href: '/brand/voice-tone' },
      { title: 'Naming', href: '/brand/naming' },
      { title: 'Messaging', href: '/brand/messaging' },
    ],
  },
  {
    title: 'Design',
    icon: <Palette size={18} />,
    children: [
      { title: 'Colors', href: '/design/colors' },
      { title: 'Typography', href: '/design/typography' },
      { title: 'Spacing', href: '/design/spacing' },
      { title: 'Elevation', href: '/design/elevation' },
    ],
  },
  {
    title: 'Components',
    icon: <Box size={18} />,
    children: [
      { title: 'Buttons', href: '/components/buttons' },
      { title: 'Cards', href: '/components/cards' },
      { title: 'Forms', href: '/components/forms' },
      { title: 'Navigation', href: '/components/navigation' },
      { title: 'Modals', href: '/components/modals' },
      { title: 'Badges', href: '/components/badges' },
    ],
  },
  {
    title: 'Patterns',
    icon: <LayoutGrid size={18} />,
    children: [
      { title: 'Layouts', href: '/patterns/layouts' },
      { title: 'Messaging', href: '/patterns/messaging' },
    ],
  },
];

interface NavSectionProps {
  item: NavItem;
  pathname: string;
}

function NavSection({ item, pathname }: NavSectionProps) {
  const isActive = item.children?.some(child => pathname === child.href);
  const [isOpen, setIsOpen] = useState(isActive || true);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between px-4 py-2.5 rounded-full
          text-left text-sm font-medium transition-all duration-200
          ${isActive 
            ? 'text-nimbus-text-primary bg-nimbus-surface-elevated' 
            : 'text-nimbus-text-secondary hover:text-nimbus-text-primary hover:bg-nimbus-surface-hover'
          }
        `}
      >
        <span className="flex items-center gap-3">
          <span className={isActive ? 'text-nimbus-teal' : 'text-nimbus-text-tertiary'}>
            {item.icon}
          </span>
          {item.title}
        </span>
        <span className="text-nimbus-text-tertiary">
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </button>
      
      <div className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="ml-4 mt-1 border-l border-nimbus-border-subtle pl-4 space-y-1">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href || '#'}
              className={`
                block px-3 py-2 rounded-full text-sm transition-all duration-200
                ${pathname === child.href
                  ? 'text-nimbus-teal bg-nimbus-teal/10 font-medium'
                  : 'text-nimbus-text-secondary hover:text-nimbus-text-primary hover:bg-nimbus-surface-hover'
                }
              `}
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LeftNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-[280px] h-screen bg-nimbus-surface border-r border-nimbus-border overflow-y-auto">
      {/* Logo */}
      <div className="sticky top-0 bg-nimbus-surface z-10 px-6 py-5 border-b border-nimbus-border-subtle">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-nimbus-teal flex items-center justify-center">
            <span className="text-nimbus-black font-bold text-lg">N</span>
          </div>
          <div>
            <span className="text-nimbus-text-primary font-semibold text-lg">Nimbus</span>
            <span className="text-nimbus-text-secondary text-sm block -mt-0.5">Design System</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="p-4">
        {/* Home Link */}
        <Link
          href="/"
          className={`
            flex items-center gap-3 px-4 py-2.5 rounded-full mb-4 text-sm font-medium
            transition-all duration-200
            ${pathname === '/'
              ? 'text-nimbus-teal bg-nimbus-teal/10'
              : 'text-nimbus-text-secondary hover:text-nimbus-text-primary hover:bg-nimbus-surface-hover'
            }
          `}
        >
          <BookOpen size={18} className={pathname === '/' ? 'text-nimbus-teal' : 'text-nimbus-text-tertiary'} />
          Overview
        </Link>

        {/* Divider */}
        <div className="h-px bg-nimbus-border-subtle mb-4" />

        {/* Navigation Sections */}
        {navigation.map((item) => (
          <NavSection key={item.title} item={item} pathname={pathname} />
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-nimbus-border-subtle bg-nimbus-surface">
        <div className="text-xs text-nimbus-text-tertiary text-center">
          Nimbus Healthcare® Design System
          <br />
          <span className="text-nimbus-text-tertiary/60">v1.0.0</span>
        </div>
      </div>
    </nav>
  );
}


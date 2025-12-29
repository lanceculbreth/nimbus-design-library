'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, X, ArrowRight, FileText, Palette, Box, Layout, Heart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: React.ReactNode;
  keywords: string[];
}

const searchItems: SearchItem[] = [
  // Brand
  { title: 'Foundations', description: 'Core role, mission, vision, and brand pillars', href: '/brand/foundations', category: 'Brand', icon: <Heart size={16} />, keywords: ['mission', 'vision', 'pillars', 'values', 'brand'] },
  { title: 'Voice & Tone', description: 'Verbal identity and communication principles', href: '/brand/voice-tone', category: 'Brand', icon: <Heart size={16} />, keywords: ['voice', 'tone', 'writing', 'communication', 'verbal'] },
  { title: 'Naming', description: 'Naming conventions and guidelines', href: '/brand/naming', category: 'Brand', icon: <Heart size={16} />, keywords: ['naming', 'conventions', 'products', 'features'] },
  { title: 'Messaging', description: 'Messaging guardrails and do/don\'t examples', href: '/brand/messaging', category: 'Brand', icon: <Heart size={16} />, keywords: ['messaging', 'copy', 'content', 'guardrails'] },
  
  // Design
  { title: 'Colors', description: 'Color palette and usage guidelines', href: '/design/colors', category: 'Design', icon: <Palette size={16} />, keywords: ['colors', 'palette', 'teal', 'orange', 'theme'] },
  { title: 'Typography', description: 'Font families, sizes, and type scale', href: '/design/typography', category: 'Design', icon: <Palette size={16} />, keywords: ['typography', 'fonts', 'text', 'headings', 'inter'] },
  { title: 'Spacing', description: 'Spacing scale and layout principles', href: '/design/spacing', category: 'Design', icon: <Palette size={16} />, keywords: ['spacing', 'margins', 'padding', 'layout', 'grid'] },
  { title: 'Elevation', description: 'Shadow system and depth hierarchy', href: '/design/elevation', category: 'Design', icon: <Palette size={16} />, keywords: ['elevation', 'shadows', 'depth', 'layers'] },
  
  // Components
  { title: 'Button', description: 'Interactive button components with variants', href: '/components/buttons', category: 'Components', icon: <Box size={16} />, keywords: ['button', 'click', 'action', 'submit', 'cta'] },
  { title: 'Card', description: 'Container component for grouping content', href: '/components/cards', category: 'Components', icon: <Box size={16} />, keywords: ['card', 'container', 'panel', 'box'] },
  { title: 'Forms', description: 'Input fields and form elements', href: '/components/forms', category: 'Components', icon: <Box size={16} />, keywords: ['input', 'form', 'text', 'field', 'textarea'] },
  { title: 'Navigation', description: 'Tabs and navigation components', href: '/components/navigation', category: 'Components', icon: <Box size={16} />, keywords: ['tabs', 'navigation', 'menu', 'nav'] },
  { title: 'Modal', description: 'Dialog and overlay components', href: '/components/modals', category: 'Components', icon: <Box size={16} />, keywords: ['modal', 'dialog', 'popup', 'overlay'] },
  { title: 'Badge', description: 'Status indicators and labels', href: '/components/badges', category: 'Components', icon: <Box size={16} />, keywords: ['badge', 'tag', 'label', 'status', 'indicator'] },
  
  // Patterns
  { title: 'Layouts', description: 'Common layout patterns and structures', href: '/patterns/layouts', category: 'Patterns', icon: <Layout size={16} />, keywords: ['layout', 'grid', 'structure', 'page'] },
  { title: 'Messaging', description: 'Communication patterns in the UI', href: '/patterns/messaging', category: 'Patterns', icon: <Layout size={16} />, keywords: ['messaging', 'feedback', 'notifications', 'alerts'] },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchItems;
    
    const lowerQuery = query.toLowerCase();
    return searchItems.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery) ||
      item.keywords.some(k => k.includes(lowerQuery))
    );
  }, [query]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    filteredItems.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const handleSelect = useCallback((href: string) => {
    router.push(href);
    onClose();
    setQuery('');
  }, [router, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset query when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-nimbus-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-nimbus-surface border border-nimbus-border rounded-3xl shadow-2xl overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-nimbus-border">
          <Search size={20} className="text-nimbus-text-tertiary flex-shrink-0" />
          <input
            type="text"
            placeholder="Search components, guidelines, patterns..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-nimbus-text-primary placeholder:text-nimbus-text-tertiary focus:outline-none text-lg"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-nimbus-text-tertiary hover:text-nimbus-text-primary hover:bg-nimbus-surface-elevated rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {Object.keys(groupedItems).length === 0 ? (
            <div className="py-12 text-center text-nimbus-text-tertiary">
              <FileText size={40} className="mx-auto mb-3 opacity-50" />
              <p>No results found for &quot;{query}&quot;</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          ) : (
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="mb-4">
                <div className="px-3 py-2 text-xs font-semibold text-nimbus-text-tertiary uppercase tracking-wider">
                  {category}
                </div>
                {items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-full hover:bg-nimbus-surface-elevated transition-colors group text-left"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-nimbus-surface-elevated text-nimbus-teal group-hover:bg-nimbus-teal group-hover:text-nimbus-black transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-nimbus-text-primary font-medium">{item.title}</div>
                      <div className="text-sm text-nimbus-text-tertiary truncate">{item.description}</div>
                    </div>
                    <ArrowRight size={16} className="text-nimbus-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-nimbus-border text-xs text-nimbus-text-tertiary">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-nimbus-surface-elevated rounded-full border border-nimbus-border">↵</kbd>
              to select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-nimbus-surface-elevated rounded-full border border-nimbus-border">↑↓</kbd>
              to navigate
            </span>
          </div>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-nimbus-surface-elevated rounded-full border border-nimbus-border">esc</kbd>
            to close
          </span>
        </div>
      </div>
    </div>
  );
}


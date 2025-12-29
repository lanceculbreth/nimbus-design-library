'use client';

import { ReactNode } from 'react';

interface DocLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  category?: string;
}

export default function DocLayout({ children, title, description, category }: DocLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb/Category */}
      {category && (
        <div className="mb-4">
          <span className="text-sm font-medium text-nimbus-teal uppercase tracking-wider">
            {category}
          </span>
        </div>
      )}

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-nimbus-text-primary mb-4 tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-nimbus-text-secondary leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}


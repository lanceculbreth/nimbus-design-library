'use client';

import { ReactNode, useState } from 'react';
import { Eye, Code, Maximize2, Minimize2 } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface ComponentPreviewProps {
  children: ReactNode;
  code: string;
  title?: string;
  description?: string;
  language?: string;
  background?: 'dark' | 'light' | 'grid';
}

export default function ComponentPreview({
  children,
  code,
  title,
  description,
  language = 'tsx',
  background = 'dark',
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const bgClasses = {
    dark: 'bg-nimbus-black',
    light: 'bg-white',
    grid: 'bg-nimbus-black bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]',
  };

  return (
    <div className="rounded-3xl border border-nimbus-border overflow-hidden mb-6">
      {/* Header */}
      {(title || description) && (
        <div className="px-6 py-4 bg-nimbus-surface-elevated border-b border-nimbus-border">
          {title && (
            <h3 className="text-lg font-semibold text-nimbus-text-primary">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-nimbus-text-secondary mt-1">{description}</p>
          )}
        </div>
      )}

      {/* Preview */}
      <div
        className={`
          ${bgClasses[background]}
          ${expanded ? 'min-h-[400px]' : 'min-h-[200px]'}
          p-8 flex items-center justify-center transition-all duration-300
        `}
      >
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {children}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-nimbus-surface border-t border-nimbus-border">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full transition-colors
              ${showCode
                ? 'bg-nimbus-teal/10 text-nimbus-teal'
                : 'text-nimbus-text-secondary hover:text-nimbus-text-primary hover:bg-nimbus-surface-hover'
              }
            `}
          >
            {showCode ? <Eye size={14} /> : <Code size={14} />}
            {showCode ? 'Preview' : 'Code'}
          </button>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1.5 text-nimbus-text-tertiary hover:text-nimbus-text-primary transition-colors"
          title={expanded ? 'Collapse' : 'Expand'}
        >
          {expanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      {/* Code Panel */}
      {showCode && (
        <div className="border-t border-nimbus-border">
          <CodeBlock code={code} language={language} showLineNumbers={true} />
        </div>
      )}
    </div>
  );
}


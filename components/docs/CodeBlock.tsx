'use client';

import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Check, Copy, Code } from 'lucide-react';
import { copyToClipboard } from '@/lib/copy-to-clipboard';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export default function CodeBlock({
  code,
  language = 'tsx',
  filename,
  showLineNumbers = true,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-nimbus-border bg-nimbus-surface">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-nimbus-surface-elevated border-b border-nimbus-border">
        <div className="flex items-center gap-2">
          <Code size={14} className="text-nimbus-text-tertiary" />
          <span className="text-sm text-nimbus-text-secondary font-mono">
            {filename || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-nimbus-text-secondary hover:text-nimbus-text-primary bg-nimbus-surface hover:bg-nimbus-surface-hover rounded-full transition-colors"
        >
          {copied ? (
            <>
              <Check size={14} className="text-nimbus-success" />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 overflow-x-auto text-sm leading-relaxed`}
            style={{ ...style, background: 'transparent', margin: 0 }}
          >
            {tokens.map((line, i) => {
              const lineNumber = i + 1;
              const isHighlighted = highlightLines.includes(lineNumber);
              return (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className={`${isHighlighted ? 'bg-nimbus-teal/10 -mx-4 px-4' : ''}`}
                >
                  {showLineNumbers && (
                    <span className="inline-block w-8 text-nimbus-text-tertiary select-none text-right mr-4">
                      {lineNumber}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}


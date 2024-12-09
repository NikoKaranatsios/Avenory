import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={alignment}>
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
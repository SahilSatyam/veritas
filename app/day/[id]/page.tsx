import styles from "./page.module.css";
import LensTag from "../../components/LensTag";
import { AlertCircle } from "lucide-react";
import { getDayData } from "../../../lib/days"; 
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from "next/navigation";
import React from 'react';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

// Define custom components for MDX
const components = {
  LensTag,
  AlertCircle,
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className={styles.title} {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className={styles.sectionHeader} {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className={styles.sectionHeader} style={{ fontSize: '1.2rem', marginTop: '2rem' }} {...props} />,
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => <pre className={styles.codeBlock} {...props} />,
  // We wrap paragraphs in a Fragment effectively, but styling is handled by container .prose
};

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let dayData;
  try {
    dayData = await getDayData(id);
  } catch {
    notFound();
  }

  return (
    <div className="container">
      <div className={styles.articleContainer}>
        <main>
          <div className={styles.breadcrumb}>
            DAY {dayData.day} / {dayData.tags?.[0] || 'TOPIC'} / {dayData.tags?.[1] || 'SUBTOPIC'}
          </div>
          
          <h1 className={styles.title}>{dayData.title}</h1>
          
          {dayData.subtitle && (
            <div className={styles.abstract}>
              {dayData.subtitle}
            </div>
          )}

          <div className={styles.tags}>
             {dayData.tags?.map((tag: string) => <LensTag key={tag}>{tag}</LensTag>)}
          </div>

          <div className={styles.section}>
            <div className={styles.prose}>
              <MDXRemote 
                source={dayData.content} 
                components={components} 
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                  }
                }}
              />
            </div>
          </div>

        </main>
        
        <aside className={styles.sidebar}>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Related Days</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'var(--accent-color)' }}>Day 012: Input Guardrails</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: 'var(--accent-color)' }}>Day 045: Model Cards</a></li>
            </ul>
          </div>
          
           <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Audit Logs</h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Last Updated: Dec 12, 2024<br/>
              Author: System Arch Group
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

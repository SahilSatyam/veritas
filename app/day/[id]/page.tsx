import styles from "./page.module.css";
import LensTag from "../../components/LensTag";
import { AlertCircle, Lock } from "lucide-react";
import type { Metadata } from "next";
import { getDayData } from "../../../lib/days";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

import CodeBlock from "../../components/CodeBlock";

// Define custom components for MDX
const components = {
  LensTag,
  AlertCircle,
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className={styles.title} {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className={styles.sectionHeader} {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className={styles.sectionHeader} style={{ fontSize: '1.2rem', marginTop: '2rem' }} {...props} />,
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => <CodeBlock {...props} />,
  a: (props: React.ComponentPropsWithoutRef<'a'>) => {
    const isExternal = props.href?.startsWith('http');
    return (
      <a 
        {...props} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noopener noreferrer" : undefined} 
      />
    );
  },
  // We wrap paragraphs in a Fragment effectively, but styling is handled by container .prose
};

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;

  try {
    const dayData = await getDayData(id);

    const baseTitle = `Day ${dayData.day} – ${dayData.title}`;
    const title = `${baseTitle} | Veritas`;
    const description =
      typeof dayData.subtitle === "string" && dayData.subtitle.length > 0
        ? dayData.subtitle
        : `Day ${dayData.day} of Veritas: ${dayData.title}.`;

    const ogImageUrl = `/api/og?day=${encodeURIComponent(id)}`;

    return {
      title,
      description,
      openGraph: {
        title: baseTitle,
        description,
        type: "article",
        url: `/day/${encodeURIComponent(id)}`,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: baseTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: baseTitle,
        description,
        images: [ogImageUrl],
      },
    };
  } catch {
    // If the day isn't found, let the page rendering handle the 404.
    return {};
  }
}

export default async function DayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id !== "001" && id !== "002") {
    return (
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '60vh', 
          textAlign: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ 
            backgroundColor: 'var(--background-secondary)', 
            padding: '1.5rem', 
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Lock size={48} style={{ color: 'var(--text-secondary)' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Content Locked</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: 1.6 }}>
              This article is part of the ongoing series and is not yet available. 
              Please verify you have completed previous days or check back later.
            </p>
          </div>
          <Link href="/days" style={{ 
            marginTop: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
            borderRadius: '6px',
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none'
          }}>
            Return to Syllabus
          </Link>
        </div>
      </div>
    );
  }

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
                    remarkPlugins: [remarkMath, remarkGfm],
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
              Last Updated: Jan 01, 2026<br/>
              Author: System Arch Group
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

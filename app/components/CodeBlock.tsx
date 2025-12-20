"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./CodeBlock.module.css";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export default function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    // Extract text content from children
    // In MDX, 'pre' usually wraps 'code'. 
    // We need to get the text content safely.
    let textToCopy = "";

    // Simple recursive function to get text from React nodes
    const getText = (node: React.ReactNode): string => {
      if (typeof node === "string") return node;
      if (typeof node === "number") return String(node);
      if (node instanceof Array) return node.map(getText).join("");
      
      if (React.isValidElement(node)) {
        // Typescript knows node is ReactElement here
        return getText((node as React.ReactElement<{ children?: React.ReactNode }>).props.children);
      }
      
      return "";
    };

    textToCopy = getText(children);

    // Fallback if navigator.clipboard is not available (e.g. non-secure context)
    if (!navigator.clipboard) {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      
      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
      }

      document.body.removeChild(textArea);
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={styles.container}>
      <button 
        onClick={copyToClipboard} 
        className={styles.copyButton}
        aria-label="Copy code"
      >
        {isCopied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className={`${styles.pre} ${className || ''}`} {...props}>
        {children}
      </pre>
    </div>
  );
}

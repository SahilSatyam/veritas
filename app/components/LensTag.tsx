"use client";

import Tilt from "react-parallax-tilt";
import styles from "./LensTag.module.css";

interface LensTagProps {
  children: React.ReactNode;
  className?: string; // Allow overrides
}

export default function LensTag({ children, className = "" }: LensTagProps) {
  return (
    <div style={{ display: 'inline-block' }}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.1}
        transitionSpeed={400}
        gyroscope={false}
        className={`${styles.tag} ${className}`}
      >
        {children}
      </Tilt>
    </div>
  );
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const daysDirectory = path.join(process.cwd(), 'content/days');

export interface DayData {
  id: string;
  title: string;
  subtitle?: string;
  day: string;
  tags: string[];
  content: string;
  [key: string]: unknown;
}

export async function getDayData(id: string): Promise<DayData> {
  // Ensure the id matches the filename format (e.g. 001.mdx)
  // If id is "1", we might need to pad it to "001" if that's the convention.
  // For now, let's assume strict matching, or try to find a file.
  
  // Try exact match first
  let fullPath = path.join(daysDirectory, `${id}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
      // Try padded version (e.g. 1 -> 001)
      const paddedId = id.padStart(3, '0');
      fullPath = path.join(daysDirectory, `${paddedId}.mdx`);
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Day ${id} not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id,
    content,
    title: data.title,
    subtitle: data.subtitle,
    day: data.day,
    tags: data.tags || [],
    ...data,
  };
}

export async function getAllDays(): Promise<DayData[]> {
    if (!fs.existsSync(daysDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(daysDirectory);
    const allDaysData = fileNames.filter(f => f.endsWith('.mdx')).map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(daysDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
            id,
            content: '', // optimization
            title: data.title,
            subtitle: data.subtitle,
            day: data.day,
            tags: data.tags || [],
            ...data,
        };
    });
    
    return allDaysData.sort((a, b) => (a.day > b.day ? 1 : -1));
}

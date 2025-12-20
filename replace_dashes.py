import glob
import os

directory = r"c:\Users\sahil\veritas\content\days"
search_pattern = os.path.join(directory, "*.mdx")
files = glob.glob(search_pattern)

em_dash = "—"
replacement = ", "

print(f"Scanning {len(files)} files for em-dashes...")

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if em_dash in content:
            new_content = content.replace(em_dash, replacement)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {os.path.basename(filepath)}")
        else:
            # print(f"Skipped: {os.path.basename(filepath)}")
            pass
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

print("Done.")

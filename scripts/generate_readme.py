#!/usr/bin/env python3
"""Generate README.md with an HTML tree-style directory listing with clickable links.

Usage (run from repo root):
    python scripts/generate_readme.py
"""

import os
import re
import subprocess


def main():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

    # Build the ignore pattern from .gitignore (skip comments and blank lines)
    gitignore_path = os.path.join(repo_root, ".gitignore")
    ignore_patterns = []
    if os.path.isfile(gitignore_path):
        with open(gitignore_path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    ignore_patterns.append(line)

    # Run tree, ignoring everything listed in .gitignore
    tree_cmd = ["tree", "--noreport", "files"]
    if ignore_patterns:
        tree_cmd += ["-I", "|".join(ignore_patterns)]
    result = subprocess.run(
        tree_cmd,
        capture_output=True,
        text=True,
        cwd=repo_root,
    )

    # Normalize non-breaking spaces (\xa0) that macOS `tree` uses in indent
    # groups (e.g. "│\xa0\xa0 ") to regular spaces so the regex works uniformly.
    tree_lines = result.stdout.replace("\xa0", " ").splitlines()

    # Regex to parse tree connector lines:
    #   Group 1: indentation  — repeating 4-char groups of "│   " or "    "
    #   Group 2: connector    — "├── " or "└── "
    #   Group 3: name         — the file or directory name
    CONNECTOR_RE = re.compile(r"^((?:[│ ]{4})*)((?:├|└)── )(.+)$")

    output_lines = ["."]
    dir_stack = ["files"]  # path components under repo root, used to build hrefs

    for i, line in enumerate(tree_lines):
        if i == 0:
            # First line is the root directory name ("files")
            output_lines.append("└── files")
            continue

        m = CONNECTOR_RE.match(line)
        if not m:
            continue

        indent = m.group(1)     # original indentation prefix from tree
        connector = m.group(2)  # "├── " or "└── "
        name = m.group(3)

        # Depth within "files/": each 4-char indent group = one level
        depth = len(indent) // 4 + 1

        # Pop the directory stack back to the current depth
        while len(dir_stack) > depth:
            dir_stack.pop()

        # Relative href path for this entry
        href = "./" + "/".join(dir_stack) + "/" + name

        # Shift output 4 spaces to the right so everything sits under "files"
        out_indent = "    " + indent

        full_path = os.path.join(repo_root, *dir_stack, name)

        if os.path.isdir(full_path):
            dir_stack.append(name)
            output_lines.append(f"{out_indent}{connector}{name}")
        else:
            link = f'<a href="{href}">{name}</a>'
            output_lines.append(f"{out_indent}{connector}{link}")

    tree_content = "\n".join(output_lines)
    tree_block = f"<pre>\n{tree_content}\n</pre>\n"

    prefix_path = os.path.join(repo_root, "README_prefix.md")
    prefix_content = ""
    if os.path.isfile(prefix_path):
        with open(prefix_path) as f:
            prefix_content = f.read().rstrip()

    if prefix_content:
        readme_content = f"{prefix_content}\n\n{tree_block}"
    else:
        readme_content = tree_block

    readme_path = os.path.join(repo_root, "README.md")
    with open(readme_path, "w") as f:
        f.write(readme_content)

    print("README.md updated successfully!")
    print()
    # print(readme_content)


if __name__ == "__main__":
    main()

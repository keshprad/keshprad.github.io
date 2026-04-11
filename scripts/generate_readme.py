#!/usr/bin/env python3
"""Generate README.md with an HTML tree-style directory listing with clickable links.

Usage (run from repo root):
    python scripts/generate_readme.py
"""

import os

# Maps a files/ project directory name to the corresponding website directory
# (relative to repo root). Add a new entry whenever a project gets a website.
WEBSITE_MAP = {
    "pccl": "papers/pccl-ipdps26",
    "performance-variability": "papers/perf-variability-ipdps26",
}


def get_logical_entries(abs_path, dir_name, repo_root):
    """Return ordered list of (kind, name, full_path_or_href) for a directory.

    Injects a virtual 'website' entry first when a matching website exists in
    WEBSITE_MAP and its index.html is present on disk.
    """
    entries = []

    if dir_name in WEBSITE_MAP:
        website_dir = WEBSITE_MAP[dir_name]
        if os.path.isfile(os.path.join(repo_root, website_dir, "index.html")):
            entries.append(("website", "website", f"./{website_dir}/"))

    for name in sorted(os.listdir(abs_path)):
        full = os.path.join(abs_path, name)
        kind = "dir" if os.path.isdir(full) else "file"
        entries.append((kind, name, full))

    return entries


def build_tree_lines(abs_path, repo_root, rel_to_root, prefix=""):
    """Recursively render tree lines for abs_path.

    abs_path    – absolute path to the directory being rendered
    repo_root   – absolute path to the repo root
    rel_to_root – path of abs_path relative to repo_root (used to build hrefs)
    prefix      – indentation prefix string for the current level
    """
    dir_name = os.path.basename(abs_path)
    entries = get_logical_entries(abs_path, dir_name, repo_root)
    lines = []

    for i, (kind, name, path_or_href) in enumerate(entries):
        is_last = i == len(entries) - 1
        connector = "└── " if is_last else "├── "
        child_prefix = prefix + ("    " if is_last else "│   ")

        if kind == "website":
            link = f'<a href="{path_or_href}">website</a>'
            lines.append(f"{prefix}{connector}{link}")
        elif kind == "dir":
            lines.append(f"{prefix}{connector}{name}")
            lines.extend(
                build_tree_lines(path_or_href, repo_root, f"{rel_to_root}/{name}", child_prefix)
            )
        else:
            href = f"./{rel_to_root}/{name}"
            link = f'<a href="{href}">{name}</a>'
            lines.append(f"{prefix}{connector}{link}")

    return lines


def main():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    files_dir = os.path.join(repo_root, "files")

    tree_lines = [".", "└── files"]
    tree_lines.extend(build_tree_lines(files_dir, repo_root, "files", "    "))

    tree_content = "\n".join(tree_lines)
    tree_block = f"<pre>\n{tree_content}\n</pre>\n"

    prefix_path = os.path.join(repo_root, "README_prefix.md")
    prefix_content = ""
    if os.path.isfile(prefix_path):
        with open(prefix_path) as f:
            prefix_content = f.read().rstrip()

    readme_content = f"{prefix_content}\n\n{tree_block}" if prefix_content else tree_block

    readme_path = os.path.join(repo_root, "README.md")
    with open(readme_path, "w") as f:
        f.write(readme_content)

    print("README.md updated successfully!")


if __name__ == "__main__":
    main()

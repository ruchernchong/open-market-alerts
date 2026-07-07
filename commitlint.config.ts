import type { UserConfig } from "@commitlint/types";

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Type — explicitly set to @commitlint/config-conventional defaults
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    // Scope — explicitly left empty (no scope rules enforced)
    "scope-case": [0],
    "scope-empty": [0],
    "scope-enum": [0],
    "scope-max-length": [0],
    // Project-specific overrides
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [0],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
} satisfies UserConfig;

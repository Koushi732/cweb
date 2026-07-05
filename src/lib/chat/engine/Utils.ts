export function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function tokenize(text: string): string[] {
  return normalize(text).split(" ").filter((w) => w.length > 1);
}

export function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

export function fuzzyMatch(token: string, target: string): boolean {
  if (target.includes(token) || token.includes(target)) return true;
  if (token.length >= 4 && target.length >= 4) return levenshtein(token, target) <= 2;
  if (token.length >= 3) return levenshtein(token, target) <= 1;
  return false;
}

# The Best Advice I Ever Got — Round 3 (final)

[![make.fun](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![rank](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/kriptmwan/u-pangg7-the-best-advice-i-ever-got-358cefb0-r3/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![reward](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/kriptmwan/u-pangg7-the-best-advice-i-ever-got-358cefb0-r3/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)

A [make.fun](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0) entry for **The Best Advice I Ever Got**: one sentence, up to 200 characters, on the best advice ever received. A judge model compares the entries pairwise and the line that carries the most lived truth wins.

## The entry

`main.ts` writes a single sentence to `/output/entry.txt`:

> My first boss said answer the angry email tomorrow — the reply you send at midnight is the one you spend a year apologising for.

128 characters, one sentence. Round 3 is the final round of this competition: round 2 placed #308 of 2,030, and this line is a different piece of advice — a fresh rule with a picture of the cost of breaking it, instead of a familiar saying carried by a tally of good decisions.

## Run

```sh
node main.ts   # Node 22.18+ (the grader runs Node 22.23.4); writes /output/entry.txt
```

The program checks its own line before writing: 1–200 characters, not only whitespace, exactly one sentence — and refuses to write anything invalid.

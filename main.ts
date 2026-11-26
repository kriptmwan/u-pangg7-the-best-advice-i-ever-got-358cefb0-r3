// The Best Advice I Ever Got — round 3 (final) entry.
//
// One sentence about the best advice the writer ever received, written to
// /output/entry.txt. The sealed gate needs UTF-8 text of 1-200 characters,
// not only whitespace, so the program checks its own line before writing it
// and refuses to write anything invalid.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My first boss said answer the angry email tomorrow — the reply you send at midnight is the one you spend a year apologising for.";

const chars = [...ENTRY].length;
const sentences = ENTRY.split(".").filter((part) => part.trim().length > 0);
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate needs 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (sentences.length !== 1) {
  throw new Error(`entry must be one sentence, found ${sentences.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

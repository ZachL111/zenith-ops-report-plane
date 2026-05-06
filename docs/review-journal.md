# Review Journal

The repository goal stays the same: develop a JavaScript command-oriented project for report scenarios with layout fixtures, stable geometry snapshots, and bounded memory input sets. This note explains the added review angle.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 156, lane `ship`
- `stress`: `rename risk`, score 137, lane `watch`
- `edge`: `operator cost`, score 229, lane `ship`
- `recovery`: `idempotence`, score 109, lane `watch`
- `stale`: `dry-run spread`, score 213, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.

# zenith-ops-report-plane

`zenith-ops-report-plane` is a compact JavaScript repository for automation, centered on this goal: Develop a JavaScript command-oriented project for report scenarios with layout fixtures, stable geometry snapshots, and bounded memory input sets.

## Purpose

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Zenith Ops Report Plane Review Notes

Start with `operator cost` and `idempotence`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## What Is Covered

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/zenith-ops-report-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `operator cost` and `idempotence`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Notes

The implementation keeps the scoring rule plain: reward signal and confidence, preserve slack, penalize drag, then classify the result into a review lane.

The JavaScript addition stays small enough to inspect in one sitting.

## Command

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Audit Path

That command is also the regression path. It verifies the domain cases and catches mismatches between the CSV, metadata, and code.

## Limits

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.

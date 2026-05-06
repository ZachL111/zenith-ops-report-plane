# Zenith Ops Report Plane Walkthrough

This note is the quickest way to read the extra review model in `zenith-ops-report-plane`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 156 | ship |
| stress | rename risk | 137 | watch |
| edge | operator cost | 229 | ship |
| recovery | idempotence | 109 | watch |
| stale | dry-run spread | 213 | ship |

Start with `edge` and `recovery`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around rename risk and idempotence.

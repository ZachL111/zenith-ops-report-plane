import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 79, slack: 27, drag: 31, confidence: 64 };
assert.equal(domainReviewScore(item), 156);
assert.equal(domainReviewLane(item), "ship");

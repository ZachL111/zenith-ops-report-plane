import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 61,
    "capacity": 93,
    "latency": 18,
    "risk": 19,
    "weight": 5,
    "score": 76,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 88,
    "capacity": 71,
    "latency": 25,
    "risk": 19,
    "weight": 9,
    "score": 118,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 98,
    "capacity": 80,
    "latency": 22,
    "risk": 11,
    "weight": 12,
    "score": 227,
    "decision": "accept"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}

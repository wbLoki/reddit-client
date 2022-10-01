import React from "react";

export default function RoundingNumbers(n) {
  switch (true) {
    case n > 999:
      return `${(n / 1000).toFixed(1)}K`;
    case n > 999999:
      return `${(n / 1000000).toFixed(1)}M`;
    default:
      return n;
  }
}

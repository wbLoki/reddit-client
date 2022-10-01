import React from "react";

export default function PostDateCalculator(created) {
  const date = new Date();
  const currentDate = Math.floor(date.getTime() / 1000.0);
  const deltaTime = currentDate - created;
  switch (true) {
    case deltaTime < 60:
      return `${deltaTime} seconds`;
    case deltaTime < 3600:
      return `${Math.floor(deltaTime / 60)} minutes`;
    case deltaTime < 86400:
      return `${Math.floor(deltaTime / 3600)} hours`;
    case deltaTime < 604800:
      return `${Math.floor(deltaTime / 86400)} days`;
    case deltaTime < 2419200:
      return `${Math.floor(deltaTime / 604800)} weeks`;
    case deltaTime < 29030400:
      return `${Math.floor(deltaTime / 2419200)} months`;
    default:
      return `${Math.floor(deltaTime / 29030400)} years`;
  }
}

import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div>
      <ul className="menu">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/countries">Countries</a>
        </li>
      </ul>
    </div>
  );
}

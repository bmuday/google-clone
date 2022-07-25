import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/products", text: "🎁 Products" },
  { url: "/articles", text: "📰 Articles" },
  { url: "/cryptos", text: "💰 Cryptos" },
  { url: "/videos", text: "📺 Videos" },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink
        key={url}
        to={url}
        className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
      >
        {text}
      </NavLink>
    ))}
  </div>
);

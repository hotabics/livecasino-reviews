"use client";

import { useState } from "react";
import { updates, updateCategories, type UpdateCategory } from "@/data/changelog";
import { getAuthor } from "@/data/authors";
import { formatDate } from "./Bits";

const chipClass: Record<UpdateCategory, string> = {
  Offers: "badge-gold",
  Product: "badge-navy",
  Compliance: "badge-green",
  Guides: "badge-navy",
};

export default function UpdatesFeed() {
  const [filter, setFilter] = useState<"All" | UpdateCategory>("All");
  const list = filter === "All" ? updates : updates.filter((u) => u.category === filter);

  return (
    <div>
      <div className="updates-filter">
        {(["All", ...updateCategories] as const).map((c) => (
          <button
            key={c}
            className={`filter-toggle${filter === c ? " on" : ""}`}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
          >
            {c}
          </button>
        ))}
      </div>

      <ol className="updates-list">
        {list.map((u, i) => {
          const a = getAuthor(u.authorId);
          return (
            <li key={i} className="update-item">
              <div className="update-meta">
                <time dateTime={u.date}>{formatDate(u.date)}</time>
                <span className={`badge ${chipClass[u.category]}`}>{u.category}</span>
              </div>
              <div className="update-body">
                <h3>{u.title}</h3>
                <p>{u.body}</p>
                <div className="update-byline">
                  <span className="byline-avatar" aria-hidden>{a.initials}</span>
                  By {a.name} · {a.role}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

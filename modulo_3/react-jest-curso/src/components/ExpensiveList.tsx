import React, { useMemo, useState } from "react";

type Props = {
  items: string[];
};

export default function ExpensiveList({ items }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((x) => x.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div>
      <label htmlFor="q">Buscar</label>
      <input
        id="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="filtrar..."
      />

      <div aria-label="result-count">{filtered.length}</div>

      <ul>
        {filtered.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
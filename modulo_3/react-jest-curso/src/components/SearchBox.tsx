import React, { useCallback, useState } from "react";

type Props = {
  onSearch: (q: string) => void;
};

export default function SearchBox({ onSearch }: Props) {
  const [q, setQ] = useState("");

  const handleSearch = useCallback(() => {
    onSearch(q.trim());
  }, [onSearch, q]);

  return (
    <div>
      <label htmlFor="search">Buscar</label>
      <input
        id="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="texto..."
      />

      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
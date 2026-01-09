import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserCard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setError(null);
    setLoading(true);
    setUser(null);

    try {
      const res = await fetch("/api/user/1");
      if (!res.ok) throw new Error("HTTP_ERROR");

      const data = (await res.json()) as User;
      setUser(data);
    } catch {
      setError("No se pudo cargar el usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>UserCard</h3>

      <button onClick={load}>Cargar</button>

      {loading && <div role="status">Cargando...</div>}

      {error && (
        <div role="alert">{error}</div>
      )}

      {user && (
        <div aria-label="user-data">
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      )}
    </div>
  );
}
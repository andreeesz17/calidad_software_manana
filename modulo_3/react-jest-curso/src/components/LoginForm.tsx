import React, { useState } from "react";

type Props = {
  onSuccess?: () => void;
};

export default function LoginForm({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!username.trim()) return "username requerido";
    if (password.trim().length < 4) return "password mínimo 4";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password })
      });

      if (!res.ok) throw new Error("HTTP_ERROR");

      onSuccess?.();
    } catch {
      setError("login falló");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>LoginForm</h3>

      {error && <div role="alert">{error}</div>}
      {loading && <div role="status">Enviando...</div>}

      <label htmlFor="u">Username</label>
      <input
        id="u"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <label htmlFor="p">Password</label>
      <input
        id="p"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />

      <button disabled={loading}>Entrar</button>
    </form>
  );
}
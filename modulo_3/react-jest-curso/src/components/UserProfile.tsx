import React from "react";
import { getUser } from "../services/userService";

export default function UserProfile() {
  const load = async () => {
    await getUser(1);
  };

  return (
    <button onClick={load}>
      Cargar usuario
    </button>
  );
}
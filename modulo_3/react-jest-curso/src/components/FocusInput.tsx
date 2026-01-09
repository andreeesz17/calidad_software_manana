import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <label htmlFor="name">Nombre</label>
      <input id="name" ref={inputRef} placeholder="Escribe tu nombre" />

      <button onClick={focus}>Enfocar</button>
    </div>
  );
}
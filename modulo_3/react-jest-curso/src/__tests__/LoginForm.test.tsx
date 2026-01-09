import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../components/LoginForm";

describe("LoginForm (validación + fetch)", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockReset();
  });

  test("valida: username requerido", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByPlaceholderText("password"), "1234");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(screen.getByRole("alert")).toHaveTextContent("username requerido");
    expect(fetch).not.toHaveBeenCalled();
  });

  test("valida: password mínimo 4", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByPlaceholderText("username"), "ana");
    await user.type(screen.getByPlaceholderText("password"), "12");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(screen.getByRole("alert")).toHaveTextContent("password mínimo 4");
    expect(fetch).not.toHaveBeenCalled();
  });

  test("submit éxito llama onSuccess", async () => {
    const user = userEvent.setup();
    const onSuccess = jest.fn();

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({})
    });

    render(<LoginForm onSuccess={onSuccess} />);

    await user.type(screen.getByPlaceholderText("username"), "  ana  ");
    await user.type(screen.getByPlaceholderText("password"), "1234");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(await screen.findByRole("status")).toHaveTextContent("Enviando...");

    // al finalizar, onSuccess debe llamarse
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledTimes(1);

    // verifica body trim de username
    const args = (fetch as jest.Mock).mock.calls[0];
    expect(args[0]).toBe("/api/auth/login");
    expect(args[1].method).toBe("POST");
    expect(JSON.parse(args[1].body)).toEqual({ username: "ana", password: "1234" });
  });

  test("submit error muestra alert", async () => {
    const user = userEvent.setup();

    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: async () => ({})
    });

    render(<LoginForm />);

    await user.type(screen.getByPlaceholderText("username"), "ana");
    await user.type(screen.getByPlaceholderText("password"), "1234");
    await user.click(screen.getByRole("button", { name: "Entrar" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("login falló");
  });
});
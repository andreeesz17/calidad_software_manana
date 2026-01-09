import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserCard from "../components/UserCard";

describe("UserCard (fetch async)", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockReset();
  });

  test("muestra loading y luego éxito", async () => {
    const user = userEvent.setup();

    (fetch as jest.Mock).mockImplementation(() =>
      new Promise((resolve) => {
          setTimeout(() => {
              resolve({
                  ok: true,
                  json: async () => ({id: 1, name: "Ana", email: "ana@mail.com"})
              });
          }, 100);
      })
    );

    render(<UserCard />);

    await user.click(screen.getByRole("button", { name: "Cargar" }));

    // Ahora sí, como la API tarda 100ms, React estará en estado "loading" cuando esto se ejecute
    expect(screen.getByRole("status")).toHaveTextContent("Cargando...");

    // Espera a que aparezca data (findBy espera hasta que la promesa del fetch se resuelva)
    expect(await screen.findByLabelText("user-data")).toBeInTheDocument();
    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.getByText("ana@mail.com")).toBeInTheDocument();

    // y loading ya no debe estar
    await waitFor(() => {
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/api/user/1");
  });

  // ... el resto de tests los puedes dejar igual ...
  test("muestra error si HTTP no ok", async () => {
    const user = userEvent.setup();

    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: async () => ({})
    });

    render(<UserCard />);

    await user.click(screen.getByRole("button", { name: "Cargar" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("No se pudo cargar el usuario");
    expect(screen.queryByLabelText("user-data")).not.toBeInTheDocument();
  });

  test("muestra error si fetch rechaza", async () => {
    const user = userEvent.setup();

    (fetch as jest.Mock).mockRejectedValue(new Error("network"));

    render(<UserCard />);

    await user.click(screen.getByRole("button", { name: "Cargar" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("No se pudo cargar el usuario");
  });
});
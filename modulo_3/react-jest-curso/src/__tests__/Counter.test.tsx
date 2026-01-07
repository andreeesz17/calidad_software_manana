import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter", () => {
  test("muestra initial por defecto en 0", () => {
    render(<Counter />);
    expect(screen.getByLabelText("count-value")).toHaveTextContent("0");
  });

  test("muestra initial personalizado", () => {
    render(<Counter initial={5} />);
    expect(screen.getByLabelText("count-value")).toHaveTextContent("5");
  });

  test("incrementa y decrementa con clicks", async () => {
    const user = userEvent.setup();
    render(<Counter initial={1} />);

    await user.click(screen.getByRole("button", { name: "+1" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("2");

    await user.click(screen.getByRole("button", { name: "-1" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("1");
  });

  test("incrementa en 5 al presionar +5", async () => {
    const user = userEvent.setup();
    render(<Counter initial={0} />);

    await user.click(screen.getByRole("button", { name: "+5" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("5");
  });

  test("si initial es negativo debe iniciar en 0", () => {
    render(<Counter initial={-3} />);
    expect(screen.getByLabelText("count-value")).toHaveTextContent("0");
  });

  test("reset vuelve al initial validado", async () => {
    const user = userEvent.setup();
    render(<Counter initial={-10} />);

    await user.click(screen.getByRole("button", { name: "+1" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("1");

    await user.click(screen.getByRole("button", { name: "Reset" }));
    expect(screen.getByLabelText("count-value")).toHaveTextContent("0");
  });

  test("existe el título Counter", () => {
    render(<Counter />);
    expect(screen.getByText("Counter")).toBeInTheDocument();
  });
});

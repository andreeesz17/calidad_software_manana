import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FocusInput from "../components/FocusInput";

describe("FocusInput (useRef)", () => {
  test("al hacer click en Enfocar, el input recibe focus", async () => {
    const user = userEvent.setup();
    render(<FocusInput />);

    const input = screen.getByPlaceholderText("Escribe tu nombre");
    expect(input).not.toHaveFocus();

    await user.click(screen.getByRole("button", { name: "Enfocar" }));
    expect(input).toHaveFocus();
  });
});
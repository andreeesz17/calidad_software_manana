import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "../components/SearchBox";

describe("SearchBox (useCallback)", () => {
  test("llama onSearch con el texto trimmeado al presionar Buscar", async () => {
    const user = userEvent.setup();
    const onSearch = jest.fn();

    render(<SearchBox onSearch={onSearch} />);

    await user.type(screen.getByPlaceholderText("texto..."), "  hola  ");
    await user.click(screen.getByRole("button", { name: "Buscar" }));

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("hola");
  });

  test("si input está vacío, llama con string vacío", async () => {
    const user = userEvent.setup();
    const onSearch = jest.fn();

    render(<SearchBox onSearch={onSearch} />);

    await user.click(screen.getByRole("button", { name: "Buscar" }));
    expect(onSearch).toHaveBeenCalledWith("");
  });
});
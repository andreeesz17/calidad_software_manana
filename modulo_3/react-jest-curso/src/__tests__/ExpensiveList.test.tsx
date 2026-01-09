import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpensiveList from "../components/ExpensiveList";

describe("ExpensiveList (useMemo)", () => {
  test("sin query muestra todos los items", () => {
    render(<ExpensiveList items={["Apple", "Banana", "Orange"]} />);
    expect(screen.getByLabelText("result-count")).toHaveTextContent("3");
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
  });

  test("filtra por texto (case insensitive)", async () => {
    const user = userEvent.setup();
    render(<ExpensiveList items={["Apple", "Banana", "Orange"]} />);

    await user.type(screen.getByPlaceholderText("filtrar..."), "an");

    expect(screen.getByLabelText("result-count")).toHaveTextContent("2");
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
  });
});
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as service from "../services/userService";
import UserProfile from "../components/UserProfile";

describe("UserProfile (spyOn)", () => {
  test("llama getUser al hacer click", async () => {
    const spy = jest.spyOn(service, "getUser").mockResolvedValue({
      id: 1,
      name: "Mock"
    });

    const user = userEvent.setup();
    render(<UserProfile />);

    await user.click(screen.getByRole("button"));

    expect(spy).toHaveBeenCalledWith(1);

    spy.mockRestore();
  });
});
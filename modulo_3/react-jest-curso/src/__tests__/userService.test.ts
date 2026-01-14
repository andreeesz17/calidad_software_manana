import axios from "axios";
import { getUser } from "../services/userService";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("userService", () => {
  test("retorna usuario cuando axios responde OK", async () => {
    mockedAxios.get.mockResolvedValue({
      data: { id: 1, name: "Carlos" }
    } as any);

    const user = await getUser(1);

    expect(user).toEqual({ id: 1, name: "Carlos" });
    expect(mockedAxios.get).toHaveBeenCalledWith("/api/users/1");
  });

  test("propaga error si axios falla", async () => {
    mockedAxios.get.mockRejectedValue(new Error("network"));

    await expect(getUser(1)).rejects.toThrow("network");
  });
});
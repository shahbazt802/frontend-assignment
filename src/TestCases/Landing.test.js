import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LandingPage from "../Page/LandingPage";

global.fetch = jest.fn();

describe("LandingPage Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders loading state initially", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<LandingPage />);
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeTruthy());

    // Check for 'No projects available'
    await waitFor(() => expect(screen.getByText(/No projects available/i)).toBeTruthy());
  });

  test("displays error message if API call fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Failed to fetch data"));

    render(<LandingPage />);
    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch data/i)).toBeTruthy();
    });
  });
});

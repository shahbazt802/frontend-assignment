import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectTable from "../Component/ProjectTable";

// Test: renders project table with data
test("renders project table with data", () => {
  const projects = [
    { id: 1, "percentage.funded": 50, "amount.pledged": 1000 },
    { id: 2, "percentage.funded": 75, "amount.pledged": 1500 },
  ];

  render(<ProjectTable projects={projects} />);

  // Check if table headers are displayed
  expect(screen.getByText(/S.No./i)).toBeInTheDocument();
  expect(screen.getByText(/Percentage Funded/i)).toBeInTheDocument();
  expect(screen.getByText(/Amount Pledged/i)).toBeInTheDocument();

  // Check if data for the first project is displayed (with proper formatting)
  expect(screen.getByText(/50.00%/i)).toBeInTheDocument(); // Update to match the formatted percentage
  expect(screen.getByText(/\$1,000.00/i)).toBeInTheDocument();
});

// Test: renders "No projects available" if no data is passed
test('renders "No projects available" if no data is passed', () => {
  render(<ProjectTable projects={[]} />);

  // Check if the "No projects available" message is displayed
  expect(screen.getByText(/No projects available/i)).toBeInTheDocument();
});

// Optional: Use regex to make percentage matching flexible (both 50% and 50.00%)
test("renders project table with flexible percentage format", () => {
  const projects = [
    { id: 1, "percentage.funded": 50, "amount.pledged": 1000 },
    { id: 2, "percentage.funded": 75, "amount.pledged": 1500 },
  ];

  render(<ProjectTable projects={projects} />);

  // Check if data for the first project is displayed using a regex that matches both formats
  expect(screen.getByText(/50(\.00)?%/i)).toBeInTheDocument(); // This will match both 50% and 50.00%
  expect(screen.getByText(/\$1,000.00/i)).toBeInTheDocument();
});

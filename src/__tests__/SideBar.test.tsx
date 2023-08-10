import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormProvider } from "../context/FormContext";
import { SideBar } from "../components/SideBar/SideBar";

describe("SideBar Test Cases", () => {
  test("should render Sidebar component", () => {
    render(<SideBar />);
    const element = screen.getByText("SideBar");
    expect(element).toBeInTheDocument();
  });

  test("should display Sidebar Text", () => {
    render(<SideBar />);
    const element = screen.getByText("SideBar");
    expect(element).toHaveTextContent("SideBar");
  });

  test("should render Sidebar Icon Button", () => {
    render(<SideBar />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  test("should render Rows and Columns input field with their default values", () => {
    render(
      <FormProvider>
        <SideBar />
      </FormProvider>
    );

    const inputRow = screen.getByTestId<HTMLInputElement>("rows-input");
    fireEvent.change(inputRow, { target: { value: 2 } });
    expect(inputRow.valueAsNumber).toBe(2);

    const inputColumn = screen.getByTestId<HTMLInputElement>("columns-input");
    fireEvent.change(inputColumn, { target: { value: 1 } });
    expect(inputColumn.valueAsNumber).toBe(1);
  });
});

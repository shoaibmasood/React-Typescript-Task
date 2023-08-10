import React from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider } from "../context/FormContext";
import { ViewPortGrid } from "../components/ViewPortGrid/ViewPortGrid";

//Mocking ResizeObserver API
let MockObserverInstance: ResizeObserver;

beforeEach(() => {
  MockObserverInstance = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
  global.ResizeObserver = jest
    .fn()
    .mockImplementation(() => MockObserverInstance);
});

describe("ViewPortGrid Test Case", () => {
  test("should check no of initial cells in ViewPortGrid components equal two as per inital state", () => {
    render(<ViewPortGrid />, { wrapper: FormProvider });
    const element = screen.getAllByTestId("cell");
    expect(element.length).toBe(2);
  });
});

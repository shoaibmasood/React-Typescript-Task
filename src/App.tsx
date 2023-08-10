import React from "react";
import "./App.scss";
import { SideBar, ViewPortGrid } from "./components";
import { FormProvider } from "./context/FormContext";
/**
 * App Component
 */
export function App() {
  return (
    <div className="App">
      <FormProvider>
        <SideBar />
        <ViewPortGrid />
      </FormProvider>
    </div>
  );
}

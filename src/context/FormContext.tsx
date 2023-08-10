import React, { createContext, useState, useContext, useMemo } from "react";

type FormContextTypes = {
  columns: number;
  setColumns: (val: number) => void;
  rows: number;
  setRows: (val: number) => void;
  sideBar: Boolean;
  setSideBar: (val: Boolean) => void;
  toggleSideBar: () => void;
  handleChangeRows: (val: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeColumns: (val: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormContext = createContext<FormContextTypes>({} as FormContextTypes);

export const FormProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [columns, setColumns] = useState(1);
  const [rows, setRows] = useState(2);

  const [sideBar, setSideBar] = useState<Boolean>(false);

  const toggleSideBar = (): void => {
    setSideBar(!sideBar);
  };

  const handleChangeRows = useMemo(
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length < 1) {
        setRows(1);
      } else if (+e.target.value > 10) {
        setRows(10);
      } else {
        setRows(+e.target.value);
      }
    },
    [setRows]
  );

  const handleChangeColumns = useMemo(
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length < 1) {
        setColumns(1);
      } else if (+e.target.value > 10) {
        setColumns(10);
      } else {
        setColumns(+e.target.value);
      }
    },
    [setColumns]
  );

  return (
    <FormContext.Provider
      value={{
        columns,
        setColumns,
        rows,
        setRows,
        sideBar,
        setSideBar,
        toggleSideBar,
        handleChangeRows,
        handleChangeColumns,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;

export const useFormContext = () => useContext(FormContext);

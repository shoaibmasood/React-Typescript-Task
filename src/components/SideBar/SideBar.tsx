import { Burger } from "../../icons";
import { useFormContext } from "../../context/FormContext";
import { default as cx } from "classnames";

export const SideBar = () => {
  const {
    columns,
    rows,
    sideBar,
    toggleSideBar,
    handleChangeRows,
    handleChangeColumns,
  } = useFormContext();

  return (
    <div className={cx("container ", { sidebar__clicked: sideBar })}>
      <div data-testid="sidebar-btn" className="sidebar">
        <button className="sidebar__icon" onClick={() => toggleSideBar()}>
          <Burger />
        </button>
        <p className={cx("sidebar__text", { hidesidebar_text: sideBar })}>
          <b>SideBar</b>
        </p>
      </div>
      <form className={cx("form", { hidesidebar: sideBar })}>
        <div>
          <label htmlFor="rows">
            Rows <br></br>
            <input
              type="number"
              min={1}
              max={10}
              value={rows}
              onChange={handleChangeRows}
              data-testid="rows-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="columns">
            Columns <br></br>
            <input
              type="number"
              min={1}
              max={10}
              value={columns}
              onChange={handleChangeColumns}
              data-testid="columns-input"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

import { createContext } from "react";

const FilterContext = createContext({
  filter: { title: "", location: "", isFullTime: false },
  setFilter: () => {},
});

export default FilterContext;

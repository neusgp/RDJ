import { createContext, useContext } from "react";

type AppContext = {
  refreshDashboard: () => void;
};

export const AppContext = createContext<AppContext>({
  refreshDashboard: () => {},
});

export const useAppContext = () => useContext(AppContext);

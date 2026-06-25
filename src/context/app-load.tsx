import { createContext, useContext, type ReactNode } from "react";

type AppLoadContextValue = {
  initialLoadComplete: boolean;
};

const AppLoadContext = createContext<AppLoadContextValue>({
  initialLoadComplete: false,
});

export function AppLoadProvider({
  initialLoadComplete,
  children,
}: {
  initialLoadComplete: boolean;
  children: ReactNode;
}) {
  return (
    <AppLoadContext.Provider value={{ initialLoadComplete }}>
      {children}
    </AppLoadContext.Provider>
  );
}

export function useAppLoad() {
  return useContext(AppLoadContext);
}

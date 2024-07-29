import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [grayscale, setGrayscale] = useState(false);

  return (
    <>
      <AppContext.Provider value={{ grayscale, setGrayscale }}>
        <Header />
        <main>
          <Outlet />
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;

import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";
import Footer from "./components/Footer";

export const AppContext = createContext({
  grayscale: false,
});

function App() {
  const [grayscale, setGrayscale] = useState(false);

  return (
    <>
      <AppContext.Provider value={{ grayscale, setGrayscale }}>
        <Header />
        <main style={grayscale ? { backgroundColor: "grey" } : null}>
          <Outlet />
        </main>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;

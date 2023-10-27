import "./App.css";

import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;

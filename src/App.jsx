import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

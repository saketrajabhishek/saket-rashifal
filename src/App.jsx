import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

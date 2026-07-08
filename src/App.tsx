import { ToastContainer } from "react-toastify";
import { CategoryGrid } from "./components/CategoryGrid";
import { Discover } from "./components/Discover";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { RoomsInspiration } from "./components/RoomsInspiration";

function App() {
  return (
    <div className="mx-auto max-w-360">
      <Header />
      <Discover />
      <CategoryGrid />
      <Products />
      <ToastContainer theme="colored" />
      <RoomsInspiration />
    </div>
  );
}

export default App;

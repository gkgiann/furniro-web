import { ToastContainer } from "react-toastify";
import { CategoryGrid } from "./components/CategoryGrid";
import { Discover } from "./components/Discover";
import { Header } from "./components/Header";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="max-w-360 mx-auto">
      <Header />
      <Discover />
      <CategoryGrid />
      <Products />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;

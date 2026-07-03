import { CategoryGrid } from "./components/CategoryGrid";
import { Discover } from "./components/Discover";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="max-w-360 mx-auto">
      <Header />
      <Discover />
      <CategoryGrid />
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </div>
  );
}

export default App;

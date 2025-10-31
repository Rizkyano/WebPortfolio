import "./App.css";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="flex bg-black min-h-screen">
        {/* Sidebar tetap fix */}
        <Sidebar />

        {/* Bagian kanan bisa scroll */}
        <div className="flex-1 ml-[320px] overflow-y-auto h-screen">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;

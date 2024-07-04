import NavBar from "./components/NavBar";
// import "./App.css";
import Hero from "./components/Hero";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="bg-[url('/grid.svg')] opacity-20 absolute inset-0 top-10"></div>
        <img
          src={"/mesh.svg"}
          className="opacity-15 absolute bottom-1 h-[660px] z-10"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>

      <Layout>
        <div className="relative z-20">
          <NavBar />
          <Hero />
        </div>
      </Layout>
    </>
  );
}

export default App;

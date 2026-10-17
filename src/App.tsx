import "./App.css";
import Header from "@/components/layout/Header";
import BusinessCard from "@/components/BusinessCard";

function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-dvh w-full items-center justify-center">
        <BusinessCard />
      </main>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import ComposeCard from "./components/ComposeCard";
import SendAnimation from "./components/SendAnimation";
import Dashboard from "./components/Dashboard";

function App() {
  const [view, setView] = useState("compose"); // compose, sending, dashboard
  const [postcards, setPostcards] = useState([]);

  // Load postcards from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("postcards") || "[]");
    setPostcards(saved);
  }, []);

  const handleSend = (newCard) => {
    setView("sending");
    setTimeout(() => {
      const updated = [...postcards, newCard];
      setPostcards(updated);
      localStorage.setItem("postcards", JSON.stringify(updated));
      setView("compose");
      alert("Postcard sent!");
    }, 5000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {view === "compose" && <ComposeCard onSend={handleSend} />}
      {view === "sending" && <SendAnimation />}
      {view === "dashboard" && <Dashboard postcards={postcards} />}
    </div>
  );
}

export default App;

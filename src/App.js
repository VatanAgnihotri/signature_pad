import logo from "./logo.svg";
import "./App.css";
import SignaturePad from "./SignaturePad/SignaturePad";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between gap-6 h-screen items-center">
      <Header />
      <SignaturePad />
      <Footer />
    </div>
  );
}

export default App;

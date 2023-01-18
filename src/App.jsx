import "./styles.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Note from "./components/Note";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}


import {
  Routes,
  Route
} from "react-router-dom";
import OurSystem from "./pages/OurSystem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OurSystem />} />
    </Routes>
  );
}
export default App;

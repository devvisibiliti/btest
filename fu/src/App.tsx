import { BrowserRouter, Routes, Route } from "react-router-dom";
import Id from "./component/Id";
import Sid from "./component/Sid";
// import Dr from "./component/Dr"; // not used

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ge" element={<Id />} />
        <Route path="/ge/:id" element={<Sid />} />
      </Routes>
    </BrowserRouter>
  );
}

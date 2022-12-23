import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AllRoutes } from "./component/AllRoutes";
import Chat from "./component/Chat/Chat";
import Join from "./component/Join/Join";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}
export default App;

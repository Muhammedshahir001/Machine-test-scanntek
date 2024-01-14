
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<UserRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

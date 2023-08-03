import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SimpleTodosList from "./components/simpletodolist";
import CreateTask from "./components/createtask";
import EditTask from "./components/edittask";


// import Junk from "./components/junk";

export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<SimpleTodosList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/update/:id" element={<EditTask />} />
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
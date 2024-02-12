import Main from "./pages/main";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Main from "./pages/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

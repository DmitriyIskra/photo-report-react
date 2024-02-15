import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Main from './pages/main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/main" element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
}

export default App;

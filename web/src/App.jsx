import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Home } from "./components/Home/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

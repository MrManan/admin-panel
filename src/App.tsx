import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import adminRoutes from "@/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      {adminRoutes.map((route) => (
        <Route
          key={route.path}
          path={`${route.path}`}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default App;

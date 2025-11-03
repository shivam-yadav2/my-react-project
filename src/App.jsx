import { Button } from "@/components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Button>Click Me</Button>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

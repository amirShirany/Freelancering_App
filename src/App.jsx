import { Routes, Route } from "react-router-dom"
import Auth from "./pages/auth"

function App() {
  return (
    <div className="container xl:max-w-7xl">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App

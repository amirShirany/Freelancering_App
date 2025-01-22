import { Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AppLayout from "./ui/AppLayout"
import Owner from "./pages/Owner"
import Auth from "./pages/auth"
import CompleteProfile from "./pages/CompleteProfile"

//? Create a new instance of QueryClient
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/owner" element={<Owner />} />
        </Route>

        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App

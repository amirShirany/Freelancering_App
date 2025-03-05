import { Routes, Route, Navigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AppLayout from "./ui/AppLayout"
import Auth from "./pages/auth"
import CompleteProfile from "./pages/CompleteProfile"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import OwnerDashboard from "./pages/OwnerDashboard"
import { DarkModeProvider } from "./context/DarkModeContext"

//? Create a new instance of QueryClient
const queryClient = new QueryClient()

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/owner" element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App

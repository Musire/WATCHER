import { HomePage, Ledger } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ledger" element={<Ledger />} />
      </Routes>
    </BrowserRouter>
  )
}
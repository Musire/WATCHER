import { HomePage, Ledger, Accounts, Details } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
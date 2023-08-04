import { Main  } from "./pages"
import { LedgerHome, AccountsHome, DetailsHome, Home, NewRecord } from "./partials"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/ledger" element={<Main />} >
          <Route path="" element={<LedgerHome />} />
          <Route path="new" element={<NewRecord />} />
        </Route>
        <Route path="/accounts" element={<Main />} >
          <Route path="" element={<AccountsHome />} />
        </Route>
        <Route path="/details" element={<Main />} >
          <Route path="" element={<DetailsHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
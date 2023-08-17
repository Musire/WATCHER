import { Main  } from "./pages"
import { LedgerHome, AccountsHome, GoalsHome, Home, NewRecord, NewAccount, NewGoal } from "./partials"
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
          <Route path="new" element={<NewAccount />} />
        </Route>
        <Route path="/goals" element={<Main />} >
          <Route path="" element={<GoalsHome />} />
          <Route path="new" element={<NewGoal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
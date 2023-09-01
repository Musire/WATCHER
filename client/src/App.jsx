import { Main, Login } from "./pages"
import { LedgerHome, AccountsHome, GoalsHome, Home, NewRecord, NewAccount, NewGoal, RecordDetail } from "./partials"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { accountAPI, recordAPI, goalAPI } from "./constant/apiData"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/login" element={ <Login /> } />
          <Route path="/ledger" element={<Main />} >
            <Route path="" element={<LedgerHome />} />
            <Route path="new" element={<NewRecord />} />
            <Route path="details/:id" element={<RecordDetail api={recordAPI} variant="ledger" />} />
          </Route>
          <Route path="/accounts" element={<Main />} >
            <Route path="" element={<AccountsHome />} />
            <Route path="new" element={<NewAccount />} />
            <Route path="details/:id" element={<RecordDetail api={accountAPI} variant="account" />} />
          </Route>
          <Route path="/goals" element={<Main />} >
            <Route path="" element={<GoalsHome />} />
            <Route path="new" element={<NewGoal />} />
            <Route path="details/:id" element={<RecordDetail api={goalAPI} variant="goal" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
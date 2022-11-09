import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  ForgotPassword,
  Login,
  ResetPassword,
  SavePassword,
} from "./pages";
import { Main, Users } from "./components";
import { Charges } from "./pages/charges";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/charges/*" element={<Charges />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/save-password" element={<SavePassword />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Main />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

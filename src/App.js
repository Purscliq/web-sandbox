import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  ForgotPassword,
  Login,
  ResetPassword,
  SavePassword,
} from "./pages";
import { Main, Users } from "./components";
import {BillPaymentTab} from "./components/chargesType/billPaymentTab";
import { Charges } from "./pages/charges";
import { VirtualCardTab } from "./components/chargesType/virtualCardTab";
import { ElectricityChargesTab } from "./components/chargesType/electricityChargesTab";
import { PhysicalChargesTab } from "./components/chargesType/physicalChargesTab";
import { GiftCardTab } from "./components/chargesType/giftCardTab";
import { GeneralTransactionTab } from "./components/chargesType/generalTransactionTab";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="charges" element={<Charges />}>
            <Route path="virtualcardtab" element={<VirtualCardTab />} />
            <Route path="billpaymenttab" element={<BillPaymentTab />} />
            <Route path="electricitychargestab" element={<ElectricityChargesTab />} />
            <Route path="physicalchargestab" element={<PhysicalChargesTab />} />
            <Route path="giftcardchargestab" element={<GiftCardTab />} />
            <Route path="generaltransactiontab" element={<GeneralTransactionTab />} />
          </Route>
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

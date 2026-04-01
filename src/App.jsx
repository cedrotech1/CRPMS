
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home_page'
import LogoutPage from './pages/logout_page'
import CarPage from './pages/car_management_page'
import ServicesPage from './pages/display_services_page'
import ServiceRecordPage from './pages/record_service_page'
import PaymentPage from './pages/payment_management_page'
import ReportsPage from './pages/report_page'
import Menu from './components/menu'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/car" element={<CarPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-record" element={<ServiceRecordPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/reports" element={<ReportsPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
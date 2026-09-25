// src/App.jsx
// Root component. Defines client-side routes using react-router-dom.

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import UsersPage from './pages/UsersPage.jsx'
import CategoriesPage from './pages/CategoriesPage.jsx'
import TicketsPage from './pages/TicketsPage.jsx'
import TicketDetailPage from './pages/TicketDetailPage.jsx'
import AuditLogsPage from './pages/AuditLogsPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/tickets" replace />}
          />

          <Route
            path="/users"
            element={<UsersPage />}
          />

          <Route
            path="/categories"
            element={<CategoriesPage />}
          />

          <Route
            path="/tickets"
            element={<TicketsPage />}
          />

          <Route
            path="/tickets/:ticketId"
            element={<TicketDetailPage />}
          />

          <Route
            path="/audit-logs"
            element={<AuditLogsPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import UsersList from "./pages/users/UsersList.jsx";
import UserForm from "./pages/users/UserForm.jsx";
import AssetsList from "./pages/assets/AssetsList.jsx";
import AssetForm from "./pages/assets/AssetForm.jsx";
import TicketsList from "./pages/tickets/TicketsList.jsx";
import TicketForm from "./pages/tickets/TicketForm.jsx";
import MaintenanceList from "./pages/maintenance/MaintenanceList.jsx";
import MaintenanceForm from "./pages/maintenance/MaintenanceForm.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/users"
        element={
          <MainLayout>
            <UsersList />
          </MainLayout>
        }
      />
      <Route
        path="/users/new"
        element={
          <MainLayout>
            <UserForm />
          </MainLayout>
        }
      />
      <Route
        path="/users/edit/:id"
        element={
          <MainLayout>
            <UserForm />
          </MainLayout>
        }
      />

      <Route
        path="/assets"
        element={
          <MainLayout>
            <AssetsList />
          </MainLayout>
        }
      />
      <Route
        path="/assets/new"
        element={
          <MainLayout>
            <AssetForm />
          </MainLayout>
        }
      />
      <Route
        path="/assets/edit/:id"
        element={
          <MainLayout>
            <AssetForm />
          </MainLayout>
        }
      />

      <Route
        path="/tickets"
        element={
          <MainLayout>
            <TicketsList />
          </MainLayout>
        }
      />
      <Route
        path="/tickets/new"
        element={
          <MainLayout>
            <TicketForm />
          </MainLayout>
        }
      />
      <Route
        path="/tickets/edit/:id"
        element={
          <MainLayout>
            <TicketForm />
          </MainLayout>
        }
      />

      <Route
        path="/maintenance"
        element={
          <MainLayout>
            <MaintenanceList />
          </MainLayout>
        }
      />
      <Route
        path="/maintenance/new"
        element={
          <MainLayout>
            <MaintenanceForm />
          </MainLayout>
        }
      />
      <Route
        path="/maintenance/edit/:id"
        element={
          <MainLayout>
            <MaintenanceForm />
          </MainLayout>
        }
      />
    </Routes>
  );
}

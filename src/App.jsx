import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import StudentDashboardPage from "./pages/student/StudentDashboardPage";
import StudentChatPage from "./pages/student/StudentChatPage";
import MenuPage from "./pages/shared/MenuPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <StudentDashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <StudentChatPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/menu"
              element={
                <PrivateRoute>
                  <MenuPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

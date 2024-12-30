import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { useInitializeAuth } from "./hooks/useInitializeAuth";
import { About } from "./pages/About";
import { Auth } from "./pages/Auth";
import { Blog } from "./pages/Blog";
import { Cart } from "./pages/Cart";
import { Community } from "./pages/Community";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Store } from "./pages/Store";
import { SuccessStories } from "./pages/SuccessStories";
import { Tutorials } from "./pages/Tutorials";
import { useAuthStore } from "./store/authStore";

export function App() {
  const { isAuthenticated } = useAuthStore();
  useInitializeAuth();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/Home" />
                ) : (
                  <Auth mode="login" />
                )
              }
            />
            <Route
              path="/register"
              element={
                isAuthenticated ? (
                  <Navigate to="/Home" />
                ) : (
                  <Auth mode="register" />
                )
              }
            />

            {/* Public Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/Store" element={<Store />} />
            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />

            <Route
              path="/Home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route
              path="/learn"
              element={
                <PrivateRoute>
                  <Learn />
                </PrivateRoute>
              }
            />
            <Route
              path="/community"
              element={
                <PrivateRoute>
                  <Community />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

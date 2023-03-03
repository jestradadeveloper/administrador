import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import {
  LoginPage,
  PrivateRoute,
  AccountsPage,
  DashboardPage,
  ProfilePage,
  UsersPage,
  TeamsPage,
} from "./pages";
import { AuthProvider, TeamsProvider, UserProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <AuthProvider>
          <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="" element={<DashboardPage />} />
                </Route>
                <Route path="/accounts" element={<PrivateRoute />}>
                  <Route path="" element={<AccountsPage />} />
                </Route>
                <Route path="/teams" element={<PrivateRoute />}>
                  <Route path="" element={<TeamsPage />} />
                </Route>
                <Route path="/users" element={<PrivateRoute />}>
                  <Route path="" element={<UsersPage />} />
                </Route>
                <Route path="/profile" element={<PrivateRoute />}>
                  <Route path="" element={<ProfilePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </AuthProvider>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;

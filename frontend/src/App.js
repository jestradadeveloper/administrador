import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, AccountsPage, DashboardPage, ProfilePage, UsersPage, TeamsPage } from './pages';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/dashboard" element={<DashboardPage />} />
      <Route exact path="/accounts" element={<AccountsPage />} />
      <Route exact path="/teams" element={<TeamsPage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
      <Route exact path="/users" element={<UsersPage />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;

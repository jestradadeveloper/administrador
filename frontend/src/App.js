import "./App.css";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./routers/AppRouter";
function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;

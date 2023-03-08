import "./App.css";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppRouter } from "./routers/AppRouter";
function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <AppRouter />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;

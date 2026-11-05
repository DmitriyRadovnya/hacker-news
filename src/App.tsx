import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// import "./App.css";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { StoryPage } from "./pages/StoryPage/StoryPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: ":id",
        Component: StoryPage,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

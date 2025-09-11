import React, { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import Cart from "./components/Cart";
//lazyloading, onDemand loading
import appStore from "./utils/appStore";
const GroceryStore = lazy(() => import("./components/GroceryStore"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  //authentication code for example
  useEffect(() => {
    const data = {
      name: "Sonam J",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName , setUserName }}>
      <div className="app">
        <Header />
        {/* Outlet is used to render the child routes */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <div>
                <h1>Loading...</h1>
              </div>
            }
          >
            <GroceryStore />
          </Suspense>
        ),
      },
    
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
],
errorElement: <Error />,
}
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}

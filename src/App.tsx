import React, { Suspense } from "react";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { APP_ROUTES } from "./appRoutes";

import store from "./store/configureStore";

import AppLayout from "./layouts/AppLayout/AppLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense>
          <AppLayout>
            <Routes>
              {APP_ROUTES.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </AppLayout>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const Hello = () => {
  return (
    'Hello world from app'
  )
}
const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<Hello />} />),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
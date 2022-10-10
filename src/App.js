import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllCountry from './component/AllCountry/AllCountry';
import Main from './component/layout/Main';

function App() {

  const router = createBrowserRouter([
  {
    path: '/',   element: <Main></Main>,
    loader: async()=> {
      return fetch('https://restcountries.com/v3.1/all');
    },
    children: 
    [
    { path:'/', element: <AllCountry></AllCountry>}
    ]
  }
  ]);


  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;

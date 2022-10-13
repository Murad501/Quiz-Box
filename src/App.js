import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from '../src/Components/Layout/Main'
import Home from '../src/Components/Home/Home'
import Topics from '../src/Components/Topics/Topics'
import Statistics from '../src/Components/Statistics/Statistics'
import Blog from '../src/Components/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      }, 
      {
        path: 'topics',
        element: <Topics></Topics>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

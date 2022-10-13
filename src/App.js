import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from '../src/Components/Layout/Main'
import Home from '../src/Components/Home/Home'
import Topics from '../src/Components/Topics/Topics'
import Blog from '../src/Components/Blog/Blog'
import Quizs from '../src/Components/Quizs/Quizs'
import Statistics from '../src/Components/Statistics/Statistics'
import Page404 from './Components/Page404';
import { loadDataFromApi } from './Components/loadApiData/loadApiData';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: '/',
        loader: loadDataFromApi,
        element: <Home></Home>
      }, 
      {
        path: 'topics',
        element: <Topics></Topics>
      },
      {
        path: 'statistics',
        loader: loadDataFromApi,
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'quiz/:Id',
        loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`),
        element: <Quizs></Quizs>
      }
    ],
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

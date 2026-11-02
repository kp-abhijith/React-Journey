import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from'react-router'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [{
//     index: true,
   
//     element:<Home/>
//   },
//     {
//       path: "About",
//       element: <About />

//     },
//     {
//       path: "Contact",
//       element:<Contact/>
//     }
//   ]
  
// }])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home /> } />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact /> } />
      <Route path="user/:userid" element={<User /> } />
      <Route path="Github" element={<Github /> } />
      {/* <route path="Contact" element={<Contact/> } /> */}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {
  Home,
  Layout,
  About,
  Contact,
  Seo,
  SMM,
  PPC,
  WebDev,
  ContentWriting,
  CreativesBranding
} from './components/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />

      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contact />} />

      <Route path="/seo" element={<Seo />} />
      <Route path="/social-media-marketing" element={<SMM />} />
      <Route path="/ppc" element={<PPC />} />
      <Route path="/web-dev" element={<WebDev />} />
      <Route path="/content-writing" element={<ContentWriting />} />
      <Route path="/creatives-branding" element={<CreativesBranding />} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

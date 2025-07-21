import { Route, Routes } from "react-router-dom"
import { PostProvider } from "./context/PostContext"

import NavBar from "./components/navigation/NavBar"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Favourites from "./pages/Favourites"

import Admin from "./pages/AdminPages/Admin"
import PostCreate from "./pages/AdminPages/PostCreate"

import NotFound from "./pages/NotFound"
import BlogPost from "./pages/BlogPost"

function App() {

  return (
    <div className='app'>
      <PostProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/post/:id" element={<BlogPost />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/posts/create" element={<PostCreate />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </PostProvider>
    </div>
  )
}

export default App;

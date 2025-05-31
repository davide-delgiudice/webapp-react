import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"
import MoviePage from "./pages/MoviePage"
import NotFoundPage from "./pages/NotFoundPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="/movies/:id" element={<MoviePage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

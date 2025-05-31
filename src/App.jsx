import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"
import BookPage from "./pages/BookPage"
import NotFoundPage from "./pages/NotFoundPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="/books/:id" element={<BookPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

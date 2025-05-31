import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="/books/:id" element={<h1>Dettaglio pagina</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

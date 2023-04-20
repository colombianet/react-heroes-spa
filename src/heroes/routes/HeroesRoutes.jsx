import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroePage, MarvelPage, SearchPage } from "../../heroes";
import { NavBar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container mt-2">
            <Routes>
                <Route path='marvel' element={<MarvelPage />}/>
                <Route path='dc' element={<DcPage />}/>
                <Route path='hero/:id' element={<HeroePage />}/>
                <Route path='search' element={<SearchPage />}/>
                <Route path='/*' element={<Navigate to='/marvel' />}/>
            </Routes>
        </div>
    </>
  )
}

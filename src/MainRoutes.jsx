import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MovieDetails} from "./screens/movie/MovieDetails.jsx";
import App from "./screens/home/App.jsx";
import {Layout} from "./components/Layout.jsx";

export function MainRoutes() {
    return (
    <Router>
        <Routes>
            <Route element={<Layout/>}>
            <Route
            path="/"
            element={<App/>}
            />
            <Route
                path='/movie/:id'
                element={<MovieDetails/>}
            />
            </Route>
        </Routes>
    </Router>
    )
}
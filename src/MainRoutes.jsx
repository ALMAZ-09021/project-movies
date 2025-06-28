import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MovieDetails} from "./MovieDetails.jsx";
import App from "./App.jsx";

export function MainRoutes() {
    return <Router>
        <Routes>
            <Route
            path='/'
            element={<App/>}
            />

            <Route
                path='/movie/:id'
                element={<MovieDetails/>}
            />
        </Routes>
    </Router>
}
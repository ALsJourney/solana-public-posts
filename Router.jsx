import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainContent from "./src/pages/MainContent";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<MainContent/>}/>
            </Routes>
        </BrowserRouter>
    )
}


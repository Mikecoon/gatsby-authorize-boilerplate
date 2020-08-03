import React from "react"
import {Router} from "@reach/router"
import PrivateRoute from "../components/private-router/private-router";
import NewsListPage from "./app/news/list";

const App = (props) => {
    return <Router>
        <PrivateRoute path={'app/news/list'} component={NewsListPage}/>
    </Router>
}
export default App
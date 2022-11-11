import {
    Routes,
    Route,
} from "react-router-dom";

import Home from './containers/Home'
import Settings from './containers/Settings'

export const Router: React.FunctionComponent = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}

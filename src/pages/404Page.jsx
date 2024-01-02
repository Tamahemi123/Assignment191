

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage'; // Adjust the import path based on your project structure
import NotFound from './NotFound'; // Adjust the import path based on your project structure

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage} />
                {/* Add other routes for different pages */}
                {/* ... */}
                {/* Catch-all route for 404 page */}
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;


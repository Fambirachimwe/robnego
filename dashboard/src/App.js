import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./Home";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">

        <Router>


          <Switch>
            <Route path="/">
              <Home />
            </Route>

          </Switch>

        </Router>


      </div>
    </QueryClientProvider>

  );
}

export default App;

import React,{ Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

import Home from "./pages/Home";
import News from "./pages/News";
import HomeTemplate from "./templates/HomeTemplate";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorBoundary/ErrorBoundary";
import FilmDetail from "./pages/FilmDetail";
import FormLogin from "./components/Form/auth/FormLogin";
import About from "./pages/About";
const TopRated = React.lazy(() => import('./pages/TopRated'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HomeTemplate path="/home" exact Component={Home} />
          
          <HomeTemplate path="/new" exact Component={News} />
          <HomeTemplate path="/detail/:id" exact Component={FilmDetail} />
          <Suspense fallback={<div>Loading...</div>}>

          <HomeTemplate path="/toprated" exact Component={TopRated} />
          </Suspense>
          <HomeTemplate path="/login" exact Component={FormLogin} />
          <HomeTemplate path="/about" exact Component={About} />
          {/* <Route path="/contact" exact component={Contact} */}
          <HomeTemplate path="/" exact Component={Home} />
        </ErrorBoundary>
      </Switch>
      {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;

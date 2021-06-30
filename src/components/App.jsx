import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PortfolioProvider } from '../context/context';

import LandingPage from '../pages/LandingPage'
import BlogIndex from '../pages/BlogIndex'
import BlogPage from '../pages/BlogPage'

import { heroData, aboutData, projectsData, contactData, footerData, blogsData} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setBlogs([ ...blogsData ]);
  }, [])

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, blogs }}>
    <Router>
      <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/BlogIndex" exact component={BlogIndex} />
          <Route path="/blog/:id" component={BlogPage} />
      </Switch>
    </Router>
    </PortfolioProvider>
  );
}

export default App;

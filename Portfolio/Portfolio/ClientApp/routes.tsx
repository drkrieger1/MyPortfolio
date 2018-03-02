import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/Projects' component={Projects} />
    <Route path='/Contact' component={Contact} />
</Layout>;

/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFound from '../NotFound';

const headerUrls = [
  { name: 'Modelos', to: '/' },
  { name: 'Ficha de modelo', to: '/5/informations' },
  { name: 'Servicios y accesorios', to: '' },
  { name: 'Financiación', to: '' },
  { name: 'Reviews y Comunidad', to: '', clase: 'borbot' },

  { name: 'Toyota Mobility Service', to: '', clase: 'bortop' },
  { name: 'Toyota Gazoo Racing', to: '' },
  { name: 'Toyota Híbridos', to: '', clase: 'borbot' },

  { name: 'Concesionarios', to: '', clase: 'bortop' },
  { name: 'Test Drive', to: '' },
  { name: 'Contacto', to: '', clase: 'bot' },

  { name: 'Actividades', to: '', clase: 'bortop back' },
  { name: 'Servicios al Cliente', to: '', clase: 'back' },
  { name: 'Ventas Especiales', to: '', clase: 'back' },
  { name: 'Innovación', to: '', clase: 'back' },
  { name: 'Prensa', to: '', clase: 'back' },
  { name: 'Acerca de...', to: '', clase: 'ulti back' }
];


function App() {
  return (
    <div>
      <GlobalStyles />
      <Header links={headerUrls} />
      <Switch>
        <Route path="/" component={RestaurantsPage} exact />
        <Route path="/:id/:content" component={RestaurantPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;

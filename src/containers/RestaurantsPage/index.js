/**
 *
 * RestaurantsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { set } from 'lodash';

import { GET_RESTAURANTS } from '../../queries';
import Query from '../../components/Query';
import H1 from '../../components/H1';

import data from '../../assets/utils/data';
import getQueryParameters from '../../utils/getQueryParameters';

import RenderView from './RenderView';
import Filters from '../../components/Filters';

function RestaurantsPage({ location: { search }, history }) {
  const start = parseInt(getQueryParameters(search, 'start'), 10) || 0;

  var orderby = getQueryParameters(search, 'orderby') || 'name';
  var sortext = `${orderby}:asc`;
  const range = 15;

  const setSearch = (where, nextStart) => {
    history.push({
      search: `?category=${where.category}&orderby=${sortext}&start=${nextStart}`
    });
  };

  const getWhereParams = () => {
    const category = getQueryParameters(search, 'category') || 'all';
    const precio = getQueryParameters(search, 'precio') || 'all';
    const anio = getQueryParameters(search, 'anio') || 'all';

    return {
      category,
      precio,
      anio
    };
  };

  const prepareWhereParams = () => {
    const where = getWhereParams();

    return Object.keys(where).reduce((acc, current) => {
      if (!!where[current] && !where[current].includes('all')) {
        acc[current] = where[current];
      }
      return acc;
    }, {});
  };

  const handleClick = id => history.push(`/${id}/informations`);

// Setea modificaciones al hacer click en un filtro
  const handleChange = ({ target }) => {
    var trg = target;
    const where = getWhereParams();

    // Si target.value = asc, ordena por precio ASC
    switch (trg.value) {
        case 'name:asc':
            orderby = 'name';
            sortext = `${orderby}:asc`;
            trg.name = 'name:asc';
        break;
        case 'precio:asc':
            orderby = 'precio';
            sortext = `${orderby}:asc`;
            trg.name = 'precio:asc';
        break;
        case 'precio:desc':
            orderby = 'precio';
            sortext = `${orderby}:desc`;
            trg.name = 'precio:desc';
        break;
        case 'anio:desc':
            orderby = 'anio';
            sortext = `${orderby}:desc`;
            trg.name = 'anio:desc';
        break;
        case 'anio:asc':
            orderby = 'anio';
            sortext = `${orderby}:asc`;
            trg.name = 'anio:asc';
        break;
    }

    set(where, trg.name, trg.value);
    setSearch(where, 0);
  };

  const handlePageChange = ({ target }) => {
    setSearch(getWhereParams(), target.value);
  };

  const renderFilters = ({ categories }) => {
    const filters = [
      // Uncomment when backend is available - V2
//       {
//         title: 'Filtrar por',
//         name: 'orderby',
//         options: ['ranking', 'name'],
//         options: ['ranking', 'precio'],
//         value: orderby,
//       },
      {
        title: 'Filtrar por',
        name: 'category',
        options: [{ id: 'all', name: 'Todos' }, ...categories],
        value: getQueryParameters(search, 'category') || 'all',
        tipo: 'radio'
      },
      {
        title: 'Ordenar por',
        name: 'orderby',
        options: [
            { id: 'name:asc', name: 'Nada' },
            { id: 'precio:asc', name: 'De <strong>menor</strong> a <strong>mayor</strong> precio' },
            { id: 'precio:desc', name: 'De <strong>mayor</strong> a <strong>menor</strong> precio' },
            { id: 'anio:desc', name: 'Más <strong>nuevos</strong> primero' },
            { id: 'anio:asc', name: 'Más <strong>viejos</strong> primero' } ],
        value: orderby,
        tipo: 'drop'
      }
    ];

    return <Filters filters={filters} onChange={handleChange} range={range} />;
  };

  const renderView = ({ restaurants, ...rest }) => {
    return (
      <>
        {renderFilters(rest)}
        <RenderView
          restaurants={restaurants}
          onClick={handleClick}
          onPagingChange={handlePageChange}
          rest={rest}
          start={start}
          range={range}
        />
      </>
    );
  };


  return (
    <div className="page-wrapper" id="restaurants-page">
      <Container>
        <H1 morebold>Descubrí todos los modelos</H1>
        <Query
          query={GET_RESTAURANTS}
          render={renderView}
          variables={{
            limit: range,
            start,
            sort: `${orderby}:asc`,
            where: prepareWhereParams(),
          }}
        />
      </Container>
    </div>
  );
}

RestaurantsPage.defaultProps = {
  location: {
    pathname: null,
    search: null,
  },
};

RestaurantsPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
};

export default RestaurantsPage;

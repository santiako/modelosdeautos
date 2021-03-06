import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import Grid from '../../components/Grid';
import CardSection from '../../components/CardSection';
import Slider from '../../components/Slider';
import Tabs from '../../components/Tabs';
import P from '../../components/P';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import Img from '../../components/Img';
import Carrousel from '../../components/Carrousel';

const RenderView = ({
  restaurant,
  history,
  match: {
    params: { content, id },
  },
}) => {
  const {
    cover,
    modeloext,
    titulo,
    description,
    description2,
    description3,
    titulo20px,
    titulo20px2,
    autoabajo,
    autoabajo2,
  } = restaurant;

  return (
    <div>
      <Container fluid={true} className="overflow-hidden">
        <Row className="cabecera-row">
          <Col md="6" className="imgleft">
            <div className="img-wrapper">
              <Img src={(process.env.NODE_ENV !== 'production') ? 
                  `${process.env.REACT_APP_BACKEND_URL}${cover[0].url}` : `${cover[0].url}`} />
            </div>
          </Col>

          <Col md="6" className="parrleft">
            <div className="parr-wrapper">
              <H3>{ modeloext }</H3>
              <H1>{ titulo }</H1>
              <P>{ description }</P>
            </div>
          </Col>
        </Row>

        <Row className="slider-row">
          <div className="slider-wrapper2">
            <Carrousel restaurant={{ ...restaurant }} />
          </div>
        </Row>

        <div className="info-wrapper">
          <div className="infocol-texleft">
            <Row>
              <Col className="parr1">
                <div className="parr-wrapper">
                  <H3>{ titulo20px }</H3>
                  <P>{ description2 }</P>
                </div>
              </Col>
              <Col className="img1">
                <div className="img-wrapper">
                  <Img src={(process.env.NODE_ENV !== 'production') ? 
                  `${process.env.REACT_APP_BACKEND_URL}${autoabajo.url}` : `${autoabajo.url}`} />
                </div>
              </Col>
            </Row>
          </div>

          <div className="infocol-texright">
            <Row>
              <Col className="img2">
                <div className="img-wrapper">
                  <Img src={(process.env.NODE_ENV !== 'production') ? 
                  `${process.env.REACT_APP_BACKEND_URL}${autoabajo2.url}` : `${autoabajo2.url}`} />
                </div>
              </Col>
              <Col className="parr2">
                <div className="parr-wrapper">
                  <H3>{ titulo20px2 }</H3>
                  <P>{ description3 }</P>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

RenderView.defaultProps = {
  restaurant: {
    cover: [],
    district: null,
    price: null,
  },
};

RenderView.propTypes = {
  restaurant: PropTypes.shape({
    cover: PropTypes.array,
    district: PropTypes.string,
    price: PropTypes.string,
  }),
  history: PropTypes.object.isRequired,
};

export default RenderView;

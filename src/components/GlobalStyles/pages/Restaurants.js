import { createGlobalStyle } from 'styled-components';

import sizes from '../../../assets/styles/sizes';
import colors from '../../../assets/styles/colors';
import fonts from '../../../assets/styles/fonts';

const Restaurants = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap');

  #restaurants-page {
    margin: ${sizes.header.height.large} 0 0 0;
    padding: ${sizes.margin * 1.9}px ${sizes.margin * 1.5}px;

    .container {
      position: relative;
      hr {
        margin-top: 6px;
        margin-bottom: 35px;
      }
    }
    H1 {
        margin: ${sizes.margin * 2.4}px 0 ${sizes.margin * 6.4}px 0;
        font-size: 35px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.26;
        letter-spacing: -0.7px;
        color: ${colors.black};
    }
    H4 {
      font-stretch: normal;
      font-style: normal;
      line-height: 1.07;
      letter-spacing: -0.65px;
    }
    .restaurants-wrapper {
      ul:not(.pagination) {
        margin-top: ${sizes.margin * 6}px;
        li.column {
          padding-bottom: ${sizes.margin * 2}px;
        }
      }
    }
    .filters-wrapper {
      li {
        float: left;
        margin: ${sizes.margin * 0.8}px ${sizes.margin * 1}px;
      }
    }
    .ooops-wrapper {
      margin-top: ${sizes.margin * 6}px;
      padding: 0 ${sizes.margin*2}px;
      text-align: center;
      .ooops-img {
        margin: 0 auto;
        width: 138px;
      }
      .ooops-title {
        font-size: 36px;
        color: ${colors.darkBlue};
        ${fonts.bold};
        margin-top: ${sizes.margin * 4.7}px;
        margin-bottom: ${sizes.margin * 0.9}px;
      }
      .ooops-text {
        font-size: 16px;
        color: ${colors.mediumGrey};
      }
    }

    @media (min-width: ${sizes.mobile}) {
      padding: ${sizes.margin * 3.8}px ${sizes.margin * 2}px ${sizes.margin * 4}px ${sizes.margin * 2}px;
      H1 {
          font-size: 43px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: -1px;
      }
      .restaurants-wrapper {
        ul:not(.pagination) {
          li.column {
            padding-bottom: ${sizes.margin * 2}px;
          }
        }
      }
    }

    @media (min-width: 550px) {
      .restaurants-wrapper {
        ul:not(.pagination) {
          li.column {
            padding-bottom: ${sizes.margin * 4}px;
          }
        }
      }
    }


    @media (min-width: ${sizes.tablet}) {
      padding: ${sizes.margin * 3.8}px ${sizes.margin * 2}px ${sizes.margin * 4}px ${sizes.margin * 2}px;
      H1 {
          margin: ${sizes.margin * 4.7}px 0 ${sizes.margin * 7.5}px 0;
          font-size: 50px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: -1px;
      }
      .restaurants-wrapper {
        ul:not(.pagination) {
          margin-top: ${sizes.margin * 3}px;
          li.column {
            padding-bottom: ${sizes.margin * 2}px;
            .img-wrapper {
              img {
                object-fit: contain;
              }
            }
          }
        }
      }
    }

    @media (min-width: 1024px) {
      .restaurants-wrapper {
        ul:not(.pagination) {
          li.column {
            .img-wrapper {
              img {
                object-fit: cover;
              }
            }
          }
        }
      }
    }

    @media (min-width: ${sizes.desktop}) {
      padding-bottom: ${sizes.margin * 6}px;
      .navbar-toggler {
        display: none;
      }
      .restaurants-wrapper {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        padding-right: ${sizes.margin * 3.3}px;

        h1 {
          padding-left: ${sizes.margin * 3}px;
        }
        ul:not(.pagination) {
          li.column {
            padding-bottom: ${sizes.margin * 4}px;
          }
        }
      }
      .filters-collapse.collapse:not(.show), .filters-collapse.collapse {
        position: relative;
        display: inline-block;
        width: 100%;
        padding-top: 0;

        .filters-wrapper {
          padding-right: ${sizes.margin * 3}px;
        }
        h1 {
          &, & + hr {
            display: none;
          }
        }
      }
    }
  }
`;

export default Restaurants;

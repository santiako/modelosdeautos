/**
 *
 * H1
 *
 */

import styled from 'styled-components';

import fonts from '../../assets/styles/fonts';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';

const H1 = styled.h1`
  ${props => props.morebold ? fonts.bold700 : fonts.bold};
  font-size: 32px;
  color: ${props => props.inputColor || colors.black};
  line-height: 1.14;
  @media (min-width: ${sizes.tablet}) {
    font-size: 50px;
  }
`;

export default H1;

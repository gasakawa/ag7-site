import styled from 'styled-components';
import { animated } from 'react-spring';

export const WhatsappWrapper = styled(animated.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 10px;
  right: 20px;
`;

export const WhatsappIcon = styled.div`
  display: flex;
  background-color: #1bd741;
  padding: 20px;
  border-radius: 50%;

  svg {
    color: #fff;
  }
`;

export const WhasappText = styled.div`
  margin-right: 10px;
  background-color: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: rgb(0 0 0 / 30%) 0px 3px 12px;

  span {
    font-weight: 600;
    font-size: 0.7em;
    color: #1bd741;
  }
`;

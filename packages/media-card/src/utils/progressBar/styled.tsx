/* tslint:disable:variable-name */
import styled from 'styled-components';
import { borderRadius } from '../../styles';

export const ProgressWrapper = styled.div`
  ${borderRadius}
  z-index: 30;
  overflow: hidden;
  background-color: rgba(255,255,255,0.3);

  .progressBar{
    width: 0%;
    height: 3px;
    background-color: white;
  }
`;

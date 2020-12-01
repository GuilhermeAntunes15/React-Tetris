import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

// React.memo garante que apenas renderizamos novamente as células alteradas
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);

export default React.memo(Cell);
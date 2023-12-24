import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const LoadStyled = styled.div`
  min-height: calc(100vh - 165px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const Loading = () => {
  return (
    <LoadStyled>
      <CircularProgress size={80}/>
      <p>Loading...</p>
    </LoadStyled>
  );
}

export default Loading;
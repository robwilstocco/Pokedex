import { CircularProgress } from '@mui/material';
import { LoadingText, LoadStyled } from './styles';



const Loading = () => {
  return (
    <LoadStyled>
      <CircularProgress size={80} />
      <LoadingText>Loading...</LoadingText>
    </LoadStyled>
  );
}

export default Loading;
import { Chip } from "@mui/material";
import styled from "styled-components";
import { IWrapper } from "../../interfaces/IWrapper";

export const CardWrapper = styled.div`
  height: 560px;
  width: 330px;
  padding: 1rem;
  border: 5px solid #2b2a4c;
  border-radius: 0.5rem;
  background-color: #b31312;
  margin-top: 1rem;
  &:hover{
    box-shadow: 0px 60px 60px -14px rgba(0, 0, 0, 0.75);
  }
  transform-style: preserve-3d;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  background-color: #eee2de;
  border-radius: 0.5rem;
  gap: 0.5rem;
  height: 100%;
  transform-style: preserve-3d;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 1rem;
  transform-style: preserve-3d;
  height: 100%;
`;

export const DetailsGroup = styled.div<IWrapper>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  gap: 0.5rem;
  transform: translateZ(15px);
`;

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  transform: translateZ(15px);
`;

export const ImageBackground = styled.div`
  background: radial-gradient(
    circle,
    var(--primary) 50%,
    var(--secondary) 100%
  );
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  text-align: left;
  font-size: 1rem;
  transform: translateZ(15px);
`;

export const InfoText = styled(InfoTitle)`
  font-weight: 500;
  padding: 0 0.5rem;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
  transform-style: preserve-3d;
`;

export const StyledChips = styled(Chip)`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  transform: translateZ(15px);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  flex: 1;
`;

import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background);
  align-items: center;
  flex: 1;
  padding: 1rem;
  gap: 1rem;
`
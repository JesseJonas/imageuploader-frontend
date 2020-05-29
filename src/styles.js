import styled from 'styled-components';

// Alinhando todo conteúdo filho no centro
export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 75px;
  }
`;

//Div centralizada, com width maximo de 400 para celular
export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 3px;
  padding: 20px
`;

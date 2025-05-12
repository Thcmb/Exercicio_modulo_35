//Arquivo de configuração do CSS do container de cards de produto.
import styled from 'styled-components'

//Configuração CSS do container.
export const Container = styled.section`
  padding: 32px 0;
  margin-bottom: 120px;
`

//Configuração CSS da lista do container.
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`

//Configuração CSS para o titulo do container.
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

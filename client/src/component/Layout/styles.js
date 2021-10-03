import styled from 'styled-components'

export const Main = styled.div`
  position: absolute;
  margin: 6% 0% 0% 40%;
  display: flex;
  flex-direction: column;

  width: 400px;
  height: 600px;

  overflow: hidden;
  border-radius: 5%;
  background-color: #fff;

  h1 {
    color: hsl(223, 47%, 23%);
    font-weight: 700;
    font-size: 26px;
    text-align: center;
    font-family: system-ui;
    font-weight: 900;
  }
`
export const Descri = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: hsl(224, 23%, 55%);
  font-family: system-ui;
`

export const Plan = styled.div`
  width: 80%;
  height: 13%;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  background-color: hsl(225, 100%, 98%);

  img {
    width: 48px;
    height: 48px;
    margin: 5% 0% 0% 5%;
  }
  #anual {
    margin: 1% 0% 0% 12%;
  }

  #preco {
    font-size: 16px;
    color: hsl(224, 23%, 55%);
    font-family: system-ui;
    margin: -14px 0 0 11px;
  }

  #mudanca {
    margin: 8% 0% 0% 14%;
    text-decoration: none;
  }

  h2 {
    color: hsl(223, 47%, 23%);
    font-size: 16px;
    text-align: center;
    font-family: system-ui;
  }
`
export const Pagar = styled.a`
  height: 1.344rem;
  width: 34%;
  border-radius: 0.5rem;
  padding: 2% 23.5% 3% 22.5%;
  margin: 0 auto;
  margin-top: 9%;

  font-size: 15.5px;
  text-align: center;
  font-family: system-ui;
  text-decoration: none;

  background-color: hsl(245, 75%, 52%);
  color: white;
  &:hover {
    background: hsl(240, 80%, 50%);
    color: white;
  }
`
export const Cancelar = styled.a`
  margin: auto;
  border-radius: 10px;

  font-size: 15.5px;
  text-align: center;
  font-family: system-ui;
  text-decoration: none;

  height: 3%;
  width: 78.2%;
  color: hsl(224, 23%, 55%);
  text-decoration: none;

  #cancelar:active {
    color: hsl(223, 47%, 23%);
  }
`

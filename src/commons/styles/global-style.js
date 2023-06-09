import { createGlobalStyle } from '../../../node_modules/styled-components/dist/styled-components.cjs';
import CovidImg from '../../assets/images/covid.jpg'

const GlobalStyle = createGlobalStyle`
*{
  outline: none;
  box-sizing: border-box;
}
body{
  line-height: normal;
}
html, body{
  width: 100%;
  min-height: 100%;
  display: flex;
  padding: 0px;
  margin: 0px;
}
#root{
  background: url(${CovidImg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
}
.mb-2 {
  margin-bottom: 16px;
}
.pt-2{
  padding-top: 16px;
}
.cursor{
  cursor: pointer;
}
`

export default GlobalStyle;
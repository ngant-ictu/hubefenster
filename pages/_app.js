import GlobalStyle from '../styles/globals';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;

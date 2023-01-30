import { Container } from "./Components/styles/Container.styles";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/Global";
import Content from './Components/Content'
import Card from "./Components/Card";
import Footer from "./Components/Footer";


const theme = {
    colors:{
        header:'#ebfbff',
        body:'#fff',
        footer:'#003333',
    },
    mobile: '768px',
}

function App() {
    return ( 
        <ThemeProvider theme = {theme}>
        <>
          <GlobalStyles/>
          <Header/>
          <Container>
          {Content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          </Container>
          <Footer />
        </>
        </ThemeProvider>
    );
}
export default App;
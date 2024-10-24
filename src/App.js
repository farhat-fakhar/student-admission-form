import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Component/GlobalStyle/GlobalStyle";
import Home from "./Component/Home/Home";
import Header from "./Component/Home/Header";
 
function App() {
  const theme = {
    colors: {
      whiteColor: "#EEEEEE",
      darkPurpul:"#2E0249",
      lightPurpul: "#A91079",
      transparent:"#2E0249"
    
    },
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header/>
           <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

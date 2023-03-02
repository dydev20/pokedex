import React from "react"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { createTheme,ThemeProvider } from '@mui/material/styles';
import BasicGrid from "./components/BasicGrid";

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#000',
    }
  },
  shape:{
    borderRadius:1.5
  }
});



function App() {
 
  const [searchValue, setSearchValue] = React.useState("")

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar handleChange={handleChange}/>
        <BasicGrid searchValue={searchValue}/>
      </ThemeProvider>
      
    </div>
  )
}

export default App

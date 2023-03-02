import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import { CgPokemon } from "react-icons/cg"


function ResponsiveAppBar(props) {
    
    const [windowWidth,setWindowWidth]=React.useState(window.innerWidth)

    const theme=useTheme()

    /* get window width */
    React.useEffect(()=>{
        window.addEventListener("resize",function(){
            setWindowWidth(window.innerWidth)
        })
    },[])

    return (
        <AppBar position="static" sx={{bgcolor:"primary",py:1}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{justifyContent:"space-around"}}>

                    <Box>
                        <Box sx={{display:"flex",alignItems:"center",gap:1}}>
                            
                            {windowWidth > 900 && <CgPokemon size="3rem"/>}
                            
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Pokedex
                            </Typography>
                        </Box>

                    
                    
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Pokedex
                        </Typography>
                    </Box>
                    
                    {/* search input */}
                    <TextField
                        id="outlined-basic"
                        label="Search Pokemon"
                        variant="filled"
                        size="small"
                        placeholder="bulbasaur..."
                        sx={{ 
                            backgroundColor: "white", 
                            borderRadius: theme.shape.borderRadius,
                            width:"50%"

                        }}
                        InputLabelProps={{ shrink: true }}
                        onChange={props.handleChange}
                        
                    />

                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
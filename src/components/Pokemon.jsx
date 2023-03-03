import React from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


export default function Pokemon(props){
    
    const theme=useTheme()

    /* capatilise pokemon name */
    function capatiliseName(name){
        const capatilisedName = name[0].toUpperCase()+name.slice(1)  
        return capatilisedName;  
    }

    return(
        <Box>
            <img sx={{width:"30%"}} src={props.props.img} alt={props.props.name}/>
                        
                        
            <Typography variant="h5" component="div">{capatiliseName(props.props.name)}</Typography>
            
            <Box
                sx={{ mb: 1.5 }}
                display="flex"
                gap={2}
            >

                {/* display pokemon types attribute*/}
                {
                    props.types.map((type,index) => {

                        let backgroundColor;

                        {/* different background colour depending on type */}
                        switch(type){
                            case "grass":
                                backgroundColor ="#27ae60"
                                break
                            case "water":
                                backgroundColor ="#3498db"
                                break
                            case "fire":
                                backgroundColor ="#e67e22"
                                break
                            case "normal":
                                backgroundColor = "#ccae62"
                                break
                            case "fighting":
                                backgroundColor = "#b33939"
                                break
                            case "flying":
                                backgroundColor = "#a29bfe"
                                break
                            case "poison":
                                backgroundColor = "#8854d0"
                                break
                            case "ground":
                                backgroundColor = "#ffb142"
                                break
                            case "rock":
                                backgroundColor = "#cc8e35"
                                break
                            case "bug":
                                backgroundColor = "#A3CB38"
                                break
                            case "ghost":
                                backgroundColor = "#82589F"
                                break
                            case "steel":
                                backgroundColor = "#747d8c"
                                break
                            case "electric":
                                backgroundColor = "#f1c40f"
                                break
                            case "psychic":
                                backgroundColor = "#e84393"
                                break
                            case "ice":
                                backgroundColor = "#74b9ff"
                                break
                            case "dragon":
                                backgroundColor = "#4834d4"
                                break
                            case "dark":
                                backgroundColor = "#a6915c"
                                break
                        }

                        return (
                            <Box 
                                key={index} 
                                sx={{ 
                                    backgroundColor: backgroundColor, 
                                    width: 70, 
                                    textAlign: "center", 
                                    mt: 1, 
                                    borderRadius: theme.shape.borderRadius 
                                }}
                            >
                                <Typography variant="subtitle1" sx={{color:"white"}}>{type}</Typography>
                            </Box>
                            
                        )
                    }
                    )
                }
            </Box>
        </Box>
    )
}
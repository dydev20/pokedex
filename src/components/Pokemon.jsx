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
                        return (
                            <Box 
                                key={index} 
                                sx={{ 
                                    backgroundColor: theme.palette.secondary.main, 
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
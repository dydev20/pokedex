import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Pokemon from "./Pokemon"
import { useTheme } from '@mui/material/styles';

export default function BasicCard(props) {

    const theme = useTheme()
    
    const [modalOpen,setModalOpen]=React.useState(false)
    
    function handleOpen(){
        setModalOpen(true)
    }
    
    function handleClose(){
        setModalOpen(false)
    }

    const types = props.types.map(typesObj => typesObj.type.name);

    function renderStats(stat){

        /* shorten special attack to sp. atk */
        if(stat.stat.name==="special-attack"){
            return (
                <List sx={{ textAlign: "center" }}>
                    <ListItemText>sp. atk</ListItemText>
                    <ListItemText>{stat.base_stat}</ListItemText>
                </List>
            )

        } else if (stat.stat.name === "special-defense") { /* shorten special defense to sp. def*/
            return (
                <List sx={{ textAlign: "center" }}>
                    <ListItemText>sp. def</ListItemText>
                    <ListItemText>{stat.base_stat}</ListItemText>
                </List>
            )
        }else{
            return(
                <List sx={{ textAlign: "center" }}>
                    <ListItemText>{stat.stat.name}</ListItemText>
                    <ListItemText>{stat.base_stat}</ListItemText>
                </List>
            )
        }
    }

    
    return (
        <Card > 
            <CardContent>
                
                <Pokemon 
                    props={props}
                    types={types}
                />
                
            </CardContent>
            <CardActions>
                <Button size="small" sx={{color:theme.palette.secondary.dark}} onClick={handleOpen}>View Stats</Button>
            </CardActions>
            

            {/* modal to show pokemon stats */}
            <Modal 
                open={modalOpen}
                onClick={handleClose}

            >
                <Box 
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: {
                            xs:"90%",
                            lg:"40%"
                        },
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Pokemon 
                        props={props}
                        types={types}
                    />
                    
                    <Box
                        sx={{ 
                            display: "grid", 
                            gridTemplateColumns: "repeat(3,1fr)",
                            marginTop:5 
                        }}
                    >
                        
                        {
                            props.stats.map((stat,index)=>{
                                return(
                                    <Box key={index}>
                                        {renderStats(stat)}
                                    </Box>
                                )
                            })
                        }
                        
                    </Box>

                </Box>
            </Modal>
        </Card>
    );
}
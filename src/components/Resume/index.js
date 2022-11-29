import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';


export default function Resume() {
    return (
        <div>
            <Button href={
                    process.env.PUBLIC_URL + "/assets/resume2022.pdf"
                }
                download
                variant="contained">Download Resume</Button>
               <Card sx={{maxWidth:'300px', marginTop: 4 }}>
                   <CardContent>
                        <Typography variant="h6" component="div">Experience with: </Typography>
            <List dense>

                <ListItem>
                    <ListItemText primary="HTML"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="CSS"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="JavaScript"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="React"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Node.js"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Express.js"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="MongoDB"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="SQL"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="C#"secondary={''}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary=".NET"secondary={''}/>
                </ListItem>
                
            </List>
            </CardContent>
            </Card>
        </div>

    );
}

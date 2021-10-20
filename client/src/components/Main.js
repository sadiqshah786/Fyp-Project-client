import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import React from 'react';

import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        
        maxHeight: 1000,
        display: 'flex',
        justifyContent:'center'
    },
});

export default function Main() {
    const classes = useStyles();
   const history= useHistory();
   const handleClick =(e)=>{
       e.preventDefault();
       history.push('/product')
   }
    return (
        <Card className={classes.root} onClick={handleClick}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    alt="Men's Collection"
                    height="400"
                    image="./images/men.jpg"
                    title="Men's Collection"

                />

                <Typography gutterBottom variant="h2" component="h2" style={{
                    textAlign: 'center'
                }}>
                    Shop Men's Collection
          </Typography>
            </CardActionArea>


            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="WoMen's Collection"
                    height="400"
                    image="./images/item-10.jpg"
                    title="WoMem's Collection"

                />
                <Typography gutterBottom variant="h2" component="h2" style={{
                    textAlign: 'center',
                }}>
                    Shop WoMen's Collection
          </Typography>
            </CardActionArea>


        </Card>
    );
}

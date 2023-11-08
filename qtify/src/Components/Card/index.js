import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { green } from '@mui/material/colors';


export default (props) => {
    return (
        <>
        <Card style={{maxWidth: '159px',height:'205px'}}>
            <CardActionArea style={{  border: '1px solid green',borderRadius:'70px',borderRadius:'6px',height:'205px'}} >
                <CardMedia
                    component="img"
                    height="170"
                    width="159"
                
                    image={props.img}
                    alt="green iguana"
                />
                <CardContent style={{height:'35px'}}>
                    <Typography gutterBottom style={{height:'23px',width:'100px',border: '1px solid green',left:'6px',top:'176px',borderRadius:'10px',position:'absolute',padding:'1px 1px 1px 2px',backgroundColor:'black',color:'white'}}>
                    {props.followers}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
         <p  style={{ padding:'2px',height:'30px'}}>
            {props.title}
         </p>
     </>
   
    )
}
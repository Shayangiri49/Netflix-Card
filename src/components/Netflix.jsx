/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Netflix({ nitems }) {
  return (
    <>
    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>
    <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia className='h-[200px]'
            component="img"
            image={nitems.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nitems.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {nitems.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={nitems.link}>
            <Button size="small" color="primary">
              Watch Now
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
      
    </>
  )
}

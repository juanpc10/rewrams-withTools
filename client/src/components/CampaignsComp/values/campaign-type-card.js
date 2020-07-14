import React, { useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { GlobalContext } from '../../../context/globalState';
import ApiClient from '../../../context/ApiClient';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(user) {

  const username = user.username;
  
  const { addSingleEvent } = useContext(GlobalContext);
  const { items } = useContext(GlobalContext);

  const classes = useStyles();

  useEffect(() => {
    ApiClient.getAllCoupons(username)
    .then(data => data.map(item => addSingleEvent(item))); // eslint-disable-next-line
  }, []);

  let currentItemType = {};
  function selectingCurrentItemType() {
    items.map (item => {
      if (item.type === 'cumulative')  {
        if (item.active === true)  { 
          // currentItemType.imgString = 'https://data.whicdn.com/images/329095378/original.jpg'
          currentItemType.imgString = 'https://img.maximummedia.ie/herfamily_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyZmFtaWx5Lm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzAxXFxcLzAzMDk1MTE3XFxcL2d5bS1zZWxmaWUuanBnXCIsXCJ3aWR0aFwiOjY0NyxcImhlaWdodFwiOjM0MCxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3LmhlcmZhbWlseS5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2hlcmZhbWlseVxcXC9uby1pbWFnZS5wbmc_aWQ9ZGNlNzFiNDVjNDI3MjhkZTg0YzdcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiZjBmNzc4ZWI2MzNjZjRlM2I3NDJlNzcwMjRjNDljZjlkMzQ0YWZhNSJ9/gym-selfie.jpg'
          // currentItemType.imgString = 'https://www.sportoutdoor24.it/app/uploads/2016/12/troppi-selfie-fitness-problema-psicologico-768x539.jpg'
          currentItemType.cardHeader = 'Cumulative Coupons';
          currentItemType.descriptionString = 'Multiple coupons per user, with max % per user. To reward customers sharing their experience and promote them to recommend your service (e.g. gym memberships, online classes)';
          currentItemType.discNumber = item.discount + '%';
          currentItemType.maxDiscNumber = item.maxDiscount + '%';
        }
      } else if (item.type === 'instant') {
        if (item.active === true) { 
          currentItemType.imgString = 'https://www.thedailymeal.com/sites/default/files/story/2016/taking%20food%20photo.JPG'
          currentItemType.cardHeader = 'Instant Discount';
          currentItemType.descriptionString = 'One coupon per user, one discount % per order. To reward customers sharing their current experience or announcing their purchase (e.g. restaurants, online clothing stores)';
          currentItemType.discNumber = item.discount + '%';
          currentItemType.maxDiscNumber = '';
        }
      }    // eslint-disable-next-line
      return currentItemType;
    });
  }
  selectingCurrentItemType();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={currentItemType.imgString}
          // image='https://data.whicdn.com/images/329095378/original.jpg'

          title="Discounts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* Cumulative Coupons */}
            {currentItemType.cardHeader}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Multiple coupons per user, with max % per user. To reward customers sharing their experience and promote them to recommend your service (e.g. gym memberships, online classes) */}
            {currentItemType.descriptionString}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          {/* 4% */}
          {currentItemType.discNumber}
        </Button>
        <Button size="small" color="secondary">
          {/* 44% */}
          {currentItemType.maxDiscNumber}
        </Button>
      </CardActions>
    </Card>
  );
}
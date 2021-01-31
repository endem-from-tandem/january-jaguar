import React, { useState } from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { useTheme, makeStyles, createStyles, Box } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import jagu_one from '../../img/jagu_2.jpg'
import jagu_two from '../../img/jagu_3.jpg'
import jagu_four from '../../img/jagu_4.jpg'
import jagu_five from '../../img/jagu_5.jpg'

import jagu_v from '../../img/jagu.mp4'

import CloseIcon from '@material-ui/icons/Close'

const images = [jagu_one, jagu_two, jagu_four, jagu_five]

const Gallery: React.FC = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      card: {
        width: '320px',
        marginTop: theme.spacing(1),
      },
      cardMedia: {
        height: 200,
        objectFit: 'cover',
      },
      bg_video_container: {
        height: '200px',
        position: 'relative',
        marginTop: '10px',
      },
      bg_video: {
        position: 'absolute',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        padding: 0,
      },
    })
  )
  const classes = useStyles()
  const themeObject = useTheme()
  const matchesWidth = useMediaQuery((theme: any) =>
    theme.breakpoints.down('sm')
  )
  const matchesHeight = useMediaQuery('( max-height: 500px )')

  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <Button color='primary' variant='contained' onClick={() => setOpen(true)}>
        material-auto-rotating-carousel
      </Button>
      {true ? (
        <AutoRotatingCarousel
          ButtonProps={{
            style: { color: 'white', width: '100px' },
            variant: 'none',
          }}
          label={<CloseIcon />}
          landscape={matchesHeight}
          open={open}
          onClose={() => setOpen(false)}
          mobile={matchesWidth}
          autoplay={false}
          onStart={() => setOpen(false)}
          style={{ position: 'absolute' }}
        >
          {images.map((img, index) => (
            <Slide
              mobile={matchesWidth}
              title={
                <Typography
                  variant={matchesHeight || matchesWidth ? 'subtitle1' : 'h5'}
                >
                  Jaguar is so awesome animal!
                </Typography>
              }
              subtitle={
                <Typography
                  variant={matchesHeight || matchesWidth ? 'subtitle2' : 'h6'}
                >
                  something about
                </Typography>
              }
              media={
                <div
                  style={{
                    width: matchesHeight ? '350px' : '500px',
                    height: '100%',
                    marginTop: '30px',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              }
              mediaBackgroundStyle={{
                backgroundColor: themeObject.palette.primary.main,
              }}
              style={{
                backgroundColor: themeObject.palette.primary.main,
                borderRadius: '5px',
              }}
            />
          ))}
        </AutoRotatingCarousel>
      ) : null}

      {/*
      <div className={classes.bg_video_container}>
        <video className={classes.bg_video} loop autoPlay>
          <source src={jagu_v} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      */}

      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          component='video'
          height='140'
          width='100%'
          autoPlay
          image={jagu_v}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Пантеры атакуют
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            National geographic discovery channel
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            variant='outlined'
            color={
              themeObject.palette.type === 'light' ? 'primary' : 'secondary'
            }
          >
            Подробнее
          </Button>
          <Button
            size='small'
            variant='outlined'
            color={
              themeObject.palette.type === 'light' ? 'primary' : 'secondary'
            }
          >
            Спасибо
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Gallery

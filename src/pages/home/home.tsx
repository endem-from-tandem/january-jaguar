import React from 'react'
import {
  useTheme,
  makeStyles,
  createStyles,
  Typography,
  Button,
  Box,
  Hidden,
} from '@material-ui/core'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import jagu from '../../img/jagu.jpg'

const Home: React.FC = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      card: {
        marginTop: theme.spacing(1),
      },
      cardMedia: {
        height: 200,
      },
    })
  )
  const classes = useStyles()
  const themeObject = useTheme()
  const f = useMediaQuery((theme: any) => theme.breakpoints.up('navbar'))
  return (
    <>
      <Typography variant={f ? 'h3' : 'h4'} color='secondary'>
        January Jaguar
      </Typography>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={jagu}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            "Ягуар" и "пантера" - одно и тоже.
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Люди называют чёрными пантерами самых разных животных, зачастую даже
            не догадываясь, что они принадлежат к разным видам. Всё, что их
            объединяет — это окраска, тёмная или чёрная. Так как в природе
            чёрные пантеры встречаются редко, неудивительно, что у многих
            народов, которым доводилось с ними сталкиваться, возник
            мифологический образ этого животного. Во многих культурах пантер
            наделяют сверхъестественными силами и относятся к ним с почтением и
            опаской.
          </Typography>
        </CardContent>
      </Card>
      <Box p={2} mt={2} color='info.contrastText' bgcolor='info.main'>
        <Typography>
          Сайт является практикой освоения и демонстрацией навыка Material UI.
          Была цель освоить основные компоненты и функции данного UI-Kit
          (темизация, кастомизация и адаптивность компонентов). Так же уделил
          внимание typescript, react-hooks и структуре приложения.
        </Typography>
      </Box>

      <Box p={2} mt={1} bgcolor='primary.light' color='primary.contrastText'>
        <Typography variant='h6'>Additional packages:</Typography>
        <Typography variant='overline'>
          reat-material-ui-form-validator
          <br />
          material-auto-rotating-carousel
          <br />
          notistack
        </Typography>
      </Box>

      <Hidden only={['xs', 'sm']}>
        <Box mt={0.3}>
          {/* use color from default theme object in Typography by export theme object */}
          <Typography
            style={{ color: themeObject.palette.grey[500] }}
            variant='subtitle2'
          >
            Обрати внимание на мобильную версию!
          </Typography>
        </Box>
      </Hidden>

      {/*
<Box mt={2}>
  <Button variant='contained' color='primary'>
    add
  </Button>
  <Button
    style={{ backgroundColor: '#f44336', color: 'white' }}
    variant='contained'
  >
    delete
  </Button>
</Box>
*/}
    </>
  )
}

export default Home

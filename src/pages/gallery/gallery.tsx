import React, { useState } from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { useTheme, makeStyles, createStyles, Box } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import jagu_one from '../../img/jagu_2.jpg'
import jagu_two from '../../img/jagu_3.jpg'
import jagu_four from '../../img/jagu_4.jpg'
import jagu_five from '../../img/jagu_5.jpg'

import CloseIcon from '@material-ui/icons/Close'

const images = [jagu_one, jagu_two, jagu_four, jagu_five]

const Gallery: React.FC = () => {
  const useStyles = makeStyles((theme) => createStyles({}))
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
    </div>
  )
}

export default Gallery

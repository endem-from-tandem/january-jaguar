import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { makeStyles, createStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

//Toolbar & Driver
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer'
//Dialog
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'

//Icons
import Logo from '../../img/logo.png'
import Menu from '@material-ui/icons/Menu'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import CloseIcon from '@material-ui/icons/Close'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

interface INavbar {
  theme?: 'light' | 'dark'
  changeThemeHandler?: any

  setToggleActive?: any
  toggleActive?: boolean
  toggleActiveHandler?: any

  showModalHandler?: any
  open?: any
  closeModalHandler?: any
  openModalHandler?: any

  formData?: any
  formSubmitted?: any
  formChangeHandler?: any
  formSubmitHandler?: any

  showPassword?: boolean
  showPasswordHandler?: any
}

const drawerWidth = 240

const useStyles = makeStyles((theme) =>
  createStyles({
    // Toolbar
    toolBar: {
      minHeight: 12,
    },
    button: {
      fontSize: 14,
      fontWeight: 'lighter',
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    flexBox: {
      flexGrow: 1,
    },
    // Drawer
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    closeMenuButton: {
      marginRight: 'auto',
      marginLeft: 0,
    },
    // Dialog
    // redefinition of MUI classes
    DialogCustom: {
      '& .MuiDialog-paperWidthXs': {
        minWidth: '310px',
      },
    },
    ThemeModalInput:
      theme.palette.type === 'dark'
        ? {
            '& label.Mui-focused': { color: '#2196f3' },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#2196f3',
            },
          }
        : { '& label.Mui-focused': { color: 'primary' } },
    ThemeModalTitle:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.primary.main,
            padding: 2,
          }
        : { padding: 2 },
    // redefinition of MUI tags
    dialogForm: {
      '& .MuiTextField-root': { width: '90%' },
    },
    dialogCloseButton: {
      color: theme.palette.error.main,
    },
  })
)

const Navbar: React.FC<INavbar> = ({
  theme,
  changeThemeHandler,
  toggleActiveHandler,
  toggleActive,
  open,
  openModalHandler,
  closeModalHandler,
  formData,
  formChangeHandler,
  formSubmitted,
  formSubmitHandler,
  showPassword,
  showPasswordHandler,
}) => {
  const classes = useStyles()
  const navs = ['gallery', 'some_two', 'with_large_text']

  const drawer = (
    <List>
      {navs.map((nav, index) => (
        <ListItem button component={Link} to={`/${nav}`} key={nav}>
          <ListItemText primary={nav} />
        </ListItem>
      ))}
    </List>
  )

  const signInForm = useRef(null)

  return (
    <>
      {/*TOOLBAR*/}
      <AppBar position='fixed' color='primary'>
        <Container disableGutters maxWidth='md'>
          <Toolbar className={classes.toolBar}>
            <Box display={{ xs: 'block', navbar: 'none' }}>
              <IconButton
                className={classes.menuButton}
                edge='start'
                color='inherit'
                aria-label='app'
                onClick={toggleActiveHandler}
              >
                <Menu />
              </IconButton>
            </Box>
            <Button
              className={classes.button}
              component={Link}
              color='inherit'
              to='/'
              startIcon={<Avatar variant='square' src={Logo} />}
            >
              Home
            </Button>
            <Box className={classes.flexBox} />
            <Box display={{ xs: 'none', navbar: 'block' }}>
              {navs.map((nav, index) => (
                <Button
                  disabled={index > 0 ? true : false}
                  className={classes.button}
                  component={Link}
                  to={`${nav}`}
                  size='large'
                  color='inherit'
                >
                  {`${nav}`}
                </Button>
              ))}
            </Box>
            <Button
              onClick={openModalHandler}
              className={classes.button}
              size='large'
              color='inherit'
            >
              Sign In
            </Button>
            <IconButton
              onClick={changeThemeHandler}
              color='inherit'
              aria-label='changeTheme'
            >
              <Brightness6Icon />
            </IconButton>

            {/*DIALOG*/}
            <Dialog
              className={classes.DialogCustom}
              fullWidth
              maxWidth='xs'
              open={open}
              onClose={closeModalHandler}
              aria-labelledby='form-dialog-title'
            >
              <DialogTitle
                className={classes.ThemeModalTitle}
                id='form-dialog-title'
              >
                <Box
                  display='flex'
                  flexDirection='row'
                  p={1}
                  m={1}
                  bgcolor='background.paper'
                >
                  <Box p={1}>
                    <Typography variant='h4'>Sign in </Typography>
                  </Box>
                  <Box className={classes.flexBox} />
                  <IconButton
                    className={classes.dialogCloseButton}
                    size='small'
                    onClick={closeModalHandler}
                  >
                    <CloseIcon style={{ width: '50px' }} />
                  </IconButton>
                </Box>
              </DialogTitle>

              <DialogContent>
                <>
                  {/*<DialogContentText></DialogContentText>*/}
                  {/*}
                <TextField
                  className={classes.ThemeModalInput}
                  margin='dense'
                  id='email'
                  label='Email'
                  type='email'
                  fullWidth
                />
                <TextField
                  className={classes.ThemeModalInput}
                  margin='dense'
                  id='password'
                  label='Password'
                  type='password'
                  fullWidth
                />
                <Box mt={0.3} color='primary.main'>
                  <Tooltip title='Go to the password recovery page?'>
                    <Button size='small'>Forgot your password?</Button>
                  </Tooltip>
                </Box>
              */}
                </>
                <ValidatorForm
                  className={classes.dialogForm}
                  ref={signInForm}
                  onError={(errors) => console.log(errors)}
                  onSubmit={formSubmitHandler}
                >
                  <TextValidator
                    margin='dense'
                    className={classes.ThemeModalInput}
                    label='Email'
                    onChange={formChangeHandler}
                    name='email'
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                      'this field is required',
                      'email is not valid',
                    ]}
                  />
                  <TextValidator
                    margin='dense'
                    type={showPassword ? 'text' : 'password'}
                    className={classes.ThemeModalInput}
                    label='Password'
                    onChange={formChangeHandler}
                    name='password'
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={showPasswordHandler}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      ),
                    }}
                  />
                  <Box mt={2}>
                    <Button
                      color='primary'
                      variant='contained'
                      type='submit'
                      disabled={formSubmitted}
                    >
                      Log In
                    </Button>
                    <Tooltip title='Go to the password recovery page?'>
                      <Button disabled={formSubmitted}>
                        Forgot your password?
                      </Button>
                    </Tooltip>
                  </Box>
                </ValidatorForm>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={closeModalHandler}
                  variant='outlined'
                  color='secondary'
                >
                  SIGN UP
                </Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
        </Container>
      </AppBar>

      {/*DRAWER*/}
      {toggleActive ? (
        <Box>
          <nav className={classes.drawer}>
            <Drawer
              variant='temporary'
              anchor='left'
              open={toggleActive}
              onClose={toggleActiveHandler}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton
                onClick={toggleActiveHandler}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </nav>
        </Box>
      ) : null}
    </>
  )
}

export default Navbar

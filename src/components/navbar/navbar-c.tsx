import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { VariantType, useSnackbar } from 'notistack'

import Navbar from './navbar'

import { IInitialState } from '../../reducers'

const NavbarContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  //theme
  const theme = useSelector((state: IInitialState) => state.theme)
  const changeThemeHandler = () => {
    dispatch({
      type: 'SET_THEME',
      payload: theme === 'light' ? 'dark' : 'light',
    })
  }

  //toggle
  const [toggleActive, setToggleActive] = useState<boolean>(false)
  const toggleActiveHandler = () => {
    setToggleActive(!toggleActive)
  }

  //modal
  const [open, setOpen] = useState(false)
  const openModalHandler = () => {
    setOpen(true)
  }
  const closeModalHandler = () => {
    setOpen(false)
  }
  //modal form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const formChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }
  const formSubmitHandler = (event: React.FormEvent) => {
    const variant: VariantType = Math.random() > 0.5 ? 'success' : 'error'
    const message = variant === 'success' ? 'Success' : 'Error'
    event.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      enqueueSnackbar(message, { variant })
      setFormSubmitted(false)
    }, 2000)
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Navbar
      theme={theme}
      changeThemeHandler={changeThemeHandler}
      toggleActiveHandler={toggleActiveHandler}
      toggleActive={toggleActive}
      open={open}
      openModalHandler={openModalHandler}
      closeModalHandler={closeModalHandler}
      formData={formData}
      formChangeHandler={formChangeHandler}
      formSubmitted={formSubmitted}
      formSubmitHandler={formSubmitHandler}
      showPassword={showPassword}
      showPasswordHandler={showPasswordHandler}
    />
  )
}

export default NavbarContainer

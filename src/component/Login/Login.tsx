import { Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Snackbar, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'
import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Background from '../../assets/red-background.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Background})`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black"
  },
  paper: {
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    height: "30vmin",
    pointerEvents: "none"
  }
}))

type User = {
  email: string
  password: string
}

const users = [{ email: "javier.parada@redb.ee", password: "1234" }, { email: "lucas.silvestri@redb.ee", password: "1234" }]

const findUser = ({ email, password }: any): User | undefined => users.find(user => user.email === email && user.password === password)

const Login = (props: any) => {

  const classes = useStyles()

  const [userInput, setUserInput] = useState<User>({ email: "", password: "" })

  const [showfeedback, setShowfeedback] = useState<boolean>(false)

  const userFound = (): boolean => findUser(userInput) !== undefined

  const onSubmit = () => {
    setShowfeedback(false)
    if (userFound()) {
      props.history.push("/landing")
    }
  }

  const handleEmailChange = (event: any) => {
    setUserInput({
      ...userInput,
      email: event.target.value,
    })
  }

  const handlePasswordChange = (event: any) => {
    setUserInput({
      ...userInput,
      password: event.target.value,
    })
  }

  return (
    <div>
      <Box className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <img src={Logo} className={classes.logo} alt="logo" />
          <div className={classes.form}>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              data-cy="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contrase??a"
              type="password"
              id="password"
              data-cy="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Mantener ingresado"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => { setShowfeedback(true) }}
              data-cy="submit"
            >
              ingresar
            </Button>

            <Grid container>

              <Grid item xs>
                <Link href="#" variant="body2">
                  ??Olvidaste la contrase??a?
              </Link>
              </Grid>

              <Grid item>
                <Link href="#" variant="body2">
                  {"??No tienes una cuenta? Registrate"}
                </Link>
              </Grid>

            </Grid>
          </div>
        </Paper>
      </Box >
      <Snackbar open={showfeedback} autoHideDuration={1500} onClose={onSubmit}>
        {userFound()
          ? <Alert severity="success">??Ingreso Exitoso!</Alert>
          : <Alert severity="error" data-cy="error">Email o contrase??a incorrecta. Ponte en contacto con soporte para mas informaci??n</Alert>
        }
      </Snackbar>
    </div>
  )
}

export default Login
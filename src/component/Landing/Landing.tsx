import { Box, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Background from '../../assets/red-background.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Background})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "black"
    },
    box: {
        minHeight: "93.3vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        marginTop: "-7.7vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        height: "4vmin",
    },
    search: {
        padding: '2px 4px',
        marginBottom: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        width: "60vw"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    table: {
        height: "70vh",
        width: "60vw"
    },
    iconButton: {
        padding: 10,
    },
    button: {
        margin: theme.spacing(1),
    },
}))

const CONTRATO_VIGENTE = "Vigente"

const FINALIZA_CONTRATO = "Baja"

const createData = (index: number, name: string, team: string, cell: string, status: String) =>
    ({ index, name, team, cell, status })

var initialRows = [
    createData(0, 'Lucas A. Silvestri', "Decidir", "Z", CONTRATO_VIGENTE),
    createData(1, 'Javier Parada Castro', "Decidir", "W", CONTRATO_VIGENTE),
    createData(2, 'Homero J. Simpson', "Springfield", "7G", CONTRATO_VIGENTE),
    createData(3, 'Carl Carlson', "Springfield", "8G", CONTRATO_VIGENTE),
    createData(4, 'Lenny Lennard', "Springfield", "8G", CONTRATO_VIGENTE),
]

const Landing = (props: any) => {
    const classes = useStyles()

    const [rows, setRows] = useState<any[]>(initialRows)

    const handleSearch = (event: any) => {
        setRows(initialRows.filter((row: any) => row.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#212121' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={Logo} className={classes.logo} alt="logo" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Redbee-conf
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => { props.history.push("/login") }}
                    >
                        Cerrar Sesión
                    </Button>
                </Toolbar>
            </AppBar>
            <Box className={classes.box}>
                <Typography variant="h3" gutterBottom>
                    Lista de Speakers de la RedbeConf 2021
                </Typography>
                <Paper component="form" className={classes.search}>
                    <InputBase
                        className={classes.input}
                        placeholder="Buscar empleado"
                        onChange={handleSearch}
                        inputProps={{ 'aria-label': 'Buscar empleado' }}
                    />
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="employees" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Empleado</TableCell>
                                <TableCell align="center">Equipo</TableCell>
                                <TableCell align="center">Celula</TableCell>
                                <TableCell align="center">Estado</TableCell>
                                <TableCell align="center">baja</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.team}</TableCell>
                                    <TableCell align="center">{row.cell}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => {
                                                row.status = FINALIZA_CONTRATO
                                                setRows([...rows])
                                            }}
                                        >
                                            Baja
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default Landing

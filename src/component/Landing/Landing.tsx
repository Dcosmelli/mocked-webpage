import { Box, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
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
        flexGrow: 1,
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
    tableHeader: {
        background: '#212121',
        paddingTop: theme.spacing(1),
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        boxShadow: '0px 0px 0px 0px'
    },
    tableTitle: {
        flexGrow: 1,
        paddingBottom: theme.spacing(1),
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            background: "rgba(0, 0, 0, 0.04)"
        },
    },
}))

const PROGRAMADA = "PROGRAMADA"

const CANCELADA = "CANCELADA"

const createData = (index: number, name: string, schedule: string, subject: string, status: String) =>
    ({ index, name, schedule, subject, status })

var initialRows = [
    createData(0, 'Leonardo Dalmaso', "13:00 hs", "Que hay de nuevo en la Scrum guide 2020", PROGRAMADA),
    createData(1, 'José Guzman', "14:30 hs", "Chaos Engineering", PROGRAMADA),
    createData(2, 'Javier Parada Castro/Lucas A. Silvestri', "16:00 hs", "Cypress Automatización en tiempos modernos", PROGRAMADA),
    createData(3, 'Mauro Mosconi', "16:30 hs", "Arquitecturas de micro frontends", PROGRAMADA),
    createData(4, 'Ariel Gamez/Melanie Romero/Vasco', "17:00 hs", "Arquitecturas Limpias, el regreso de la fuerza", PROGRAMADA),
]

const Landing = (props: any) => {
    const classes = useStyles()

    const [rows, setRows] = useState<any[]>(initialRows)

    const handleSearch = (event: any) => {
        setRows(initialRows.filter((row: any) => row.subject.toLowerCase().includes(event.target.value.toLowerCase())))
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
                <AppBar position="static" className={classes.tableHeader}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.tableTitle}>
                            Listado de Speakers
                        </Typography>
                        <Paper component="form" className={classes.search}>
                            <InputBase
                                className={classes.input}
                                placeholder="Buscar charla"
                                onChange={handleSearch}
                                data-cy="search"
                                inputProps={{ 'aria-label': 'Buscar charla' }}
                            />
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Toolbar>
                </AppBar>
                <TableContainer component={Paper} style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
                    <Table className={classes.table} aria-label="employees" size="small">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow className={classes.tableRow} key={row.name} data-cy="speakerTable">
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.subject}</TableCell>
                                    <TableCell align="center">{row.schedule}</TableCell>
                                    <TableCell align="center" data-cy={`status-${row.index}`}>{row.status}</TableCell>
                                    <TableCell align="center">{row.status === CANCELADA ? <span /> :
                                        <Button
                                            data-cy={`cancelButton-${row.index}`}
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => {
                                                row.status = CANCELADA
                                                setRows([...rows])
                                            }}
                                        >
                                            Cancelar
                                        </Button>}
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

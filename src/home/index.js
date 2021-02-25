import {Avatar, Box, Grid, ListItem, ListItemText, makeStyles, Paper} from "@material-ui/core";
import foto from './foto.jpg';
import List from "@material-ui/core/List";

const HomeComponent = () => {

    const classes = useStyles();

    const Cursos = ['HTML5', 'CSS3', 'JS','REACT']

    return(
            <Grid container justify={'center'} direction={'column'} alignItems={'center'}>
                <Avatar className={classes.large} src={foto}/>
                <h1>Gustavo Borges</h1>
                <Paper elevation={2}>
                    <Box p={3}>
                       <p>Saudações</p>
                        <p>Sou aluno do ensino médio e tenho estudado tecnologia no ultimo ano, neste tempo desenvolvi algumas atividades para colocar em pratica o conteudo que aprendi.</p>
                        <p>Dentre os cursos que fiz estão:</p>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {Cursos.map(item => (<ListItem button>
                                <ListItemText primary={item} />
                            </ListItem>))}
                        </List>
                    </Box>
                </Paper>
            </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

export default  HomeComponent
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import Countdown from 'react-countdown'
import C from '../images/c.png'
import Foto1 from '../images/foto1.png'
import Foto2 from '../images/foto2.png'
import Foto3 from '../images/foto3.jpeg'
import Foto4 from '../images/foto4.jpeg'

export default function Main() {

    // Random component
    const Finished = () => (
        <span style={{ color: 'blue' }}>You are good to go!</span>
    );

    // Renderer callback
    const renderer = ({ total, days, hours, minutes, seconds }) => {
        if (total) {
            // Render a countdown
            return (
                <Grid item>
                    <Card sx={{ maxHeight: 300, maxWidth: 500, paddingX: 0.2, minWidth: 350 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                ¿Cuánto falta?
                            </Typography>
                            <Grid container direction="row" justifyContent="center">
                                <Grid item lg={3} xl={3}>
                                    <Card>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                {days}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle1" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                Días
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={3} xl={3}>
                                    <Card >
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                {hours}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle1" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                Horas
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={3}>
                                    <Card >
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                {minutes}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle1" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                Minutos
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={3} xl={3}>
                                    <Card >
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                {seconds}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle1" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                                Segundos
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            );
        } else {
            // Render a finished state
            return <Finished />;
        }
    }

    return (
        <Grid container alignItems="center" direction="column" className="background" spacing={3}>
            <Grid item>
                <Grid container direction='row' alignItems="center">
                    <Grid item lg={2} md={4} xs={2} sm={4}>
                        <img className="c" src={C} alt="c" />
                    </Grid>
                    <Grid item lg={8} md={8} xs={8} sm={8}>
                        <Grid container direction={"column"}>
                            <Grid className='title'>
                                Ciara
                            </Grid>
                            <Grid className='date' item>
                                30-12-2023
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction='row' alignItems="center" justifyContent="center">
                    <Grid item md={8} lg={5} xs={10} sm={10}>
                        <Typography className="text">
                            15 años, mezcla rara, dulce y hermosa... Edad de en sueños, emociones y nuevas experiencias. Porque son parte de mi vida, y porque simplemente los quiero, los invito a compartir… ¡La noche de mis sueños!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction='row' alignItems="center" justifyContent="center">
                    <Countdown
                        date={new Date(2023, 11, 30)}
                        renderer={renderer}
                    />
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction='column' spacing={4}>
                    <Grid item>
                        <Grid container direction='row' alignItems="center" justifyContent="center" spacing={10}>
                            <Grid item>
                                <Card sx={{ maxWidth: 345, paddingX: 0.2 }}>
                                    <CardMedia
                                        sx={{ height: 450, width: 400 }}
                                        image={Foto1}
                                        title="Foto1"
                                    />
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{ minHeight: 450, maxWidth: 345, paddingX: 0.2, minWidth: 350 }}>
                                    <CardMedia
                                        sx={{ height: 150, width: 150, margin: "auto" }}
                                        image="https://static.wixstatic.com/media/eba6cb_2b9e424858674f5c8e674ab3b9223b49~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(17).png"
                                        title=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            Cardellino Eventos
                                        </Typography>
                                        <Typography variant="subtitle1" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            Av.
                                            Dardo Rocha 2045, Berazategui,
                                            <br></br>Provincia
                                            de Buenos Aires
                                            <br></br>
                                            <br></br>
                                            21:30 hs a 06 hs
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ width: 150, margin: "auto" }}>
                                        <Button style={{
                                            backgroundColor: "#fed75d"
                                        }}
                                            variant='contained'
                                            onClick={() => window.open("https://www.google.com/maps/place/Av.+Dardo+Rocha+2045,+Berazategui+Oeste,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95a328d79739909f:0x36705b49d2792d32?sa=X&ved=2ahUKEwiJzbesqeH8AhV3ErkGHcUeCAgQ8gF6BAgLEAI", "_blank")}
                                        >
                                            ¿Cómo llego?
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' alignItems="center" justifyContent="center" spacing={10}>
                            <Grid item>
                                <Card sx={{ minHeight: 450, maxWidth: 345, paddingX: 0.2, minWidth: 350 }}>
                                    <CardMedia
                                        sx={{ height: 150, width: 150, margin: "auto" }}
                                        image="https://static.wixstatic.com/media/eba6cb_d1a721b5bc31432b809570604d363973~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(20).png"
                                        title=""
                                    />
                                    <CardActions sx={{ width: 170, margin: "auto" }}>
                                        <Button style={{
                                            width: 170,
                                            height: 50,
                                            backgroundColor: "#fed75d",
                                            fontSize: 20,
                                            fontFamily: "Indie Flower, cursive;"
                                        }}
                                            variant='contained'
                                            onClick={() => window.open('https://www.instagram.com/explore/tags/15deciara/?hl=es-la', '_blank')}
                                        >
                                            #15deCiara
                                        </Button>
                                    </CardActions>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            Usá mi <b>#15deCiara</b> para subir las fotos de recuerdos que quieras compartir conmigo y las que saques en el cumple.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{ maxWidth: 345, paddingX: 0.2 }}>
                                    <CardMedia
                                        sx={{ height: 450, width: 400 }}
                                        image={Foto3}
                                        title="Foto3"
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' alignItems="center" justifyContent="center" spacing={10}>
                            <Grid item>
                                <Card sx={{ maxWidth: 345, paddingX: 0.2 }}>
                                    <CardMedia
                                        sx={{ height: 450, width: 400 }}
                                        image={Foto2}
                                        title="Foto2"
                                    />
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{ minHeight: 450, maxWidth: 345, paddingX: 0.2, minWidth: 350 }}>
                                    <CardMedia
                                        sx={{ height: 150, width: 150, margin: "auto" }}
                                        image="https://static.wixstatic.com/media/eba6cb_6b10bb44f76d4a378416d654a9078932~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(21).png"
                                        title=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            El mejor regalo para mí es tu compañía, pero si quieres obsequiarme algo, mi mamá lo recibirá
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ width: 100, margin: "auto" }}>
                                        <Button style={{
                                            backgroundColor: "#fed75d"
                                        }} variant='contained'>Regalo</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' alignItems="center" justifyContent="center" spacing={10}>
                            <Grid item>
                                <Card sx={{ minHeight: 450, maxWidth: 345, paddingX: 0.2, minWidth: 350 }}>
                                    <CardMedia
                                        sx={{ height: 150, width: 150, margin: "auto" }}
                                        image="https://static.wixstatic.com/media/eba6cb_a12268226f374036965101968bf1bdf8~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(16).png"
                                        title=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            ¡Quiero que nos divirtamos juntos!
                                            Ayúdame desde ya a hacer
                                            la playlist de mi fiesta con las canciones infaltables,
                                            las que quieres oír y bailar
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ width: 170, margin: "auto" }}>
                                        <Button style={{
                                            width: 170,
                                            height: 50,
                                            backgroundColor: "#fed75d",
                                            fontSize: 20,
                                            fontFamily: "Indie Flower, cursive;"
                                        }}
                                            variant='contained'
                                            onClick={() => window.open('https://open.spotify.com/playlist/1jQIx81lDBjt2LAm2NJ5Rj?si=7QzrQ8jaQuCU4-ENrA_8Pg', '_blank')}
                                        >
                                            Playlist
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{ maxWidth: 345, paddingX: 0.2 }}>
                                    <CardMedia
                                        sx={{ height: 450, width: 400 }}
                                        image={Foto4}
                                        title="Foto4"
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' alignItems="center" justifyContent="center" spacing={10}>
                            <Grid item>
                                <Card sx={{ minHeight: 250, maxWidth: 345, minWidth: 350, }}>
                                    <CardMedia
                                        sx={{ height: 200, width: 150, margin: "auto" }}
                                        image="https://static.wixstatic.com/media/eba6cb_7dec29bceb9a4e46a9e9e5efbbab2487~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/modelo%20pink%20vectores%20%20(2).png"
                                        title=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            Elegante
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' alignItems="center" justifyContent="center" spacing={10}>
                            <Grid item>
                                <Card sx={{ minHeight: 250, maxWidth: 345, minWidth: 350, }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            Confirma tu asistencia acá
                                        </Typography>
                                        <Typography variant="subtitle1" textAlign="center" fontFamily="Indie Flower, cursive;">
                                            Para mí es muy importante que confirmes esta invitación,
                                            o que me cuentes si no nos puedes acompañar
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ width: 170, margin: "auto" }}>
                                        <Button style={{
                                            width: 170,
                                            height: 50,
                                            backgroundColor: "#fed75d",
                                            fontSize: 15,
                                            fontFamily: "Indie Flower, cursive;"
                                        }}
                                            variant='contained'
                                            onClick={() => window.open('whatsapp://send?text=¡Confirmo mi asistencia a tus 15!&phone="+encodeURIComponent(+54 9 11 2679-3540)', '_blank')}
                                        >
                                            ¡Confirmación!
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h3" component="div" textAlign="center" fontFamily="Indie Flower, cursive;">
                            ¡Te espero!

                        </Typography>
                        <Typography variant="h1" textAlign="center" fontFamily="Arizonia, cursive;">
                            Ciara
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>


        </Grid >
    )
}
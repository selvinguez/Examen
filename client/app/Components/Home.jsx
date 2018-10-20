import React from 'react'
import {withStyles} from '@material-ui/core/styles'

const styles = {

}
class Home extends React.Component {
    render() {
        return(
    <div>
<h2 >LIGA NACIONAL</h2>
<p>BIENVENIDOS A NUESTRA PAGINA DEPORTIVA
</p>
<button type="button" class="button button1" data-toggle="modal" data-target="#myModal">
        Mejores jugadores
      </button>
 <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Mejores Jugadores</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              Rubilio Castillo <br/>
              Oscar Salas <br/> 
              Alfredo Mejia <br/> 
              Jerry Bengstong <br/>
              Eddie Hernandez <br/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="button button1" data-toggle="modal" data-target="#myModal">
            Mejores Porteros
            </button>
   
<button class="button button1">EQUIPO FAVORITO</button>
<button class="button button1">TABLA POSICIONES</button>
<br/>
<video src="https://www.youtube.com/watch?v=J59fxGWI1rA"></video>
<br/>
<button class="button button2">SELECION NACIONAL</button>
<button class="button button2">CHAT</button>
<button class="button button2">EN VIVO</button>
<button class="button button2">VOTACIONES</button>
    </div>
        )
    }
}

export default withStyles(styles)(Home)
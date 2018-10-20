import React from 'react'
import {withStyles} from '@material-ui/core/styles'

const styles = {

}
class examen1 extends React.Component {
    render() {
        return(
            <div>
          
            <button type="button" class="btn btn-primary">HOLA SOY LA RUTA #1</button>
            </div>
        )
    }
}

export default withStyles(styles)(examen1)
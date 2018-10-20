import React from 'react'
import {withStyles} from '@material-ui/core/styles'

const styles = {

}
class examen1 extends React.Component {
    render() {
        return(
            <div>
            <div className="card" >
  <img className="card-img-top" src="https://images.performgroup.com/di/library/GOAL/b1/51/edwin-cardona-seleccion-colombiana-081217_1nkj0ukj9c6wd14o2tgwwwweto.png?t=876679160&quality=90&w=1280" alt="Card image cap" width="500" height="500"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
            </div>
        )
    }
}

export default withStyles(styles)(examen1)
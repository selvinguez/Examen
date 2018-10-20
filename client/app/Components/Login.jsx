import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
const styles = {
root:{
	margin: "0 auto",
	marginTop:'10em'
},
inputs:{ 
	background:'#EA80FC',
	textAlign: "center",
	padding:'2em'
},
button:{ 
	margin:'1em'
}
}
class Login extends React.Component {
	state = {
		fields: [
			{
				field:'mail',
				label:'Correo',
				val:'',
				idI:0
			},
			{
				field:'pass',
				label:'Contraseña',
				val:'',
				idI:1
			}
		]
	}
	handleChange = (id) => event =>{
		let arrayField = this.state.fields
		arrayField[id].val = event.target.value
		this.setState({fields: arrayField})
	}
	render() {
			const { classes } = this.props
			const MappingTextfield = p => (
				<div key={p.val + p.idI}>
					<Typography variant="headline">
						{p.label}
					</Typography>
					<TextField
					id={p.field}
					label={p.label}
					className={classes.textField}
					value={p.val}
					onChange={this.handleChange(p.idI)}
				/>
			</div>
			)
        return(
            <div className={classes.root}>
							<Grid container justify="center" alignItems="center">
								<Grid item xs={4} className={classes.inputs}>
									<Typography variant="display1">
										Iniciar Sesion 
									</Typography>
									{this.state.fields.map(MappingTextfield)}
									<Button variant="flat" className={classes.button}>
										Iniciar Sesion
									</Button>
									<Button variant="flat" className={classes.button}>
										Registrar
									</Button>
								</Grid>
							</Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Login)
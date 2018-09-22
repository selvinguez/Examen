import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
const styles = {
	root:{
		background:'#fafafa',
		margin:'0 auto',
		padding:'1em',
		marginTop:"2em",
	},
	buttonArea:{
		marginTop:'3em',
		width:'100%'
	},
	textField: {
		margin:'0.5em'
	}
}
class SignUp extends React.Component {
	state = {
		fields: [
			{
				field:'name',
				label:'Nombre',
				val:'',
				idI:0
			},
			{
				field:'apellido',
				label:'Apellido',
				val:'',
				idI:1
			},
			{
				field:'mail',
				label:'Mail',
				val:'',
				idI:2
			},
			{
				field:'edad',
				label:'Edad',
				val:'',
				idI:3
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
			<TextField
			id={p.field}
			label={p.label}
			className={classes.textField}
			value={p.val}
			key={p.val + p.idI}
			onChange={this.handleChange(p.idI)}
		/>
		)
		return(
			<div>
				<Grid container className={classes.root} xs={5} spacing={16} justify="center" >	
					<Grid item xs={12} alignItems="center">
						<Typography variant="headline">
								SignUp
						</Typography>
						{this.state.fields.map(MappingTextfield)}
						<Button className={classes.buttonArea}>
							Soy un Boton
						</Button>
					</Grid>
				</Grid>
			</div>
			)
	}
}

export default withStyles(styles)(SignUp)
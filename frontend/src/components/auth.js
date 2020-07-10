import React, { Component } from 'react';
import axios from 'axios';
export default class Auth extends Component {
    constructor(props) {
		super(props);
		this.state = {
			productos: [],
			nombre: '',
			descripcion: '',
            foto: null,
            verificado: false
		};
    }
    
    autentificar =  async () => {
        await axios.post("http://localhost:5000/api/auth")        
        .then(data => {
            console.log(data, "--------------");            
            localStorage.setItem('token', JSON.stringify(data));
            this.setState({verificado:true});
        })
        .catch(err => {
            console.log(err, "error en component auth");
        })
    }
    loadProducts() {
        if(JSON.parse(localStorage.token).data !== null){
            this.getProducts()		
		return this.state.productos.map((producto) => (
			<li>
				<div>
					<h4>{producto.nombre}</h4>
					<h6>{producto.descripcion}</h6>
					<img src={producto.foto} alt="foto" />
				</div>
			</li>
		));
        }
    }
    getProducts() {
		const token = { token: localStorage.token ? JSON.parse(localStorage.token).data : undefined };
		axios
			.post('http://localhost:5000/api/list',{token: token})
			.then((res) => {
				this.setState({ productos: res.data });
			})
			.catch((err) => {
				console.log(err, 'error en products');
			});
	}

    render(){
        return(
            <div>
                <button onClick={this.autentificar}>
                    autentificar
                </button>
                {
                    !this.state.verificado?
                    <h1>Falta Autenticar</h1>
                    :
                    <ul>{this.loadProducts()}</ul>                    
                    
                }
            </div>
        )
    }
}
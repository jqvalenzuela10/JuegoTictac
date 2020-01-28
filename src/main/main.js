import React from 'react'
import Titac from '../componente/Titac'
import Buho from '../componenteBuho/buho'
import Logo from '../imgs/logo.png'
import Load from '../imgs/spinner.gif'
import Config from '../imgs/configuration.png'
class Boton extends React.Component {

    render() {

        return (
            <div className="contenedor-boton2">
           
                    <button className="boton-jugar" onClick={this.props.click}>Jugar.io <img with="50px" height="50px" src={Logo} alt="no img" />
                    </button>
            

                <div className="contenedor-configuracion">
                    <img onClick={()=>alert('trabajando :V')} with="30px" height="30px" className="configuration" src={Config} alt="no img" />
                </div>
            </div>
        )
    }
}



class Main extends React.Component {

    constructor(props) {
        super(props)
        this.boton = <Boton click={this.load} />
        this.titac = <Titac click={this.load} />
        /*estado de mi clase */
        this.state = { etiqueta: this.boton, load: false }

    }

    cambiar = () => {


        if (this.valor) {
            this.setState({
                etiqueta: this.boton
            })
            this.valor = false
        }
        else {
            this.setState({
                etiqueta: this.titac
            })
            this.valor = true
        }
    }

    load = () => {
        this.setState({ load: true, etiqueta: null })
        const time = 1000;

        setTimeout(async () => {
            await this.setState({ load: false });
        }, time)

        setTimeout(async () => {
            this.cambiar()
        }, time)
    }



    render() {
        const load = this.state.load;
        return (

            <div className="contenedor">
                <div className="contenedor-hijo">
                    <h1 className="h1">TicTac</h1>

                    <div className="contenedor-boton"> {this.state.etiqueta}</div>
                    {load && (<img src={Load} alt="no img" />)}
                    <p className="p">by TRESDIEZ</p>
                </div>

                <Buho />

            </div>

        )
    }

}

export default Main
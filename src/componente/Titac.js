import React from 'react'

function Cuadro(props) {

    return (
        <button className="cuadrado" onClick={props.onClick}>{props.value}</button>

    )
}



class Tabla extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            cuadrado: Array(9).fill(null),
            XisNext: true
        }
    }

    handleClick(i) {
        const cuadrado = this.state.cuadrado.slice()

        if (calculateWinner(cuadrado) || cuadrado[i]) {
            return
        }

        cuadrado[i] = this.state.XisNext ? 'X' : 'O'
        this.setState({
            cuadrado: cuadrado,
            XisNext: !this.state.XisNext
        })

    }


    renderSquare(i) {
        return <Cuadro value={this.state.cuadrado[i]}
            onClick={() => this.handleClick(i)} />
    }

    render() {
        const winner = calculateWinner(this.state.cuadrado)
        let status

        if (winner) {
            status = 'winner ' + winner
        }
        else {
            status = 'Next Player' + (this.state.XisNext ? 'X' : 'O')
        }
        return (
            <div class="tabla">

                <div className="tabla-solo">
                    <div className="status">{status}</div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>

                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                <div >
                    <button onClick={this.props.click}>retroceder</button>

                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                    </div>

                </div>
            </div>
        )
    }
}


class Juego extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                cuadros: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }
    render() {


        return (

            <div className="game">
                <div className="game-board">
                    <Tabla click={this.props.click} />
                </div>

            </div>
        )
    }

}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}



export default Juego
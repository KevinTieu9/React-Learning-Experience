import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//onClick={() => console.log('click')} don't forget the "() =>"
//"state" is used to remember  an action that was performed, if a button was clicked
// state will remember it was clicked. We can do it through "this.state"

//Javascript classes always need "super" when defining a constructor of a subclass.
//constructors always start with super(props)

//this.setState will rerender the area when it is clicked

//in class Board extends React.Component, we create a constructor that outputs null
//as its initial state. So basically, it shows nothing until clicked will be making an x/o state soon

//handleclick needs to be defined otherwise the code crashes.
// square components  are no controlled components
// the state is stored in the board components and pass through to the square components
// the square components inform the board component when it is clicked.
// the board has full control the squares
// mutability is directly changing the data, immutability assigning a new variable with that data so
// the first data remains unchanged for future uses.

//function conponent
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {      
            return;    
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });  
    }


    renderSquare(i) {
      return (
              <Square 
                value ={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
              />
            );
    }
  
    render() {
        const winner = calculateWinner(this.state.squares);    
        let status;    
        if (winner) {
            status = 'Winner: ' + winner;    
        } else {      
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');    
        }
  
      return (
        <div>
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
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);

//function that calculates winner
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
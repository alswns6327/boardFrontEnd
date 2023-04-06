import React from 'react';



const SecondGame = (props) => {

    const boardInfo = props.boardInfo;



    const secondGameBoard = [];
    const secondHintGameBoard = [];

    let outListNumber = [0, 1, 2];
    let innelListNumber = [0, 1, 2];

    for(let i=0; i<9; i++){
        for(let j=0; j<3; j++){
            for(let k=0; k<3; k++){
                if(Math.random() < 0.55){
                    secondGameBoard.push(<input readOnly style={{width:'30px', height : '30px'}} value = {boardInfo[outListNumber[j]][innelListNumber[k]]}></input>)
                }else{
                    secondGameBoard.push(<input type={'text'} style={{width:'30px', height : '30px'}}></input>)
                }
            }
            secondGameBoard.push(<div style={{display : 'inline-block', height:'20px', width : '10px'}}></div>);
        }
        console.log(innelListNumber);
        outListNumber.push(outListNumber.shift());
        secondGameBoard.push(<br/>);
        if(i%3 === 2){ innelListNumber.push(innelListNumber.shift()); secondGameBoard.push(<div style={{height:'20px', width : '10px'}}></div>);}
    }

    for(let i=0; i<9; i++){
        for(let j=0; j<3; j++){
            for(let k=0; k<3; k++){
                secondHintGameBoard.push(<input readOnly style={{width:'30px', height : '30px'}} value = {boardInfo[outListNumber[j]][innelListNumber[k]]}></input>)
            }
            secondHintGameBoard.push(<div style={{display : 'inline-block', height:'20px', width : '10px'}}></div>);
        }
        console.log(innelListNumber);
        outListNumber.push(outListNumber.shift());
        secondHintGameBoard.push(<br/>);
        if(i%3 === 2){ innelListNumber.push(innelListNumber.shift()); secondHintGameBoard.push(<div style={{height:'20px', width : '10px'}}></div>);}
    }

    return (
        <div>
            <br/><br/>
            {secondGameBoard}
            <br/>
            <br/>
            <hr/>
            {secondHintGameBoard}
        </div>
    );
};

export default SecondGame;
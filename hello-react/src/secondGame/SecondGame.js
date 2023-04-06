import React, { useRef } from 'react';
import SecondGameBoard from '../secondGame/SecondGameBoard';

const SecondGame = () => {

    function makeSecondGame(){
        const secondGameNumberList = [];
        let number = 0;
        while(secondGameNumberList.length < 9){
            number = Math.floor(Math.random() * 9) + 1;
            if(!secondGameNumberList.includes(number)){
            secondGameNumberList.push(number);
            }
        }
        let secondSubNumberList = [];
        for(let i=0; i<9; i++){
            secondSubNumberList.push(secondGameNumberList.shift());
            if(i%3 === 2){
            secondGameNumberList.push(secondSubNumberList);
            secondSubNumberList = [];
            }
        }

        return secondGameNumberList;
    }
    const secondGameNumberList = makeSecondGame();
    return (
        <div>
            <SecondGameBoard boardInfo = {secondGameNumberList}></SecondGameBoard>
        </div>
    );
};

export default SecondGame;
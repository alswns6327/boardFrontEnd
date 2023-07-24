import React, { useEffect, useRef, useState } from 'react';
import '../styles/FirstGame.css';


const FirstGameBoard = (props) => {
    
    const [checkCell, setCheckCell] = useState(Array.from({length: (props.boardInfo.playCellCnt*props.boardInfo.playCellCnt)}, () => false));

    const prePlayCellCnt = useRef(props.boardInfo.playCellCnt);

    if(prePlayCellCnt.current !== props.boardInfo.playCellCnt){
        setCheckCell(Array.from({length: (props.boardInfo.playCellCnt*props.boardInfo.playCellCnt)}, () => false))
        prePlayCellCnt.current = props.boardInfo.playCellCnt;
    }
    
    // console.log(props.boardInfo.x);
    // console.log(props.boardInfo.y);
    // console.log(checkCell[0]);

    useEffect(() => {
        let checkCnt = 0;
        let checkXCnt = 0;
        let checkYCnt = 0;
        for(let i=0; i<props.boardInfo.playCellCnt; i++){
            for(let j=0; j<props.boardInfo.playCellCnt; j++){
                if(checkCell[i+(j*props.boardInfo.playCellCnt)]){
                    checkXCnt++;
                }
                if((!checkCell[i+(j*props.boardInfo.playCellCnt)] && checkXCnt > 0)){

                }
            }
        }
        
        for(let i=0; i<props.boardInfo.y.yValues.length; i++){
            for(let j=0; j<props.boardInfo.playCellCnt; j++){
                console.log(checkCell[j+(i*props.boardInfo.playCellCnt)]);
            }
        }

    }, [checkCell]);

    

    let xCells = [];
    let boardCells = [];
    for(let i=props.boardInfo.x.xMaxLength-1; i>=0; i--){
        for(let j=0; j<props.boardInfo.y.yMaxLength; j++){
            xCells.push(<button className='trashCell'>.</button>);
        }
        for(let j=0; j<props.boardInfo.playCellCnt; j++){
            if(props.boardInfo.x.xValues[j][i]){
                xCells.push(<button className='cell'>{props.boardInfo.x.xValues[j][i]}</button>);
            }else{
                xCells.push(<button className='trashCell'>x</button>);
            }
        }
        xCells.push(<br/>);
    }
    
    for(let i=0; i<props.boardInfo.playCellCnt; i++){
        for(let j=props.boardInfo.y.yMaxLength-1; j>=0; j--){
            if(props.boardInfo.y.yValues[i][j]){
                boardCells.push(<button className='cell'>{props.boardInfo.y.yValues[i][j]}</button>);
            }else{
                boardCells.push(<button className='trashCell'>.</button>);
            }
        }

        for(let j=i*props.boardInfo.playCellCnt; j<i*props.boardInfo.playCellCnt + props.boardInfo.playCellCnt; j++){
            boardCells.push(<button 
                                name ={props.boardInfo.firstGameCellValue[j].cellnum} 
                                className='cell' 
                                style={{backgroundColor : checkCell[j] ? 'black' : 'white', color : checkCell[j] ? 'black' : 'white'}}
                                value={j}
                                onClick={(e)=>{setCheckCell(
                                    checkCell.map((val, index)=>
                                        index === parseInt(e.target.value) ? !val : val
                                    )
                                );
                                }}
                                >.
                            </button>);
        }
        boardCells.push(<br/>);
    }

    let hint = []
    for(let i=0; i<props.boardInfo.playCellCnt; i++){
        for(let j=props.boardInfo.y.yMaxLength-1; j>=0; j--){
            
            hint.push(<button className='trashCell'>.</button>);
            
        }

        for(let j=i*props.boardInfo.playCellCnt; j<i*props.boardInfo.playCellCnt + props.boardInfo.playCellCnt; j++){
            hint.push(<button 
                            className='cell' 
                            style={{backgroundColor : props.boardInfo.firstGameCellValue[j].cellValue ? 'black' : 'white', color : props.boardInfo.firstGameCellValue[j].cellValue ? 'black' : 'white'}}
                            
                            >.
                        </button>);
        }
        hint.push(<br/>);
    }

    return (
        <div className='FirstGame'>
            
            <br/><br/>
            {xCells}
            {boardCells}
            <br/>
            {hint}
        </div>
    );
};

export default FirstGameBoard;
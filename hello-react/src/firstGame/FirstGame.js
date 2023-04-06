/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useRef, useState } from 'react';
import FirstGameBoard from '../firstGame/FirstGameBoard';


const firstGame = () => {

  const playCellCntInput = useRef(null);
  const [playCellCnt, setPlayCellCnt]= useState(5);
  let makeFirstGame = useCallback(()=>{
    let firstGameCellValue = [];
    let x = {xMaxLength : 0, xValues : []};
    let y = {yMaxLength : 0, yValues : []};
    for(let i=0; i<playCellCnt**2; i++){
      if(Math.random() < 0.65){
        firstGameCellValue.push(
          {
            cellValue : true
            ,cellNum : (i%playCellCnt + 1) +''+ parseInt(i/playCellCnt + 1)
          }
        );
      }else{
        firstGameCellValue.push(
          {
            cellValue : false
            ,cellNum : (i%playCellCnt + 1) +''+ parseInt(i/playCellCnt + 1)
          }
        );
      }
    }
    let yTrueCheck = [];
    let yTrueCnt = 0;
    let yMaxLength = 0;
    
    let xTrueCheck = [];
    let xTrueCnt = 0;
    let xMaxLength = 0;
    for(let i=0; i<firstGameCellValue.length; i++){
      
      // 행 true 카운트
      if(firstGameCellValue[i].cellValue){
        yTrueCnt++;
        if(i%playCellCnt===playCellCnt-1) yTrueCheck.push(yTrueCnt);
      }else if(yTrueCnt > 0){
        yTrueCheck.push(yTrueCnt);
        yTrueCnt = 0;
      }
      if(i%playCellCnt===playCellCnt-1){
        if(yTrueCheck.length >= yMaxLength) yMaxLength = yTrueCheck.length;

        y.yValues.push(
          yTrueCheck
        );
        y.yMaxLength = yMaxLength;
        yTrueCheck = [];
        yTrueCnt = 0;
      }

      // 열 true 카운트
      if(firstGameCellValue[(i%playCellCnt) * playCellCnt + parseInt(i/playCellCnt)].cellValue){
        xTrueCnt++;
        if(i%playCellCnt===playCellCnt-1) xTrueCheck.push(xTrueCnt);
      }else if(xTrueCnt > 0){
        xTrueCheck.push(xTrueCnt);
        xTrueCnt = 0;
      }
      if(i%playCellCnt===playCellCnt-1){
        if(xTrueCheck.length >= xMaxLength) xMaxLength = xTrueCheck.length;

        x.xValues.push(
          xTrueCheck
        );
        x.xMaxLength = xMaxLength;
        xTrueCheck = [];
        xTrueCnt = 0;
      }
    }
    
    let board = [];
    board.push();
    return {firstGameCellValue : firstGameCellValue, x : x, y : y, playCellCnt : playCellCnt};
  }, [playCellCnt]);
  
  

  const firstGameboardInfo = makeFirstGame();

    return (
        <>
            <span>게임판 크기</span>
            <input ref={playCellCntInput} onKeyUp={()=>{
                if (window.event.keyCode === 13) setPlayCellCnt(parseInt(playCellCntInput.current.value));
                }}></input>
            <button onClick={()=>{
                setPlayCellCnt(parseInt(playCellCntInput.current.value));
                }}>초기화</button>
            <FirstGameBoard 
                boardInfo = {firstGameboardInfo}
                >
            </FirstGameBoard>
        </>
    );
};

export default firstGame;
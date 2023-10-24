import {useContext, useEffect} from 'react';


import CanvasContext from './CanvasContext';

const TILE_SIZE =32;
const Grid = ({width, height, children}) => {
    const ctx = useContext(CanvasContext);
    useEffect(() => {
        for(let i= 0; i<height; i++){
            const y = i* TILE_SIZE;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        for(let i =0; i<width; i++){
            const x= i*TILE_SIZE;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
    }, [ctx, height, width]);
    return (
        <>
        <canvas
            ref ={ctx}
            />
        </>
    );
}

export default Grid;
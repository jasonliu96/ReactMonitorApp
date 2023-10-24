import React, {useEffect, useRef} from 'react';

const Test = () => {
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const gridSize = 36;
        const cellSize = 50;
        const imageWidth =100;
        const imageHeight=100;

        const image = new Image();
        image.src = process.env.PUBLIC_URL + '/assets/coalRoad.jpg';
        image.onload = drawGrid;

        function drawGrid(){
            canvas.width = gridSize*cellSize;
            canvas.height = gridSize*cellSize;
            for(let row=0; row<gridSize; row++){
                for(let col =0; col<gridSize; col++){
                    const x = col*cellSize;
                    const y = row*cellSize;
                    ctx.drawImage(image, x, y, imageWidth, imageHeight);
                }
            }
            
            ctx. strokeStyle = '#000';
            ctx.lineWidth =1;
            for(let col =0; col<=gridSize; col++){
                const x = col*cellSize;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for(let row =0; row<gridSize; row++){
                const y= row*cellSize;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();

            }
        }
        return () => {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [])

    return(
        <div>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <h1>h</h1>
            <p>hello test component</p>
            <canvas ref={canvasRef}/>
        </div>
    )
}


export default Test;
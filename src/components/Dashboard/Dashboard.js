import React, { useRef, useState, useEffect } from 'react'
import Map from './Map'
import Details from './Details'
import Box from '@mui/material/Box';
import CanvasContext from './CanvasContext';

const Dashboard = ({children}) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx ] = useState(null);
  const width = 320;
  const height = 320;

  useEffect(()=>{
    setCtx(canvasRef.current.getContext('2d'))
  })
  return(
    <CanvasContext.Provider value={ctx}>
      <canvas
      ref = {canvasRef}
      width = {width}
      height = {height}
      />
      {children}
    </CanvasContext.Provider>
  )
}
export default Dashboard;
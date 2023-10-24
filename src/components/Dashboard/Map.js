import React, { useContext, useState, useEffect, useRef, Component } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from './Grid';
import CanvasContext from './CanvasContext';

function Map() {
  const width = 35*32; 
  const height = 20*32;
  const ctx = useContext(CanvasContext);
  useEffect(()=>{
    return() => {
      return() => ctx && ctx.clearRect(0, 0, ctx.width, ctx.height);
    }
  }, [ctx])

  return (
        <Paper sx={{width:'70%', height:'70vh'}}>
          {/* <CanvasContext.Provider value ={ctx}>
            <canvas
            ref={canvasRef}
            width={10}
            height={10}
            />
            {children}
            </CanvasContext.Provider> */}
            <Grid width={width} height={height}>
            </Grid>
        </Paper>
    ) 
}

export default Map;
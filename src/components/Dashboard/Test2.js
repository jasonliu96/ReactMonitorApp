import { Button } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import TileMap from '../Dashboard/Map/TileMap';
const Test2 = () => {
  const fetchAPI = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://sd2.liftians.com:8090/mapdata', true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        // The request was successful, and you can handle the response data here.
        const responseData = JSON.parse(xhr.responseText);
        console.log(responseData);
      } else {
        // Handle errors here, e.g., display an error message to the user.
        console.error('Request failed with status:', xhr.status);
      }
    };

    xhr.send();
  };

  const tileMap = {
    background: [
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 2, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1],
    ],
    foreground: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 3, 0, 3, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  };

  return (
    <div>
      <Button onClick={fetchAPI}>click here </Button>
      <TileMap mapData={tileMap} />
    </div>
  );
};

export default Test2;

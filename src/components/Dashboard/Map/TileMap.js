import React from 'react';

const Tile = ({ type }) => {
  const imagePath = process.env.PUBLIC_URL + `/assets/tile${type}.png`;
  const tileStyle = {
    width: '40px', // Set the desired width
    height: '40px', // Set the desired height
  };
  return (
    <img
      src={imagePath}
      alt={`Tile ${type}`}
      className='tile'
      style={tileStyle}
    />
  );
};

const TileMap = ({ mapData }) => {
  return (
    <div className='tile-map'>
      <div className='tile-layer background'>
        {mapData.background.map((row, rowIndex) => (
          <div key={rowIndex} className='tile-row'>
            {row.map((tile, colIndex) => (
              <Tile key={colIndex} type={tile} />
            ))}
          </div>
        ))}
      </div>
      <div className='tile-layer foreground'>
        {mapData.foreground.map((row, rowIndex) => (
          <div key={rowIndex} className='tile-row'>
            {row.map((tile, colIndex) => (
              <Tile key={colIndex} type={tile} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TileMap;

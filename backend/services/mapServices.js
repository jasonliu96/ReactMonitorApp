const db = require('./db');

async function buildMap(){
    const R = 36, C = 20;
    const val = -11;    
    const arr = Array.from({ length: R }, () => Array.from({ length: C }, () => val));

    const result = await db.query('SELECT X_Cord, Y_Cord, GridTypeID FROM Liftman_TheFeed.InitWarehouseMap;', null);
    for(entry of result){
        const {X_Cord, Y_Cord, GridTypeID} = entry; 
        arr[X_Cord/1000][Y_Cord/1000] = GridTypeID;
    }
    return arr;
}

async function buildPodMap(){
    const R = 36, C = 20;
    const val = -11;    
    const arr = Array.from({ length: R }, () => Array.from({ length: C }, () => val));
    const result = await db.query('SELECT * FROM Liftman_TheFeed.InitPodMap;', null);
    for(entry of result){
        const {X_Cord, Y_Cord, PODID} = entry; 
        arr[X_Cord/1000][Y_Cord/1000] = PODID;
    }
    return arr;
}
module.exports = {
    buildMap, buildPodMap
}
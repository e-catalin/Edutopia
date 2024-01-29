import Tile from './Tile';

class PlayerObject{

    constructor(playerId) {
        this.playerId = playerId;
        this.liveStatus = true;
        this.techPoints = 100; // Points
        this.foodPoints = 100;
        this.woodPoints = 100;
        this.metalPoints = 100;
        // A list of tile objects
        this.ownedTiles = [];
    }

    // Return Player ID For checks
    get getPlayerID(){return this.player_id;}

    // Get Methods for resource points
    get getTechPoints(){return this.techPoints;}
    get getFoodPoints(){return this.foodPoints;}
    get getWoodPoints(){return this.woodPoints;}
    get getMetalPoints(){return this.metalPoints;}

    get getOwnedTiles(){return this.ownedTiles;}

    // Checks for eliminating players
    get getLiveStatus(){return this.alive}

    // Set Methods for resource points
    set setTechPoints(setPoints){this.techPoints = setPoints;}
    set setFoodPoints(setPoints){this.foodPoints = setPoints;}
    set setWoodPoints(setPoints){this.woodPoints = setPoints;}
    set setMetalPoints(setPoints){this.metalPoints = setPoints;}

    set setOwnedTiles(ownedTiles){this.ownedTiles = ownedTiles;}

    set setLiveStatus(status){this.alive = status;}

    // Methods for checking resources generated per turn

    // 
}

export default PlayerObject;
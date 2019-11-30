/*
NIDE BUILD INFO:
  dir: dev
  target: main.js
  files: 8
*/



// file: main.js

IMPORT("ToolType");
IMPORT("EntityState");
IMPORT("ScalesRPG");
IMPORT("ThirstLib");




// file: fma_api.js

//Welcome to Hell...


/*examples:
Stick -> Diamond x2
Grindstone.addRecipe([280, 0], [264, 2, 0]);

//Usage in tile

var recipe = Grindstone.getRecipe(slotInput.id, slotInput.data);
if(recipe){
alert(recipe);

*/
var Grindstone = { 
list: {}, 
addRecipe: function(input, output){ 
this.list[input[0]+":"+input[1]] = output 
}, 
getResultForRecipe: function(id, data){ 
return this.list[id+":"+data]; 
} 
};



// file: blocks.js

IDRegistry.genBlockID("mining_chute");
Block.createBlockWithRotation("mining_chute", [{"name":"Mining Chute","texture":[["planks",0]],"inCreative":true}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 1/16, 16/16, "planks", 0);
model.addBox(0/16, 1/16, 14/16, 16/16, 2/16, 15/16, "planks", 0);
model.addBox(0/16, 1/16, 12/16, 16/16, 3/16, 13/16, "planks", 0);
model.addBox(0/16, 1/16, 10/16, 16/16, 4/16, 11/16, "planks", 0);
model.addBox(0/16, 1/16, 8/16, 16/16, 5/16, 9/16, "planks", 0);
model.addBox(0/16, 1/16, 6/16, 16/16, 6/16, 7/16, "planks", 0);
model.addBox(0/16, 1/16, 4/16, 16/16, 7/16, 5/16, "planks", 0);
model.addBox(0/16, 1/16, 2/16, 16/16, 8/16, 3/16, "planks", 0);
model.addBox(0/16, 1/16, 0/16, 16/16, 9/16, 1/16, "planks", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mining_chute, -1, render);

Block.setBlockShape(BlockID.mining_chute, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});


Block.registerDropFunction(31, function(){ 
    if(Player.getCarriedItem().id == ItemID.stone_knife && Math.random()<=0.8){return [[ItemID.sheaf, 1,0]];
  } 
});

IDRegistry.genBlockID("mow")
Block.createBlock("mow", [{"name":"Mow", "texture":[["mow",0]],"inCreative":true}]);

IDRegistry.genBlockID("rockblock");
Block.createBlock("rockblock", [{"name":"Rock","texture":[["rockblock",0]],"inCreative":false}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(4/16, 0/16, 3/16, 13/16, 1/16, 13/16, "rockblock", 0);
model.addBox(5/16, 0/16, 2/16, 12/16, 1/16, 3/16, "rockblock", 0);
model.addBox(3/16, 0/16, 5/16, 4/16, 1/16, 11/16, "rockblock", 0);
model.addBox(5/16, 0/16, 13/16, 10/16, 1/16, 14/16, "rockblock", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.custom, -1, render);

Block.setBlockShape(BlockID.rockblock, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

Block.registerDropFunction(BlockID.rockblock, function(){ 
    if(Math.random()<=1){return [[ItemID.rock, 1,0]];
  } 
});

Block.registerDropFunction(106, function(){ 
    if(Math.random()<=0.8){return [[106, 1,0]];
  } 
});

IDRegistry.genBlockID("stickblock");
Block.createBlock("stickblock", [{"name":"Stick Block","texture":[["sticks",0]],"inCreative": false}]);
Block.registerDropFunction(BlockID.stickblock, function(){ 
    if(Math.random()<=1){return [[280, 1,0]];
  } 
});
Block.setBlockShape(BlockID.stickblock, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

Block.registerDropFunction(18, function(){ 
    if(Math.random()<=0.5){return [[280, 1,0]];
  } 
});

Block.registerDropFunction(17, function(){ 
    if(Math.random()<=0.5){return [[5, 1,0]];
  } 
});





// file: items.js

IDRegistry.genItemID("rock");
Item.createItem("rock", "Rock", {name: "rock", meta: 0}, {}); 

IDRegistry.genItemID("sheaf");
Item.createItem("sheaf", "Sheaf", {name: "sheaf", meta: 0}, {});





// file: tools.js

//Stone Knife
IDRegistry.genItemID("stone_knife");
Item.createItem("stone_knife", "Stone Knife", {name: "stone_knife", meta: 0, stack: 1}, {}); 

ToolAPI.addToolMaterial("stonek", {
    durability: 60,
    level: 1,
    efficiency: 5,
    damage: 1,
    enchantability: 14
});
ToolAPI.setTool(ItemID["stone_knife"], "stonek");




// file: recipes.js

//removed Recipes

Callback.addCallback("PostLoaded", function(){
  if(!__config__.getBool("enable_vannila_tools")){
    for(let i = 267; i<=287; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 290; i<=294; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 306; i<=317; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    Recipes.deleteRecipe({id: 256, count: 1, data: 0});
    Recipes.deleteRecipe({id: 257, count: 1, data: 0});
    Recipes.deleteRecipe({id: 258, count: 1, data: 0});
  }
  Recipes.deleteRecipe({id: 5, count: 4, data: 0});
  Recipes.deleteRecipe({id: 5, count: 4, data: 1});
  Recipes.deleteRecipe({id: 5, count: 4, data: 2});
  Recipes.deleteRecipe({id: 5, count: 4, data: 3});
  Recipes.deleteRecipe({id: 5, count: 4, data: 4});
  Recipes.deleteRecipe({id: 5, count: 4, data: 5});
  Recipes.deleteRecipe({id: 5, count: 4, data: 0})
  for(let i = 0; i<5; i++){
    Recipes.deleteRecipe({id: 5, count: 4, data: i});
  }
});

//suck my desk


Recipes.addShaped({id: ItemID.stone_knife, count: 1, data: 0}, [

     "xyy",

     "yiy",

     "yyz"

], ['z', 280, 0, 'x', ItemID.rock, 0, 'i', 106, 0]);

Recipes.addShaped({id: BlockID.mow, count: 1, data: 0}, [

     "xx",

     "xx",

     ""

], ['x', ItemID.sheaf, 0]);












// file: worldgeneration.js

var rock = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in rock ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.rockblock, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});

var stick = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in stick ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.stickblock, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});



// file: grindstone/grindstone.js

IDRegistry.genBlockID("grindstone");
Block.createBlock("grindstone", [{"name":"Grindstone","texture":[["stone",0]],"inCreative":true}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(6/16, 0/16, 1/16, 10/16, 10/16, 4/16, "logvinov", 0);
model.addBox(6/16, 0/16, 12/16, 10/16, 10/16, 15/16, "logvinov", 0);
model.addBox(7/16, 7/16, 0/16, 9/16, 8/16, 16/16, "planks", 0);
model.addBox(3/16, 3/16, 5/16, 13/16, 12/16, 11/16, "stone", 0);
model.addBox(2/16, 4/16, 5/16, 3/16, 11/16, 11/16, "stone", 0);
model.addBox(4/16, 12/16, 5/16, 12/16, 13/16, 11/16, "stone", 0);
model.addBox(4/16, 2/16, 5/16, 12/16, 3/16, 11/16, "stone", 0);
model.addBox(13/16, 4/16, 5/16, 14/16, 11/16, 11/16, "stone", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.grindstone, -1, render);

Block.setBlockShape(BlockID.grindstone, {"x":0.125,"y":0,"z":0}, {"x":0.875,"y":0.8125,"z":1});

var guiGrindstone = new UI.StandartWindow({
standart:
{
        header:
        {
            text: { text: "Grindstone / Точильный камень"},
        },
        inventory: {standart: true},
        background: {standart: true},
        minHeight: 500,
},
params:
{
},
drawing:
[
],
elements:
{
    "progressScale":
    {
        type: "scale",
        x: 578,
        y: 219,
        scale: 3,
        bitmap: "furnace_bar_scale",
        invert: false,
        direction: 0,
        overlay: "furnace_bar_backgroun",
        overlay_scale: 3,
        overlayOffset: { x:0 , y: 0},
    },
    "slotInput":
    {
        type: "slot",
        x: 466,
        y: 210,
        size: 60,
    },
    "slotOutput":
    {
        type: "slot",
        x: 707,
        y: 211,
        size: 60,
    },
}
});

TileEntity.registerPrototype(BlockID.grindstone, {
  getGuiScreen: function(){
    return guiGrindstone;
  tick: function(){
  var recipe = Grindstone.getResultForRecipe(slotInput.id, slotInput.data); 
if(recipe){
    setSlot("slotOutput", result[0], result[1], result[2]); 
};
}; 
},  
});
Callback.addCallback("PostLoaded", function(){
    Grindstone.addRecipe([280, 0], [264, 2, 0]);
}); 
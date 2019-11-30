
//Stone Knife
IDRegistry.genItemID("stone_knife");
Item.createItem("stone_knife", "Stone Knife", {name: "stone_knife", meta: 0}, {stack: 1}); 

ToolAPI.registerTool(ItemID.stone_knife, {level: 3, durability: 30, damage: 1}, ["stone"]);

//Stone Sharpened

IDRegistry.genItemID("stone_sharpened_knife");
Item.createItem("stone_sharpened_knife", "Stone Sharpened Knife", {name: "stone_sharpened_knife", meta: 0}, {stack: 1});

ToolAPI.registerTool(ItemID.stone_sharpened_knife, {level: 3, durability: 120, damage: 3}, ["stone"]);



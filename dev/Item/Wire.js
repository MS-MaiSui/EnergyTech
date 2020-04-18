Block.createSpecialType({
    base:35,
    opaque:false,
    destroytime:1
},"wire");

Item.registerUseFunctionForID(171,function(coords,item,block){
    if(Machine.isWire(block.id) && item.data == 15 && block.data == 0){
        Game.prevent();
        World.setBlock(coords.x,coords.y,coords.z,block.id,1);
        Player.decreaseCarriedItem(1);
    }
});

Callback.addCallback("DestroyBlockStart",function(coords,block){
    var item = Player.getCarriedItem();
    if(Machine.isWire(block.id) && Tool.isTool(item.id,"Cutter")){
        Block.setTempDestroyTime(block.id,0);
        SoundAPI.playSound("tool/wrench.ogg");
        ToolAPI.breakCarriedTool(4);
    }
});

// 锡导线
IDRegistry.genItemID("wireTin");
Item.createItem("wireTin","Tin Coil",{name:"tin_wire"});

IDRegistry.genBlockID("wireTin");
Block.createBlock("wireTin",[
    {name:"Tin Coil",texture:[["tin_wire",0]],inCreative:false},
    {name:"Tin Coil",texture:[["tin_wire",1]],inCreative:false}
],"wire");

Machine.registerWire(BlockID.wireTin,power(1));
Machine.registerWirePlacedCallback("wireTin",BlockID.wireTin,0);
TileRenderer.setupWireModel(BlockID.wireTin,0,0.25,"et-wire");
TileRenderer.setupWireModel(BlockID.wireTin,1,0.3125,"et-wire");
Item.addTooltip(ItemID.wireTin,Translation.translate("Max Voltage: ") + power(1) + "EU/t");

Block.registerDropFunction("wireTin",function(coords,id,data){
    if(data == 1){
        return [[ItemID.wireTin,1,0],[171,1,15]];
    }
    return [[ItemID.wireTin,1,0]];
});

// 铜导线
IDRegistry.genItemID("wireCopper");
Item.createItem("wireCopper","Copper Coil",{name:"copper_wire"});

IDRegistry.genBlockID("wireCopper");
Block.createBlock("wireCopper",[
    {name:"Copper Coil",texture:[["copper_wire",0]],inCreative:false},
    {name:"Copper Coil",texture:[["copper_wire",1]],inCreative:false}
],"wire");

Machine.registerWire(BlockID.wireCopper,power(2));
Machine.registerWirePlacedCallback("wireCopper",BlockID.wireCopper,0);
TileRenderer.setupWireModel(BlockID.wireCopper,0,0.25,"et-wire");
TileRenderer.setupWireModel(BlockID.wireCopper,1,0.3125,"et-wire");
Item.addTooltip(ItemID.wireCopper,Translation.translate("Max Voltage: ") + power(2) + "EU/t");

Block.registerDropFunction("wireCopper",function(coords,id,data){
    if(data == 1){
        return [[ItemID.wireCopper,1,0],[171,1,15]];
    }
    return [[ItemID.wireCopper,1,0]];
});

// 金导线
IDRegistry.genItemID("wireGold");
Item.createItem("wireGold","Gold Coil",{name:"gold_wire"});

IDRegistry.genBlockID("wireGold");
Block.createBlock("wireGold",[
    {name:"Gold Coil",texture:[["gold_wire",0]],inCreative:false},
    {name:"Gold Coil",texture:[["gold_wire",1]],inCreative:false}
],"wire");

Machine.registerWire(BlockID.wireGold,power(3));
Machine.registerWirePlacedCallback("wireGold",BlockID.wireGold,0);
TileRenderer.setupWireModel(BlockID.wireGold,0,0.375,"et-wire");
TileRenderer.setupWireModel(BlockID.wireGold,1,0.4375,"et-wire");
Item.addTooltip(ItemID.wireGold,Translation.translate("Max Voltage: ") + power(3) + "EU/t");

Block.registerDropFunction("wireGold",function(coords,id,data){
    if(data == 1){
        return [[ItemID.wireGold,1,0],[171,1,15]];
    }
    return [[ItemID.wireGold,1,0]];
});

// 钢导线
IDRegistry.genItemID("wireSteel");
Item.createItem("wireSteel","Steel Coil",{name:"steel_wire"});

IDRegistry.genBlockID("wireSteel");
Block.createBlock("wireSteel",[
    {name:"Steel Coil",texture:[["steel_wire",0]],inCreative:false},
    {name:"Steel Coil",texture:[["steel_wire",1]],inCreative:false}
],"wire");

Machine.registerWire(BlockID.wireSteel,power(4));
Machine.registerWirePlacedCallback("wireSteel",BlockID.wireSteel,0);
TileRenderer.setupWireModel(BlockID.wireSteel,0,0.375,"et-wire");
TileRenderer.setupWireModel(BlockID.wireSteel,1,0.4375,"et-wire");
Item.addTooltip(ItemID.wireSteel,Translation.translate("Max Voltage: ") + power(4) + "EU/t");

Block.registerDropFunction("wireSteel",function(coords,id,data){
    if(data == 1){
        return [[ItemID.wireSteel,1,0],[171,1,15]];
    }
    return [[ItemID.wireSteel,1,0]];
});

// 钨导线
IDRegistry.genItemID("wireTungsten");
Item.createItem("wireTungsten","Tungsten Coil",{name:"tungsten_wire"});

IDRegistry.genBlockID("wireTungsten");
Block.createBlock("wireTungsten",[
    {name:"Tungsten Coil",texture:[["tungsten_wire",0]],inCreative:false},
    {name:"Tungsten Coil",texture:[["tungsten_wire",1]],inCreative:false}
],"wire");

Machine.registerWire(BlockID.wireTungsten,power(5));
Machine.registerWirePlacedCallback("wireTungsten",BlockID.wireTungsten,0);
TileRenderer.setupWireModel(BlockID.wireTungsten,0,0.5,"et-wire");
TileRenderer.setupWireModel(BlockID.wireTungsten,1,0.5625,"et-wire");
Item.addTooltip(ItemID.wireTungsten,Translation.translate("Max Voltage: ") + power(5) + "EU/t");

Block.registerDropFunction("wireTungsten",function(coords,id,data){
    if(data == 1){
        return [[ItemID.wireTungsten,1,0],[171,1,15]];
    }
    return [[ItemID.wireTungsten,1,0]];
});

Callback.addCallback("PreLoaded",function(){
    Item.addCreativeGroup("ET-Wire",Translation.translate("Wire"),[
        ItemID.wireTin     ,
        ItemID.wireCopper  ,
        ItemID.wireGold    ,
        ItemID.wireSteel   ,
        ItemID.wireTungsten
    ]);

    Recipe.addWiremillRecipe({id:ItemID.plateTin     ,count:1,data:0},{id:ItemID.wireTin     ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateCopper  ,count:1,data:0},{id:ItemID.wireCopper  ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateGold    ,count:1,data:0},{id:ItemID.wireGold    ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateSteel   ,count:1,data:0},{id:ItemID.wireSteel   ,count:1,data:0});
    Recipe.addWiremillRecipe({id:ItemID.plateTungsten,count:1,data:0},{id:ItemID.wireTungsten,count:1,data:0});

    Recipes.addShaped({id:ItemID.wireTin     ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTin     ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireCopper  ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickCopper  ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireGold    ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickGold    ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireSteel   ,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickSteel   ,0,"b",5,-1]);
    Recipes.addShaped({id:ItemID.wireTungsten,count:2,data:0},[" a ","aba"," a "],["a",ItemID.stickTungsten,0,"b",5,-1]);
});
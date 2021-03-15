// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003010101020202010101010201010101010102010101020202010202010101010101020102020201020101010101010101010201010201020101020201010101010202010202010202010102020101010202010101010102020101010201010101010101020202010101010102020201010202010101010101010101020101010202010101010101010202020101020102010102010202020201010101020201020101020102010102010202020202010202020201020101020101010101010101020201010202010201010101020201010101020101020102010101020201010101010201010201020101020201010101010101010102010101010201010104`, img`
. . . . 2 2 2 . . . . 2 . . . . 
. . 2 . . . 2 2 2 . 2 2 . . . . 
. . 2 . 2 2 2 . 2 . . . . . . . 
. . 2 . . 2 . 2 . . 2 2 . . . . 
. 2 2 . 2 2 . 2 2 . . 2 2 . . . 
2 2 . . . . . 2 2 . . . 2 . . . 
. . . . 2 2 2 . . . . . 2 2 2 . 
. 2 2 . . . . . . . . . 2 . . . 
2 2 . . . . . . . 2 2 2 . . 2 . 
2 . . 2 . 2 2 2 2 . . . . 2 2 . 
2 . . 2 . 2 . . 2 . 2 2 2 2 2 . 
2 2 2 2 . 2 . . 2 . . . . . . . 
. 2 2 . . 2 2 . 2 . . . . 2 2 . 
. . . 2 . . 2 . 2 . . . 2 2 . . 
. . . 2 . . 2 . 2 . . 2 2 . . . 
. . . . . . 2 . . . . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tileGrass3,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

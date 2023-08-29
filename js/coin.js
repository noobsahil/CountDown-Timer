AFRAME.registerComponent("coin", {
    init: function(){
        for (var i=0; i<20; i++){
            var id = `coin${i}`;

            var posX = (Math.random()*50+(-25));
            var posY = (Math.random()*50+(-25));
            var posZ = (Math.random()*7.5+(72.5));
            var position = {x:posX, y:posY, z:posZ};

            this.create_coins(id, position);
        }
    },
    create_coins(id, position){
        var terrain = document.querySelector("#terrain");

        var coin = document.createElement("a-entity");
        coin.setAttribute("id", id);
        coin.setAttribute("position", position);

        coin.setAttribute("rotation", {x:180, y:0, z:0});
        coin.setAttribute("animation", {
            property: "rotation",
            to: "180 0 360",
            loop: "true",
            easing: "linear",
            dur: 5000,
        });

        var scale = 0.125;
        coin.setAttribute("scale", {x:scale, y:scale, z:scale});

        coin.setAttribute("gltf-model", "./assets/Fish_Coin/Fish Coin.glb");

        coin.setAttribute("body", {type: "static", shape:"sphere"})
        /*coin.setAttribute("shape", {
            radiusTop: 22.5,
            radiusBottom: 22.5,
            height: 7.5,
            offset: "0 2 0"
        });*/
        coin.setAttribute("game-play", {elementId: `#${id}`})

        terrain.appendChild(coin);
    }
});
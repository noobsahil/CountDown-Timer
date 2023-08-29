AFRAME.registerComponent("fish", {
    init: function(){
        for (var i=0; i<15; i++){
            var id = `fish${i}`;

            var posX = (Math.random()*50+(-25));
            var posY = (Math.random()*50+(-25));
            var posZ = (Math.random()*7.5+(72.5));
            var position = {x:posX, y:posY, z:posZ};

            this.create_fishes(id, position);
        }
    },
    create_fishes(id, position){
        var terrain = document.querySelector("#terrain");

        var fish = document.createElement("a-entity");
        fish.setAttribute("id", id);
        fish.setAttribute("position", position);
        fish.setAttribute("rotation", {x: 180, y: 0, z: (Math.random()*360)})

        var scale = 7.5;
        fish.setAttribute("scale", {x:scale, y:scale, z:scale});

        fish.setAttribute("gltf-model", "./assets/Fish/fish2.glb");
        fish.setAttribute("animation-mixer", {});

        fish.setAttribute("body", {type: "static", shape:"none"})
        fish.setAttribute("shape__main", {
            shape: "cylinder",
            radiusTop: 0.25,
            radiusBottom: 0.25,
            height: 0.75,
            offset: "0 0.3 0"
        });
        fish.setAttribute("game-play", {elementId: `#${id}`})

        terrain.appendChild(fish)
    }
});
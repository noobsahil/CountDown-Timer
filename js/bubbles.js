AFRAME.registerComponent("bubbles", {
    schema:{
        model_obj: {type:"string", default:"./assets/Bubbles/tinker.obj"},
        model_mtl: {type:"string", default:"./assets/Bubbles/obj.mtl"},
    },
    init: function(){
        this.el.setAttribute("obj-model", {
            obj: this.data.model_obj,
            mtl: this.data.model_mtl
        });

        var scale = 0.0625;
        this.el.setAttribute("scale", { x: scale, y: scale, z:scale });
    }
});

AFRAME.registerComponent("rotate-bubbles", {
    schema:{
        position: {type:"number", default:0}
    },
    init: function(){
        this.data.position = this.el.getAttribute("position");
        var pos = this.data.position;
        window.document.addEventListener("keydown", (e)=>{
            if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft"){
                if (pos.x > -2){
                    pos.x-= 0.1;
                }
            }
            if (e.key === "d" || e.key === "D" || e.key === "ArrowRight"){
                if (pos.x < 2){
                    pos.x+= 0.1;
                }
            }
        });
    },
    tick: function(){
        this.data.position = this.el.getAttribute("position");
        var pos = this.data.position;
        pos.y+=0.05;
        if (pos.y >= 0){
            pos.y = -2.75;
        }
        this.el.getAttribute("position", pos);
    }
});
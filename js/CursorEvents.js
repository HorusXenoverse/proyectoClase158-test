AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.mouseEnterEvents();
      this.mouseLeaveEvents();
      
    },
    mouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id");
            const placesId = ["spawn", "avengers", "action-comics", "invencible"];
            if (placesId.includes(id)) {
            const placeContainer = document.querySelector("#comics-container");
            placeContainer.setAttribute("cursor-listener", {
                selectedItemId: id,
            });
            this.el.setAttribute("material", {
                color: "black",
                opacity: 1
            });
      }      
    });
    },
    
    mouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave", () =>{
            const {selectedItemId} = this.data
        if (selectedItemId){
        const elementSelected = document.querySelector(`#${selectedItemId}`)
        const elementSelectedID = elementSelected.getAttribute("id")

        if(elementSelectedID == selectedItemId){
        elementSelected.setAttribute("material", {color: "#0077CC", opacity: 1})
        }
        }

        
    })      
    }

})
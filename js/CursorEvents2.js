AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const comicsId = ["spawn", "avengers", "action-comics", "invencible"];
      if (comicsId.includes(id)) {
        const comicsContainer = document.querySelector("#comics-container");
        comicsContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Evento 'mouseenter' del cursor.
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
  
    handleLeaveListState: function(){
      const {selectedItemId} = this.data
      if (selectedItemId){}
      
      const elementSelected = document.querySelector(`#${selectedItemId}`)
      const elementSelectedID = elementSelected.getAttribute("id")
  
      if(elementSelectedID == selectedItemId){
        elementSelected.setAttribute("material", {color: "#0077cc", opacity: 1})
      }
      
  
    },
  
  
    handleMouseLeaveEvents: function () {
      // Evento 'mouseleave' del cursor.
      this.el.addEventListener("mouseleave", () =>{
        this.handleLeaveListState()
      })
      
    },
  });
  
//your code here
const image = document.querySelectorAll(".image");

const draggedElemet = null;

image.forEach((items) => {

    // when drag element start
    items.addEventListener("dragstart",(e) => {
        //console.log("Drag Start");
        draggedElemet = e.target;
    });

    // when drag element end triggered this event
    items.addEventListener("dragend", (e) => {
        //console.log("Drag End");
        draggedElemet = null;
    });

    //allow drop event 
    items.addEventListener("dragover", (e) => {
        e.preventDefault();
        //console.log("drag over completed");
    });

    // handle drop event
    items.addEventListener("drop", (e) => {
        e.preventDefault();

        if(draggedElemet && draggedElemet !== e.target){
            const dragImage = draggedElemet.style.backgroundImage;
            draggedElemet.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = dragImage;
        }


        //console.log("drop success!")
    });
});


function mouseOver(id1,id2,w1,id3,id4,w2) {
    document.getElementById(id2).style.width = w1;
    document.getElementById(id1).style.height = "0rem";
    document.getElementById(id2).style.height = "0.5rem";
    document.getElementById(id3).style.height = "0rem";
    document.getElementById(id4).style.height = "0.5rem";
    document.getElementById(id4).style.width = w2;
    document.getElementById(id4).style.backgroundColor = "#55ff06";
    document.getElementById(id2).style.backgroundColor = "#55ff06";
    
  }
  
  function mouseOut(id1,id2,id3,id4) {
    document.getElementById(id2).style.width = "0px";
    document.getElementById(id4).style.width = "0px";
    document.getElementById(id2).style.height = "0rem";
    document.getElementById(id1).style.height = "0.5rem";
    document.getElementById(id3).style.height = "0.5rem";
    document.getElementById(id4).style.height = "0rem";
    
    
  }
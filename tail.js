const mouses = [];
let zoro = 3;

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    mouses.push({ gg: mouseX, y: mouseY });

     if (mouses.length > 30) {
         mouses.shift();
     }

    document.getElementById('1').style.left = `${mouseX}px`;
    document.getElementById('1').style.top = `${mouseY}px`;



         zoro = 3;
     
      for (let y = 2; y <= 10; y++) {
          if (zoro < mouses.length) { 
              document.getElementById(`${y}`).style.left = `${mouses[zoro].gg}px`;
              document.getElementById(`${y}`).style.top = `${mouses[zoro].y}px`; 
              zoro += 3;
            
          }
      }
});


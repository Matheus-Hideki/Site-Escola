
let posY = 50;
let posX = 40;
let multiplier = 5;
let angle = 0;

let mouseX = 0;
let mouseY = 0;

  function execute()
  {
    setInterval(animation, 10); //a função está em milisegundos, 1000 milisegundos é 1 minuto
  }


  function animation()
    {

      if(posY < 900)
      {
      const elem = document.getElementById("myDiv");
      multiplier -= 0.2
      angle -= 0.69;
      posY+= -1 * multiplier;
      posX += 1;
      elem.style.top = posY + 'px';
      elem.style.left= posX + 'px';
      //console.log(elem.style.top);
      //console.log(posY);
      elem.style.transform = 'rotate(' + angle + '90deg)';


      } else {
        const elem = document.getElementById("myDiv");
        elem.style.opacity = 0;
      }
    }
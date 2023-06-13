let pos = 50;
let pos2 = 40;
let multiplier = 5;
let angle = 0;
  function execute()
  {
    //document.getElementById("myDiv").style.opacity = 0;
    //alert("lol ");
    //const box = document.getElementById('myDiv');
    //box.style.position = 'absolute';
    //box.style.top = '150px';
    setInterval(animation, 10); //a função está em milisegundos, 1000 milisegundos é 1 minuto
    }
    function animation()
    {



      //alert("ola");
      //const box = document.getElementById('myDiv');
      //box.style.position = 'relative';
      const elem = document.getElementById("myDiv");
      multiplier -= 0.2
      angle -= 0.69;
      pos+= -1 * multiplier;
      pos2 += 1;
      elem.style.top = pos + 'px';
      elem.style.left= pos2 + 'px';
      console.log(elem.style.top);
      elem.style.transform = 'rotate(' + angle + '90deg)';
    }
    
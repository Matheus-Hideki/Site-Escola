
 //let d = new Date();
  //alert("Today's date is " + d);

  function execute()
  {
    //document.getElementById("myDiv").style.opacity = 0;
    //document.getElementById("myDiv").style.animation = "10s linear 0s infinite alternate loop1";
    alert("lol ");
    setInterval(animation, 0.2);
    }
    function animation()
    {
        let thing = document.getElementById("myDiv");
        let frames = 0
        let posY = thing.style.top;
        let posX = thing.style.left;

        posY += 0.1;
        thing.style.top = posY + 'px';
        thing.style.left = posX + 'px';
        frames += 1;
    }
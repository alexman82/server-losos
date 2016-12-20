var can = document.getElementById('canvas');
      
      var ctx = can.getContext('2d');
        var x = 10, y = 100;
        ctx.fillStyle = "black";
        ctx.fillRect(700, 100, 100, 100);

        function draw() {
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(250,0,0,0.4)';
            ctx.fill();

            x += 2;
            ctx.fillStyle = "rgba(34,45,23,0.4)";
            ctx.fillRect(0, 0, can.width, can.height);
            requestAnimationFrame(draw);
            //ctx.clearRect(0,0,can.width,can.height);
        }
        draw();
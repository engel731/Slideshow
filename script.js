(function(){
    function removeMin(src) {
        return src.substring(0, src.indexOf('Min.jpg')) + '.jpg';
    }

    function displayImg(imgMin) {
        var imgMax = document.querySelector('#cadre img');
            
        imgMax.src = removeMin(imgMin.src);
        imgMax.alt = imgMin.alt;
    }
    
    var imgs = document.querySelectorAll('#album img'),
        imgsLen = imgs.length, i = 0;

    setInterval(function() {
        if(i == imgs.length)
            i = 0;
       
        displayImg(imgs[i]);
        i++;
    }, 6000);

    for(var i = 0; i < imgsLen; i++) {  
        imgs[i].addEventListener('click', function(e) {
            displayImg(e.target);
        }, false);
    }
})();
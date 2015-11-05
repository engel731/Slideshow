(function(){
    function showImg(imgMax) {
        imgMax.style.opacity = "1";
    }

    function hideImg() {
        var mainImgs = document.querySelectorAll('.mainPicture'),
            mainImgsLen = imgs.length;
        
        for(var i = 0; i < mainImgsLen; i++) {  
            mainImgs[i].style.opacity = "0";
        }
    }

    var displayImg = function(imgMin) {
        var mainImgs = document.querySelectorAll('.mainPicture'),
            mainImgsLen = imgs.length;
        
        for(var i = 0; i < mainImgsLen; i++) {  
            if(imgMin.alt === mainImgs[i].alt)
                showImg(mainImgs[i]);
            else
                mainImgs[i].style.opacity = "0";
         }
    };

    var imgs = document.querySelectorAll('#album img'),
        imgsLen = imgs.length;

    setInterval(function() {
        if(i == imgsLen)
            i = 0;
       
        displayImg(imgs[i]);
        i++;
    }, 6000);
    
    hideImg();
    showImg(document.getElementById('default'));
    
    for(var i = 0; i < imgsLen; i++) {  
        imgs[i].addEventListener('click', function(e) {
            displayImg(event.target);
        }, false);
    }
})();
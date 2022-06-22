const overlay = document.querySelector('#cssURL');
const picture = document.querySelector('.climb-pic');
const exit = document.querySelector('.apple');


    picture.addEventListener('click', function(){
        window.scrollTo(0, 0);
        overlay.href = '../../../../problemsCSS/overlay.css';
        
        
    });


    exit.addEventListener('click', function(){
        overlay.href = '../../../../problemsCSS/standard.css';
    });

  
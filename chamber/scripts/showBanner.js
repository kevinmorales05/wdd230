let banner = document.querySelector('#banner');

function getDay(){
    const today = new Date();
    const day = today.getDay();
    if(day >= 1 && day <= 3){
        banner.style.display = 'block'
    }
}

const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', function() {
    //console.log('close banner')
    document.getElementById('banner').style.display = 'none';
});

getDay();
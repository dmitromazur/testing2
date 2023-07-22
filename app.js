function menuopen() {
    document.getElementById('menusmailleft').style.display='block';
    document.getElementsByTagName('body')[0].classList.add('overflow-hidden')
}

function menuclose() {
    document.getElementById('menusmailleft').style.display='none'; 
    document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
}




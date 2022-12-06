let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
      myImage.setAttribute('src', 'images/salut.png');
    } else {
      myImage.setAttribute('src', 'images/logo.png');
    }
});

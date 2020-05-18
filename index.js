var stylelink = document.querySelector('#stylelink')
var index1stylebutton = document.querySelector('#index1stylebutton')
var index2stylebutton = document.querySelector('#index2stylebutton')

index1stylebutton.addEventListener('click', function() {
    console.log('Changing style to index1.css.')
    console.log(stylelink)
    stylelink.setAttribute('href', 'index1.css')
    console.log(stylelink)
});

index2stylebutton.addEventListener('click', function() {
    console.log('Changing style to index2.css.')
    console.log(stylelink)
    stylelink.setAttribute('href', 'index2.css')
    console.log(stylelink)
});

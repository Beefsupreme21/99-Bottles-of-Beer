let verse = ' bottles of beer on the wall, '
let verse2 = ' bottles of beer.'
let verse3 = ' Take one down and pass it around, '
let verse4 = ' bottles of beer on the wall.</br></br>'
let verse5 = '2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.</br></br>'
let verse6 = '1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.</br></br>'
let verse7 = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.'

let x = 99;


function song() {
    document.getElementById('content').innerHTML += [x] + verse + [x] + verse2;
    x--;
    document.getElementById('content').innerHTML += verse3 + [x] + verse4 ;
}

function song2() {
    document.getElementById('content').innerHTML += verse5;
    document.getElementById('content').innerHTML += verse6;
    document.getElementById('content').innerHTML += verse7;
}

while (x > 2) {
    song()
}

if (x == 2) {
    song2()
}


var nama = prompt('nama :');
var gendre = prompt('gendre = pria / wanita ?');
gendre.toLocaleLowerCase();

if ( gendre == 'pria' ){
    alert('Selamat Datang, Mr. ' + nama);
} else {
    alert('Selamat Datang, Mrs. ' + nama);
}


var minuman = prompt('ingin pesan minuman apa ?');
minuman.toLocaleLowerCase();

if (minuman == 'jus') {
    alert('Mohon maaf, ' + minuman + ' tidak tersedia.');
} else {
    alert('Siap ' + nama + ' , satu ' + minuman + ' segera datang!');
}


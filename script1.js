alert('selamat datang nova');

var user = 'nova';
var pass = '123';

var username = prompt('username : ');
var password = prompt('password : ');

if (user == username && pass == password) {
    alert('login berhasil');
} else {
    alert('username atau password salah');
    window.location = 'http://www.google.com';
}
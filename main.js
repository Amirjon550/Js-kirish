 //1-Masala

/**var son = prompt("Son kiriting");
var uzunlik = son.length;
console.log("Bu son " + uzunlik + " xonali"); **/



//2-Masala

/**var son = prompt("3 xonali son kiriting");
var raqam = parseInt(son);

var birlik = raqam % 10;
var onlik = Math.floor((raqam % 100) / 10);
var yuzlik = Math.floor(raqam / 100);

var teskari = (birlik * 100) + (onlik * 10) + yuzlik;

console.log("Teskari son: " + teskari); **/



//3-Masala

/**var son = prompt("Ixtiyoriy son kiriting (max 4 xonali):");

if (son.length <= 4) {
  var juftmi = (son % 2 === 0) ? "juft" : "toq";
  alert("Bu " + juftmi + " son. " + son.length + " xonali.");
} else {
  alert("4 xonadan oshmagan son kiriting.");
}**/



//4-Masala
             
/**var x = prompt("1-raqamni kiriting (0-9):");
var y = prompt("2-raqamni kiriting (0-9):");
var z = prompt("3-raqamni kiriting (0-9):");

var uchXonali = x + y + z;
alert("3 xonali son: " + uchXonali);**/
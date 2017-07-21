/* Debes pegar todo el código en main.js*/
var productos = [];
var records = document.getElementById('etiqueta');

// Constructor para generar un nuevo producto
function Producto(compra) {
  this.compra = compra.toLowerCase();
  this.producttID =(productos.length + 1);
}

//Método para imprimir un producto en html
Producto.prototype.toHTML = function() {
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  html += '<br>';
  return html;
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (i=0;i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
  return;
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addCompra = document.getElementById('print');
addCompra.onclick = function() {
  var caja = document.getElementById('cajita').value;
    var product = new Producto(caja);
  productos.push(product);
  printHTML(product.toHTML());
   printHTML(mergeHTML());

};

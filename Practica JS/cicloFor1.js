const listaLI = document.querySelectorAll('#numeros li');
const mensaje = `Hay ${listaLI.length} elementos en la lista UL "numeros"`;
document.getElementById('output').innerHTML = mensaje;
document.getElementById('output2').innerHTML = listaLI;

for (let i=0; i<listaLI.length; i+=1){
    console.log(`i=${i} value=${i+1} elemento=${listaLI.item(i)}`);
    let contenido = (`i=${i} value=${i+1} elemento=${listaLI.item(i)}`);
    if (i==0) {
        document.getElementById('value1').innerHTML = contenido; 
    }
    if (i==1) {
        document.getElementById('value2').innerHTML = contenido; 
    }
    if (i==2) {
        document.getElementById('value3').innerHTML = contenido; 
    }
    if (i==3) {
        document.getElementById('value4').innerHTML = contenido; 
    }
    listaLI.item(i).value=i+1;
}
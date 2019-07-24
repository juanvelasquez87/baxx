/*alert("HELLO WORLD");
var x = 30;
alert("el valor de x es: "+ x)
console.log("el valor de x es:", x);
console.log(Math.max(2,4));
console.log(Math.min(2,4)+100);
confirm("entonces, deberiamos?");
alert("hagamoslo");
prompt("tell me why");*/
var nom = prompt("INGRESE NOMBRE DEL ESTUDIANTE");
console.log(nom);
var edad = prompt("INGRESE LA EDAD");
console.log(edad);
var grado = prompt("INGRESE GRADO EN CURSO");
console.log(grado);

alert("estudiante: "+nom+" de curso: "+grado);
var mat1 = prompt("ingrese la materia");
console.log(mat1);
var cal1 = parseFloat (prompt("ingrese nota 1"));
console.log(cal1)
var cal2 = parseFloat (prompt("ingrese nota 2"));
console.log(cal2)
var cal3 = parseFloat (prompt("ingrese nota 3"));
console.log(cal3)
var prom = (cal1+cal2+cal3)/3;
alert("la calificacion de: "+nom+"\n"+ "en la materia : "+mat1+"\n"+"es: "+prom);
if(prom>=3){
    alert("aprobo");
}else if(prom<3){
    alert("reprobo");
}else if(prom==5){
    alert("becado");
}else{
    alert("meritos");
}
var mat2 = prompt("ingrese la materia");
console.log(mat3);
var cal1m2 = parseFloat (prompt("ingrese nota 1"));
console.log(cal1m2)
var cal2m2 = parseFloat (prompt("ingrese nota 2"));
console.log(cal2m2)
var cal3m2 = parseFloat (prompt("ingrese nota 3"));
console.log(cal3m2)
var cal4m2 = parseFloat (prompt("ingrese nota 4"));
console.log(cal4m2);
var promm2 = ((cal1m2*0.25)+(cal2m2*0.25)+(cal3m2*0.25)+(cal4m2*0.25));
alert("la calificacion de: "+nom+" \n"+ "en la materia : "+mat2+"\n"+"es: "+promm2);
if(promm2==5){
    alert("congratulations");
}else if(promm2>=3){
    alert("aprobo");
}else{
    alert("reprobo");
}
var mat3 = prompt("ingrese la materia");
console.log(mat3);
var cal1m3 = parseFloat (prompt("ingrese nota 1"));
console.log(cal1m3)
var cal2m3 = parseFloat (prompt("ingrese nota 2"));
console.log(cal2m3)
var cal3m3 = parseFloat (prompt("ingrese nota 3"));
console.log(cal3m3)
var cal4m3 = parseFloat (prompt("ingrese nota 4"));
console.log(cal4m3);
var cal5m3 = parseFloat (prompt("ingrese nota 5"));
console.log(cal5m3)
var cal6m3 = parseFloat (prompt("ingrese nota 6"));
console.log(cal6m3);
var promm3 = ((cal1m3*0.125)+(cal2m3*0.125)+(cal3m3*0.125)+(cal4m3*0.125)+(cal5m3*0.25)+(cal6m3*0.25));
alert("la calificacion de: "+nom+" \n"+ "en la materia : "+mat3+"\n"+"es: "+promm3);
if(promm3>=3){
    alert("aprobo");
}else if(promm3<3){
    alert("reprobo");
}else if(promm3==5){
    alert("becado");
}else{
    alert("meritos");
}
var mat4 = prompt("ingrese la materia");
console.log(mat4);
var cal1m4 = parseFloat (prompt("ingrese nota 1"));
console.log(cal1m4)
var cal2m4 = parseFloat (prompt("ingrese nota 2"));
console.log(cal2m4)
var cal3m4 = parseFloat (prompt("ingrese nota 3"));
console.log(cal3m4)
var cal4m4 = parseFloat (prompt("ingrese nota 4"));
console.log(cal4m4);
var cal5m4 = parseFloat (prompt("ingrese nota 5"));
console.log(cal5m4);

var prom3not = ((cal1m4*0.33)+(cal2m4*0.33)+(cal3m4*0.33))*0.5;
var prom2not = (cal4m4*0.25)+(cal5m4*0.25);
var promm4 = prom3not+prom2not;
alert("la calificacion de: "+nom+" \n"+"en la materia : "+mat4+"\n"+"es: "+promm4);
if(promm4>=3){
    alert("aprobo");
}else if(promm4<3){
    alert("reprobo");
}else if(promm4==5){
    alert("becado");
}else{
    alert("meritos");
}
alert("estos son los promedios en las tres materias: "+"\n"+mat1+": "+prom+"\n"+mat2+": "+promm2+"\n"+mat3+": "+promm3+"\n"+mat4+": "+promm4);

/*var num1 = parseInt (prompt("ingrese numero 1"));
var num2 = parseInt (prompt("ingrese numero 2"));
if(num1>num2){
    alert("la suma de los numeros es: "+(num1+num2));
    alert("la resta de los numeros es: "+(num1-num2));
}else{
    alert("la multiplicacion de los numeros es: "+(num2*num1))
    alert("la division de los numeros es: "+(num2/num1))
}*/
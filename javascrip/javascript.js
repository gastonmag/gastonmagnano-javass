//let cA = parseInt(prompt("indique la cantidad de alumnos"));
//let eA; // REGISTRO DE LAS EDADES
//let sA // acumulador de edades
//let n ; // ciclo

//for( n=1;n<=cA;n++){
  
  //  eA= parseInt (prompt("ingrese la edad del alumno" + n));
  // sA = sA + eA; 

//}
 //console.log (`el promedio de las edades de los ${cA} alumnos es:${sA/eA}`);





// variable estatura
 //let E = parseInt(prompt("ingrese la estatura en centimetros"));
 // cantidad de personas
 //let cP = 0;
 // sumatoria de estaturas
 //let sE = 0; 

// while (E>0){ 
  //   parseInt(prompt("ingrese la estatura"));
//cP= cP + 1;
//sE= sE + E;
 //}
 //if (cP== 0) { 
  //   console.log("no hay estaturas")
 //} else {
   //  console.log(`el promedio de estaturas de las ${cP} personas es ${sE/cP} centimetros`)
 //}

 let n;
 let i;
 let m=0;
 for(i=1;i<=5;i++){
     n = parseInt(prompt("ingrese el dato" +i+ "de 5 "));
     m =n+m ;// acumulador 
 }
 console.log(`la suma total es de: ${m}`);
 console.log(`el promedio es: ${m/5}`);


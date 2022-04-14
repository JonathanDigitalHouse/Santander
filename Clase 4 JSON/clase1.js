const notas = [];

const agregarNota = (nota)=> {
  notas.push(nota)
};


const eliminarNota = ()=>{
  notas.pop();
}


agregarNota('Aprender JS');
agregarNota('Aprender React');
agregarNota('Aprender NodeJS');
agregarNota('Aprender HTML');
eliminarNota()


function operacion(accion,nota){
  switch(accion){
    case 'agregar-nota':
      agregarNota(nota);
      break
    case 'eliminar-nota':
      eliminarNota();
      break
    default:
      console.log('Lastima 🥲');
  }
}

operacion('agregar-nota','Tomar fernet')
operacion('eliminar-nota','Tomar fernet')





for(let i = 0; i < notas.length; i++){
  console.log(notas[i]);
}
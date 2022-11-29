import React from 'react';

function Testimonio(){
   return(
      <div className='contenedor_testimonio'>
        <img 
         className='imagen-testimonio' 
         src={require('../Testimonios/images/Foto1.png')}
         alt='Foto 1'/>
         <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>1</p>
          <p className='cargo-testimonio'>2</p>
          <p className='text-testimonio'>3</p>
         </div>
      </div>
   );   
}

export default Testimonio;
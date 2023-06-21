import React from 'react'
import './upload.css'
//import {useMutation} from 'react-query'

export default function Upload() {
    // const { mutateAsync, isLoading } = useMutation(
    //   (() => {}),
    //   {
    //     onSuccess: () => {
        
    //     },
    //   }
    // );

  return (
    <div className="allUp">
      <div className='allUp'>
            <div className='cima'>
                <p>Titulo:</p>
                <input  className='tituloI' type="text" />
            </div>
            <div className="fics">
            <p>Ficheiro</p>
            <input className='fic' name='files' type="file" />
            <p>Capa</p>
            <input className='cp' name='files' type="file" />
            </div>
            <button className='btnC'>Carregar</button>
      </div>
    </div>
  );
}

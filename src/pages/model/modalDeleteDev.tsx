import React, {useState, useEffect} from 'react'
import api from '../../api/api'


export default function ModalDeleteDev(nomeDev:String){
    const [modalDelete, setModalDelete] = useState(Boolean) 
    const [nameDev, setNameDev] = useState(String); 
    function deleteDev(nameDev:String){
        var str = '';
        for (var p in nomeDev) {
            if (Object.prototype.hasOwnProperty.call(nomeDev, p)) {
            str += nomeDev[p]
        }
        
    }
    api.post('/deleteDev', {
        deleteDevName: str 
    })
    window.location.reload()
        
    }
   
    function modalDeleteDev(){
        setModalDelete(true)
        if(modalDelete === true){
            setModalDelete(false)
        } else if(modalDelete === false){
            setModalDelete(true)
        }
    }
    return(
        <div className='modal-delete-dev'>

        <div className='modal-delete-box'>
            <div className='modal-delete-text'>
                <p className='modal-text-inf'>Deletar desenvolvedor</p>
                <p className='modal-text-confirm'>Tem certeza que deseja deletar esse desenvolvedor?</p>
            </div>
            <div className='modal-button'>
                <button className='modal-button-cancel' onClick={() => {modalDeleteDev()}}>Cancelar</button>
                <button className='modal-button-delete' onClick={async (e) => {deleteDev(nameDev)}}>Deletar</button>
            </div>
        </div>

    </div>   
    )
}
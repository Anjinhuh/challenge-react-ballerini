import React, {useState, useEffect} from 'react'

import linkedin from '../../img/linkedin.svg'

import discord from '../../img/discord.svg'
import facebook from '../../img/facebook.svg'
import logo from '../../img/balledevlogo.svg'
import lupa from '../../img/lupa.svg'
import devBale from '../../img/rafaDev.svg'

import likedinWhite from '../../img/linkedinWhite.svg'
import github from '../../img/githu.svg'

import left from '../../img/backleft.svg'
import right from '../../img/continueright.svg'

import './devpage.css'

import api from '../../api/api'

// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS


export default function Dev(){
    const [modal, setModal] = useState(Boolean)
    function modifyModal(){
        setModal(true)
        if(modal == true){
            setModal(false)
        } else if(modal == false){
            setModal(true)
        }
    } 
    const [dev, setDev] = useState([])

    useEffect(() =>{
        api.get('/developers').then(async x =>{
            await setDev(x.data)
        })
    }, [])
    
    return(
        
        <div className="App">

            <div className='modal-delete-dev inactive'>

                <div className='modal-delete-box'>
                    <div className='modal-delete-text'>
                        <p className='modal-text-inf'>Deletar desenvolvedor</p>
                        <p className='modal-text-confirm'>Tem certeza que deseja deletar esse desenvolvedor?</p>
                    </div>
                    <div className='modal-button'>
                        <button className='modal-button-cancel'>Cancelar</button>
                        <button className='modal-button-delete'>Deletar</button>
                    </div>
                </div>

            </div>
                {modal 
                    ? 
            <div className='model-add-dev'>
                <div className='modal-add-box'>
                    <p>Adicionar desenvolvedor</p>
                    <div className='modal-add-div'>
                        <p>Nome</p>
                        <input  />
                    </div>
                    <div className='modal-add-div'>
                        <p>Avatar</p>
                        <input/>
                    </div>
                    <div className='modal-add-div'>
                        <p>Ocupação</p>
                        <input/>
                    </div>
                    <div className='modal-add-div'>
                        <p>Github</p>
                        <input/>
                    </div>
                    <div className='modal-add-div'>
                        <p>Linkedin</p>
                        <input/>
                    </div>

                    <div className='modal-add-button'>
                        <button className='modal-add-button-cancel' onClick={() => {modifyModal()}}>Cancelar</button>
                        <button className='modal-add-button-confirm'>Adicionar</button>
                    </div>
                </div>
            </div>
                    : 
            <div className='inactive '>
            </div>
                }
            
            

            
            <header className='headerDev'>
                <div className='headerContent'>
                    <div className='iconesDev'>
                        <img src={linkedin} />
                        <img src={discord} />
                        <img src={facebook} />
                    </div>
                    <div className='logo'>
                        <img src={logo} />            
                    </div>
                    <div className='inputBusca'>
                        <img src={lupa} />
                        <input placeholder='Buscar' />
                    </div>
                    <div className='buttonHeader'>
                        <button onClick={() => {modifyModal()}}>Adicionar dev</button>
                    </div>
                </div>
            </header>

            <main className='devMain'>
                    <img className='buttonLeftRight' src={left} />

                    {dev.map( (developer) =>
                        <div className='devBox'>
                            <div className='devDetails'>
                                <img src={devBale} />
                                <div className='lineGreen'></div>
                                <p className='name'>{developer['nome']}</p>
                                <p className='job'>{developer['prof']}</p>
                                <div className='devUtils'>
                                    <img src={github} />
                                    <img src={likedinWhite} />
                                    <button>Ver mais</button>
                                </div>
                            </div>
                            <div className='devButtons'>
                                <button className='editButton'>Editar</button>
                                <button className='deleteButton'>Deletar</button>
                            </div>
                        </div>
                    )}
                    <img className='buttonLeftRight' src={right} />
            </main>
            
        </div>
        
    )
}
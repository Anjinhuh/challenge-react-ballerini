import React, {useState, useEffect} from 'react'
import $ from 'jquery';

import linkedinLogo from '../../img/linkedin.svg'

import discord from '../../img/discord.svg'
import facebook from '../../img/facebook.svg'
import logo from '../../img/balledevlogo.svg'
import lupa from '../../img/lupa.svg'
import devBale from '../../img/rafaDev.svg'

import likedinWhite from '../../img/linkedinWhite.svg'
import githubLogo from '../../img/githu.svg'

import left from '../../img/backleft.svg'
import right from '../../img/continueright.svg'

import './devpage.css'

import api from '../../api/api'


import ModalAddDev from './model/modalAddDev';
import ModalDeleteDev from './model/modalDeleteDev'



export default function Dev(){
    const [dev, setDev] = useState([])
    const [nameDev, setNameDev] = useState(String); 

    const [modal, setModal] = useState(Boolean) 
    const [modalDelete, setModalDelete] = useState(Boolean) 

    function modifyModal(){
        setModal(true)
        if(modal === true){
            setModal(false)
        } else if(modal === false){
            setModal(true)
        }
    } 
    function modalDeleteDev(){
        setModalDelete(true)
        if(modalDelete === true){
            setModalDelete(false)
        } else if(modalDelete === false){
            setModalDelete(true)
        }
    }

    useEffect(() =>{
        api.get('/developers').then(x =>{
            setDev(x.data)
        })
    }, [])
    
    return(
        <div className="App">
            { modalDelete 
                                ? 
                <ModalDeleteDev {...nameDev} ></ModalDeleteDev>
                               :      
                <div className='inactive '>
                </div>   
            }
            { modal 
                                ? 
                <ModalAddDev></ModalAddDev>
                                : 
                <div className='inactive '>
                </div>
                }
                
            <header className='headerDev'>
                <div className='headerContent'>
                    <div className='iconesDev'>
                        <img src={linkedinLogo} />
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
                    
                    <div className='organize-dev'>
                        {dev.map( (developer) =>
                            
                            <div className='devBox'>
                                <div className='devDetails'>
                                    <img src={developer['avat']}  />
                                    <div className='lineGreen'></div>
                                    <p className='name'>{developer['nome']}</p>
                                    <p className='job'>{developer['prof']}</p>
                                    <div className='devUtils'>
                                        <a href={developer['git']}><img src={githubLogo} /></a>
                                        <a href={developer['linke']}><img src={likedinWhite} /></a>
                                        <button>Ver mais</button>
                                    </div>
                                </div>
                                <div className='devButtons'>
                                    <button className='editButton'>Editar</button>
                                    <button className='deleteButton' onClick={() =>{modalDeleteDev(); setNameDev(developer['nome'])}}  >Deletar</button>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    
            </main>
            
        </div>
        
    )
}
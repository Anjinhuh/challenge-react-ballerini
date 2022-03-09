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





export default function Dev(){
    const [dev, setDev] = useState([])
    const [nameDev, setNameDev] = useState('Oie'); 

    const [modal, setModal] = useState(Boolean) 
    const [modalDelete, setModalDelete] = useState(Boolean) 


    const [nome, setNome] = useState(String)
    const [avatar, setAvatar] = useState(String)
    const [ocupacao, setOcupacao] = useState(String)
    const [github, setGithub] = useState(String)
    const [linkedin, setLinkedin] = useState(String)
    
    function modifyModal(){
        setModal(true)
        if(modal === true){
            setModal(false)
        } else if(modal === false){
            setModal(true)
        }
    } 
    function enviaUser(nome: String, avatar: String, ocupacao:String, github:String, linkedin:String){
        api.post('/createUser',{
            nameModal: nome,
            avatarModal: avatar,
            ocupacaoModal: ocupacao,
            githubModal: github,
            linkedinModal: linkedin
        }).then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err)
        })
        window.location.reload()

    }
    function deleteDev(nameDev:String){
        api.post('/deleteDev', {
            deleteDevName: nameDev 
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
   
        
    
    
    useEffect(() =>{
        api.get('/developers').then(x =>{
            setDev(x.data)
        })
    }, [])
    
    return(
        
        <div className="App">
            {modalDelete ? 
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
                :      
                <div className='inactive '>
                </div>   
        }

                {modal 
                    ? 
            <div className='model-add-dev'>
                <div className='modal-add-box'>
                    <p>Adicionar desenvolvedor</p>
                    <div className='modal-add-div'>
                        <p>Nome</p>
                        <input onChange={(e) =>{setNome(e.target.value)}} id="modal-nome" />
                    </div>
                    <div className='modal-add-div'>
                        <p>Avatar</p>
                        <input onChange={(e) =>{setAvatar(e.target.value)}} id="modal-link-avatar" />
                    </div>
                    <div className='modal-add-div'>
                        <p>Ocupação</p>
                        <input onChange={(e) =>{setOcupacao(e.target.value)}} id="modal-ocupacao"/>
                    </div>
                    <div className='modal-add-div'>
                        <p>Github</p>
                        <input onChange={(e) =>{setGithub(e.target.value)}} id="modal-github" />
                    </div>
                    <div className='modal-add-div'>
                        <p>Linkedin</p>
                        <input onChange={(e) =>{setLinkedin(e.target.value)}} id="modal-linkedin" />
                    </div>

                    <div className='modal-add-button'>
                        <button className='modal-add-button-cancel' onClick={() => {modifyModal()}}>Cancelar</button>
                        <button className='modal-add-button-confirm' onClick={() =>{enviaUser(nome, avatar, ocupacao, github, linkedin)}}>Adicionar</button>
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
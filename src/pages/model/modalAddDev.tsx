import React, {useState, useEffect} from 'react'
import api from '../../api/api'

export default function ModalAddDev(){
    const [nome, setNome] = useState(String)
    const [avatar, setAvatar] = useState(String)
    const [ocupacao, setOcupacao] = useState(String)
    const [github, setGithub] = useState(String)
    const [linkedin, setLinkedin] = useState(String)


    const [modal, setModal] = useState(Boolean) 
    
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

    return(
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
    )
}
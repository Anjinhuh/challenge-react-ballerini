import React from 'react'

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

export default function Dev(){
    return(
        <div className="App">
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
                        <button>Adicionar dev</button>
                    </div>
                </div>
            </header>

            <main className='devMain'>
                    <img className='buttonLeftRight' src={left} />
                        <div className='devBox'>
                            <div className='devDetails'>
                                <img src={devBale} />
                                <div className='lineGreen'></div>
                                <p className='name'>Rafaella Ballerini</p>
                                <p className='job'>Instrutora Front-End</p>
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

                        <div className='devBox'>
                            <div className='devDetails'>
                                <img src={devBale} />
                                <div className='lineGreen'></div>
                                <p className='name'>Rafaella Ballerini</p>
                                <p className='job'>Instrutora Front-End</p>
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

                        <div className='devBox'>
                            <div className='devDetails'>
                                <img src={devBale} />
                                <div className='lineGreen'></div>
                                <p className='name'>Rafaella Ballerini</p>
                                <p className='job'>Instrutora Front-End</p>
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
                    <img className='buttonLeftRight' src={right} />
            </main>
        </div>
        
    )
}
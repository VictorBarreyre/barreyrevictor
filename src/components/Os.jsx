import React from 'react'
import { useWindowContext } from '../Context.jsx'
import win from '../assets/windows.svg'
import mac from '../assets/mac.svg'
import tux from '../assets/tux.svg'
import data from './data.js';


const Os = () => {

    const { language } = useWindowContext();
    const windows = data[language].Button

    return (
    
            <div className='flex-logo'>
                <div className='flexsinglelogo'>
                    <a className="logo-desk"><img src={win} /></a>
                    <p className="os">{data[language].Desk.window}</p>
                </div>
                <div className='flexsinglelogo'>
                    <a className="logo-desk"><img src={mac} /></a>
                    <p className="os">{data[language].Desk.mac}</p>
                </div>
                <div className='flexsinglelogo'>
                    <a className="logo-desk"><img src={tux} /></a>
                    <p className="os">{data[language].Desk.tux}</p>
                </div>
        </div>
            )
}

            export default Os;
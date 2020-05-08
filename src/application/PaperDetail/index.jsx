import React from 'react';


import CreateTitle from '../../components/PaperDetail/CreateTitle';
import PaperDetailMessage from '../../components/PaperDetail/PaperDetailMessage';


import './index.css'
export default ()=>{
    return (
        <div className="paperdetail">
            <div className="paperdetail-left">
            <PaperDetailMessage/>
            </div>
            <div className="paperdetail-middle">
            <CreateTitle/>
            </div>
        </div>
    )
}
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TeacherMain from './application/TeacherMain'
import PaperDetail from './application/PaperDetail'

export default ()=>{
    return (
        <div>
            <div className="main-navbar"></div>
            <Switch>
                <Route exact path="/main/teacher" component={TeacherMain}/>
                <Route path="/main/teacher/paperdetail/:paperId" component={PaperDetail}/>
            </Switch>
        </div>
    )
}
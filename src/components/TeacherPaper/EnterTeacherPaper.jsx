import React from 'react';

import {Link} from 'react-router-dom';

import {Icon, Tooltip} from 'antd';
const text="编辑题目"
export default (props)=>{
    const {paperId}=props;
    return (
        <div>
            <Tooltip placement="bottom" title={text}>
            <Link to={`/main/teacher/paperdetail/${paperId}`}><Icon type="edit" key="edit" /></Link>
            </Tooltip>
        </div>
    )
}
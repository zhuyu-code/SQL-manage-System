import React from 'react';
import {message} from 'antd';

import {deleteTitle} from '../../../api/index'
export default (props)=>{
    const {titleId,queryPaperDetail}=props;
    function deleteListItem(id){
        return ()=>{
          deleteTitle(id).then(res=>{
              if(res.error==0){
                  message.success(res.message);
                  queryPaperDetail();
              }else{
                  message.error(res.message)
              }
              console.log(res);
          })
        }
    }
    return (
        <div>
            <a key="list-loadmore-more" onClick={deleteListItem(titleId)}>删除</a>
        </div>
    )
}
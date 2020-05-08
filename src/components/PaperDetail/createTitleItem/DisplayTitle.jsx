import React, { Fragment } from 'react';

import {Button, message} from 'antd';

import {displayTitle} from '../../../api/index';
export default (props) => {
        let {paperId,issue,queryPaperDetail}=props;
    function uploadTitle(){
        console.log({
            paperId:paperId,
            issued:issue
        })
        if(issue==1){
            issue=0
        }else{
            issue=1
        }
        displayTitle({
            paperId:paperId,
            issued:issue
        }).then(res=>{
            console.log(res)
            if(res.error==0){
                message.success(res.message);
                queryPaperDetail();
            }else{
                message.error(res.message);
            }
        })
    }

    function setNation(){
        if(issue){
            return (<Button icon="download" type="primary" onClick={uploadTitle}>
            撤销题目
          </Button>)
        }else{
            return (<Button icon="upload" type="primary" onClick={uploadTitle}>
            发布题目
          </Button>)
    }
}
  return (
      <Fragment>
        {setNation()}
    </Fragment>
  );
}

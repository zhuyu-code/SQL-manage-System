import React, { useState, useEffect, useCallback } from "react";

import { useLocation } from "react-router";
import { Divider, Button, List, message } from "antd";

import { getTitleAll } from "../../api/index";
import DeleteListItem from './createTitleItem/DeleteListItem';
import AddListItem from './createTitleItem/AddListItem';
import UpdateListItem from './createTitleItem/UpdateListItem';
import DisplayTitle from './createTitleItem/DisplayTitle';

export default () => {
  const [titleList, setTitleList] = useState([]);
  const [issue,setIssue]=useState(0);
  let location = useLocation();
  const paperId = location.pathname.split("/").pop();
  let queryPaperDetail = () => {
    getTitleAll(paperId).then((res) => {
      if (res.error == 0) {
        setTitleList(res.titleList);
        setIssue(res.paperInfo.issued);
        console.log("第一次issue")
        console.log(issue);
      }
    });
  }
  useEffect(() => {
    queryPaperDetail();
  }, []);

  function setList(){
    if(issue){
        return (
        <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={titleList}
        renderItem={(item) => (
          <List.Item
              key={item.titleId}
          >
            <List.Item.Meta
              title={item.titleName}
              description={item.answer}
            />
          </List.Item>
        )}
      />
       )
    }else{
        return (
            <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={titleList}
            renderItem={(item) => (
              <List.Item
                  key={item.titleId}
                actions={[
                  <UpdateListItem titleId={item.titleId} titleName={item.titleName} answer={item.answer} queryPaperDetail={queryPaperDetail}/>,
                  <DeleteListItem titleId={item.titleId} queryPaperDetail={queryPaperDetail}/>,
                ]}
              >
                <List.Item.Meta
                  title={item.titleName}
                  description={item.answer}
                />
              </List.Item>
            )}
          />
           )
    }
  }
  return (
    <div>
      <Divider className="divider" orientation="left">
        创建试卷题目
      </Divider>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
      <AddListItem queryPaperDetail={queryPaperDetail}/>
      <DisplayTitle issue={issue} paperId={paperId} queryPaperDetail={queryPaperDetail}/>
      </div>
      <div className="detail-createtitle">
       {
           setList()
       }
      </div>
    </div>
  );
};

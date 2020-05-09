import React, { useState, useEffect,useCallback } from "react";

import { Card, Icon, Divider} from "antd";
import {Link} from 'react-router-dom';

import { getAllPaperList } from "../../api/index";
import AddTeacherPaper from "../../components/TeacherPaper/addTeacherPaper";
import DeleteTeacherPaper from "../../components/TeacherPaper/deleteTeacherPaper";
import EnterTeacherPaper from "../../components/TeacherPaper/EnterTeacherPaper";

import "./index.css";
export default () => {
  const [CardData, setCardData] = useState([]);
  let query=()=>{
    getAllPaperList().then((res) => {
        setCardData(res.list);
      });
  }
  useEffect(() => {
    query()
  }, []);
  
  return (
    <div className="teacher-main">
      <Divider orientation="left">
        <Icon type="unordered-list" />
        <span style={{ marginLeft: "10px" }}>我创建的试卷</span>
      </Divider>
      {CardData.map((item) => {
        return (
          <div className="teacher-card">
            <Card
              key={item.paperId}
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  height="100px"
                />
              }
              actions={[
                <EnterTeacherPaper paperId={item.paperId}/>,
                <DeleteTeacherPaper index={item.paperId} query={query}/>,
              ]}
            >
              {item.paperName}
            </Card>
          </div>
        );
      })}
      <AddTeacherPaper query={query}/>
    </div>
  );
};

import React, { useEffect, Fragment } from "react";
import { Form, Icon, Input, Button, Checkbox, Tabs,message } from "antd";

import history from "../../util/history";
import { getLogin } from "../../api/index";

import IndexLogo from "../../asserts/index_logo.png";

import "./index.css";

const { TabPane } = Tabs;
class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:0
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let obj=values;
        obj.status=this.state.status;
        console.log(this.state.status);
        if(this.state.status==1){
          obj.workNumber=obj.studentId;
        }
        console.log(obj)
        getLogin(obj).then(res=>{
          if(res.error==0){
            message.success("登录成功",3);
            localStorage.setItem("token",res.token);
            history.push("/main/teacher")
          }
        })
      }
    });
  };

  TabChange=(key)=>{
    console.log(key)
    this.setState({
      status:key
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-main">
        <div className="login-banner">
          <img src={IndexLogo} />
        </div>

        <div className="login">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-title">SQL训练测试平台</div>
            <Tabs defaultActiveKey="0" onChange={this.TabChange}>
              <TabPane
                tab={
                  <span>
                    <Icon type="apple" />
                    学生登录
                  </span>
                }
                key="0"
              >
                {
                this.state.status == '0' ?  (
                  <Fragment>
                    <Form.Item>
                      {getFieldDecorator("studentId", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your studentId!",
                          },
                        ],
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder="学生学号"
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator("password", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Password!",
                          },
                        ],
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          type="password"
                          placeholder="密码"
                        />
                      )}
                    </Form.Item>
                  </Fragment>
                ):null}
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="android" />
                    教师登录
                  </span>
                }
                key="1"
              >
                {this.state.status=='0' ?null: (
                  <Fragment>
                    <Form.Item>
                      {getFieldDecorator("studentId", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ],
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder="教师工号"
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator("password", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Password!",
                          },
                        ],
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          type="password"
                          placeholder="密码"
                        />
                      )}
                    </Form.Item>
                  </Fragment>
                )}
              </TabPane>
            </Tabs>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
            <div className="change-button">
              <a
                onClick={() => {
                  history.push("/register");
                }}
              >
                没有账号？去注册
              </a>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);
export default WrappedNormalLoginForm;

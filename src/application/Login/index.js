import React, {useEffect} from "react";
import { Form, Icon, Input, Button, Checkbox, Tabs } from "antd";

import history from "../../util/history";
import {getRegister} from '../../api/index';

import Logo from "../../asserts/logo.png";
import IndexLogo from "../../asserts/index_logo.png";

import "./index.css";

const { TabPane } = Tabs;
class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

      }
    });
  };

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
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <Icon type="apple" />
                    学生登录
                  </span>
                }
                key="1"
              >
                <Form.Item>
                  {getFieldDecorator("username", {
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
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="android" />
                    教师登录
                  </span>
                }
                key="2"
              >
                <Form.Item>
                  {getFieldDecorator("username", {
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

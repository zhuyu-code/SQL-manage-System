import React from "react";
import { Form, Icon, Input, Button, Checkbox, Tabs } from "antd";

import history from "../../util/history";

import Logo from "../../asserts/logo.png";
import IndexLogo from "../../asserts/index_logo.png";

import "./index.css";

const { TabPane } = Tabs;
class NormalLoginForm extends React.Component {
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('两次密码不一致!');
        } else {
          callback();
        }
      };
    
      // validateToNextPassword = (rule, value, callback) => {
      //   const { form } = this.props;
      //   if (value && this.state.confirmDirty) {
      //     form.validateFields(['confirm'], { force: true });
      //   }
      //   callback();
      // };
    
  handleSubmit = (e) => {
    console.log("打印")
    e.preventDefault();
    console.log("打印2");
    console.log(this.props.form);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("内容")
        console.log("Received values of form: ", values);
      }
      console.log(err)
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
                    学生注册
                  </span>
                }
                key="1"
              >
                <Form.Item>
                  {getFieldDecorator("studentId", {
                    rules: [
                      {
                        required: true,
                        message: "请输入学号",
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
                  {getFieldDecorator("userName", {
                    rules: [
                      {
                        required: true,
                        message: "请输入姓名!",
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
                      placeholder="学生姓名"
                    />
                  )}
                </Form.Item>
                <Form.Item >
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '请输入合法的邮箱!',
              },
              {
                required: true,
                message: '请输入邮箱!',
              },
            ],
          })(<Input 
            prefix={
                <Icon
                  type="user"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              placeholder="邮箱"/>)}
        </Form.Item>
                <Form.Item>
                  {getFieldDecorator("school", {
                    rules: [
                      {
                        required: true,
                        message: "请输入学校!",
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
                      placeholder="学校"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("professional", {
                    rules: [
                      {
                        required: true,
                        message: "请输入专业!",
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
                      placeholder="专业"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("class", {
                    rules: [
                      {
                        required: true,
                        message: "请输入班级!",
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
                      placeholder="班级"
                    />
                  )}
                </Form.Item>
                <Form.Item hasFeedback>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "请输入密码!",
                      },
                      {
                        validator: this.validateToNextPassword,
                      },
                    ],
                  })(<Input
                    prefix={
                      <Icon
                        type="user"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="密码"
                  />)}
                </Form.Item>
                <Form.Item hasFeedback>
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "请确认你的密码!",
                      },
                      {
                        validator: this.compareToFirstPassword,
                      },
                    ],
                  })(<Input
                    onBlur={this.handleConfirmBlur}
                    prefix={
                      <Icon
                        type="user"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="确认密码"
                  />)}
                </Form.Item>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="android" />
                    教师注册
                  </span>
                }
                key="2"
              >
                <Form.Item>
                  {getFieldDecorator("workNumber", {
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
                  {getFieldDecorator("userName", {
                    rules: [
                      {
                        required: true,
                        message: "请输入用户名!",
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
                      placeholder="教师姓名"
                    />
                  )}
                </Form.Item>
                <Form.Item >
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '请输入合法的邮箱!',
              },
              {
                required: true,
                message: '请输入邮箱!',
              },
            ],
          })(<Input 
            prefix={
                <Icon
                  type="user"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              }
              placeholder="邮箱"/>)}
        </Form.Item>
                <Form.Item>
                  {getFieldDecorator("school", {
                    rules: [
                      {
                        required: true,
                        message: "请输入学校!",
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
                      placeholder="学校"
                    />
                  )}
                </Form.Item>
                <Form.Item hasFeedback>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "请输入密码!",
                      },
                      {
                        validator: this.validateToNextPassword,
                      },
                    ],
                  })(<Input
                    prefix={
                      <Icon
                        type="user"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="密码"
                  />)}
                </Form.Item>
                <Form.Item hasFeedback>
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "请确认你的密码!",
                      },
                      {
                        validator: this.compareToFirstPassword,
                      },
                    ],
                  })(<Input
                    onBlur={this.handleConfirmBlur}
                    prefix={
                      <Icon
                        type="user"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="确认密码"
                  />)}
                </Form.Item>
              </TabPane>
            </Tabs>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                注册
              </Button>
            </Form.Item>
            <div className="change-button">
              <a
                onClick={() => {
                  history.push("/login");
                }}
              >
                已有账号？去登录
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

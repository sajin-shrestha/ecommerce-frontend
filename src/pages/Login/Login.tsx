import { Form, Input, Button, Card, Typography, Row, Col } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useAuth from '../../auth/useAuth'

const { Title } = Typography

const Login = () => {
  const navigate = useNavigate()

  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const location = useLocation()

  const locationPath =
    location.state?.from || new URLSearchParams(location.search).get('redirect')
  const redirectTo = locationPath || '/home'

  const onFinish = () => {
    if (!form) {
      return
    }
    setLoading(true)

    // loginAPI(values)
    //   .then((res) => {
    //     login(res.data.access, res.data.refresh)
    //     notification.success({
    //       message: LOGIN_SUCCESS,
    //     })
    navigate(redirectTo, { replace: true })
    //   })
    //   .catch((err: AxiosError) => handleFormError(form, err))
    //   .finally(() => {
    //     form.resetFields(['password'])
    //     setLoading(false)
    //   })
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: '100vh', backgroundColor: '#f0f2f5' }}
    >
      <Col
        xs={24}
        sm={16}
        md={12}
        lg={8}
      >
        <Card
          variant="borderless"
          style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            padding: '40px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
          }}
        >
          <Title
            level={3}
            style={{ textAlign: 'center' }}
          >
            Welcome Back
          </Title>
          <Form
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter your password!' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={{
                  borderRadius: '8px',
                  backgroundColor: '#1890ff',
                  borderColor: '#1890ff',
                }}
              >
                Log In
              </Button>
            </Form.Item>
            <Form.Item>
              <div style={{ textAlign: 'center' }}>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login

import React from 'react'
import { Card, Typography, Form, Input, Flex, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.jpg'
import useLogin from '../hooks/useLogin.js';

const Login = () => {
    const {error, loading, loginUser} = useLogin();
  const handleLogin = async(values)=>{
    await loginUser(values);
  }
  return (
    <Card className='login-container'>
    <Flex gap='large'>
        {/* form */}
        <Flex vertical flex={1} align='center'>
          {/* image */}
        <Flex flex={1}>
            <img src={loginImage} className='login-image'/>

        </Flex>
            <Typography.Title level={3} strong className='title'>
                Sign In
            </Typography.Title>
            <Typography.Text type='secondary' strong className='slogan'>
                Unlock your world !
            </Typography.Text>
            <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
                <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please enter email' }, {type:'email', message:'The input is not a valid email'},]}>
                    <Input size='large' placeholder='Enter email'/>
                </Form.Item>
                <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please enter password' }, ]}>
                    <Input.Password size='large' placeholder='Enter password'/>
                </Form.Item>
                {
                    error && (
                        <Alert description={error} type='error' showIcon closable className='alert' />
                    )
                }
                <Form.Item>
                    <Button 
                    type={`${loading ? '': 'primary'}`} 
                    htmlType='submit' size='large' className='btn'>
                        {loading ? <Spin/> : 'Sign In'}
                       
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link to='/'>
                        <Button size='large' className='btn'>Create an account</Button>
                    </Link>
                </Form.Item>
            </Form>
        </Flex>
        
    </Flex>
</Card>
  )
}

export default Login
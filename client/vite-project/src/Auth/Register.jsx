import React from 'react'
import { Card, Typography, Form, Input, Flex, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import registerImage from '../assets/register.jpg'
import useSignup from '../hooks/useSignup.js';

const Register = () => {
    const { loading, error, registerUser } = useSignup();
    const handleRegister = (values) => {
        registerUser(values)
    }
  return (
    <Card className='form-container'>
    <Flex gap='large'>
        {/* form */}
        <Flex vertical flex={1} align='center'>
            <Typography.Title level={3} strong className='title'>
                Create an account
            </Typography.Title>
            <Typography.Text type='secondary' strong className='slogan'>
                Join for exclusive access !
            </Typography.Text>
            <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                <Form.Item label='Full Name' name='name' rules={[{ required: true, message: 'Please enter full name' }]}>
                    <Input size='large' placeholder='Enter fullname'/>
                </Form.Item>
                <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please enter email' }, {type:'email', message:'The input is not a valid email'},]}>
                    <Input size='large' placeholder='Enter email'/>
                </Form.Item>
                <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please enter password' }, ]}>
                    <Input.Password size='large' placeholder='Enter password'/>
                </Form.Item>
                <Form.Item label='Password' name='passwordConfirm' rules={[{ required: true, message: 'Please confirm your password' }, ]}>
                    <Input.Password size='large' placeholder='Re-enter password'/>
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
                        {loading ? <Spin/> : 'Create Account'}
                     
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link to='/login'>
                        <Button size='large' className='btn'>Already have an account ?</Button>
                    </Link>
                </Form.Item>
            </Form>
        </Flex>
        {/* image */}
        <Flex flex={1}>
            <img src={registerImage} className='auth-image'/>

        </Flex>
    </Flex>
</Card>
    
  )
}

export default Register
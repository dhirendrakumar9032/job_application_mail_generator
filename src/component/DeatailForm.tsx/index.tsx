import React from 'react'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useStore,FormData } from '@/store';
import styles from './index.module.scss'


const DetailForm = () => {
  const [form]=useForm();
  const {setFormData, setIsMailGenerated}=useStore();

  const onFinish = (values:FormData) => {
    setFormData(values);
    setIsMailGenerated(true)
  };

  return (
   <div className={styles.formContainer}>
    <h1 >Please Fill the Details</h1>
     <Form form={form} layout='vertical' className={styles.detailForm} onFinish={onFinish}>
      <Form.Item label='Name' name='name' rules={[{
        required: true,
        message: 'Please enetr name!',
      }]}>
        <Input/>
      </Form.Item>
      <Form.Item label='Job Role' name='position' rules={[
        {
            required: true,
            message: 'Please enter job role!',
  
        }
      ]}>
        <Input/>
      </Form.Item>
      <Form.Item label='Company Name' name='company' rules={[{
        required: true,
        message: 'Please enter company name!',
      }]}>
        <Input/>
      </Form.Item>
      <Form.Item label='Job Post' name='url' rules={[
        {
          required: true,
          message: 'Please enter job post URL!',
        }
      ]}>
        <Input/>
      </Form.Item>
      <Form.Item >
        <Button type='primary' htmlType='submit'>Generate Email</Button>
      </Form.Item>
    </Form>
   </div>
  )
}

export default DetailForm

import { useStore,FormData } from '@/store';
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import styles from './index.module.scss'

const {Title} =Typography;

const DetailForm = () => {
  const [form]=useForm();
  const {formData,setFormData, setIsMailGenerated}=useStore();

  const onFinish = (values:FormData) => {
    console.log('Received values of form:', values);
    setFormData(values);
    setIsMailGenerated(true)
  };

  return (
   <div className={styles.formContainer}>
    <h1 >Please Fill the Detail</h1>
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
        <Button type='primary' htmlType='submit'>Generate Mail</Button>
      </Form.Item>
    </Form>
   </div>
  )
}

export default DetailForm

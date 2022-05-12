import { CheckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Result } from 'antd';
import { motion } from 'framer-motion';
import * as React from 'react';



export const Form_0 = (props) => {

  const [registration, setRegistration] = React.useState(false)
  const [clientName, setName] = React.useState(undefined)


  const onFinishedFailed = ({ values, errorFields, outOfDate }) => {
    console.log(values, errorFields, outOfDate)

  }



  const onFinish = (values: any) => {
    (async () => {
      let newData = await fetch('http://localhost:8080/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      let data = await newData.json()
      console.log(data)

    })()
    setName(values.first_name)
    setRegistration(true)


  }

  const goBack = () => {
    setRegistration(false)
  }







  return (
    <React.Fragment>
      {registration ?
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'backIn', duration: .5 }}>

          <Result
            icon={<CheckOutlined />}
            title="Press next to continue!"
            subTitle={<p><span className='formSpan'>{clientName}</span>, We at kcm inc are proud to provide you and
              your institutions with solutions that improves lives. The following sections give us with deeper insight
              into your institution and its needs. </p>}
            extra={[
              <motion.button whileHover={{ backgroundColor: '#b88623ba' }} className='buttonAlt' onClick={goBack} key="console">
                Back
              </motion.button >,
              <Link to={`/nutrimap/${clientName}`} ><motion.button whileHover={{ backgroundColor: '#b8862369' }} className='button' key="buy">Next</motion.button ></Link>,
            ]}
          />
        </motion.div>



        :


        <Form
          name="nutrimapregistration"
          onFinish={onFinish}
          onFinishFailed={onFinishedFailed}
          scrollToFirstError
          size='large'
        >
          <h3>Nutrimap Enrollment</h3>

          <Form.Item
            name="first_name"
            label="First name"
            tooltip="What do you want others to call you?"
            rules={[

              {
                // required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="last_name"
            label="Last name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                // required: true,
                message: 'Enter your last name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            tooltip="What do you want others to call you?"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                // required: true,
                message: 'Enter a valid email address this email!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
          // rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item >
            <motion.button className='button' whileHover={{ backgroundColor: '#b8862369' }} transition={{ duration: 0 }}>Continue</motion.button>
          </Form.Item>
        </Form>
      }


    </React.Fragment>

  )
};

export default Form_0;
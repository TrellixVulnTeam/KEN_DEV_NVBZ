import {
  ClockCircleOutlined,
  ClusterOutlined,
  ConsoleSqlOutlined,
  ControlOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  ToolOutlined,
  UserAddOutlined
} from '@ant-design/icons'
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Layout,
  Popover,
  Progress,
  Radio,
  Result,
  Row,
  Select,
  Statistic,
  Steps,
  Tabs,
  Timeline,
  TreeSelect
} from 'antd'
import { fixControlledValue } from 'antd/lib/input/Input'
const { Header, Footer, Sider, Content } = Layout

import { motion } from 'framer-motion'
import { stringify } from 'querystring'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Form_0 } from './Form'

const Nutrimap = () => {
  const [registration, setRegistration] = React.useState(undefined)
  const [nutriData, setNutriData] = React.useState([])
  const [nutriInfo, setNutriInfo] = React.useState([])
  const [nutrientTrigger, setTrigger] = React.useState(false)
  const [reply, setReply] = React.useState(undefined)
  const [compare, setCompare] = React.useState(undefined)
  const [data, setData] = React.useState(undefined);

  




const handleRegistrationPartner =()=>{
  setRegistration(1)
}

const handleRegistrationClient =()=>{
  setRegistration(0)
}

  const handleNutrientTable = async value => {
    const fdcData = await fetch('http://localhost:8080/nutritionalData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        foodSelection: value
      })
    })
    const [elementName, elementDescription] = await fdcData.json()
    setNutriData(elementName)
    setNutriInfo(elementDescription)
    setTrigger(true)
  }

  React.useEffect(() => {
    const dataReply = nutriInfo.map((number, i) => {
      const { value } = number

      switch (number.nutrientName) {
        case 'Protein':
          number.analysis = `${((value / 56) * 100).toPrecision(2)}`
          break

        case 'Fiber, total dietary':
          number.analysis = `${((value / 38) * 100).toPrecision(2)}`
          number.nutrientName = 'Fiber'
          break

        case 'Carbohydrate, by difference':
          number.analysis = `${((value / 130) * 100).toPrecision(2)}`
          number.nutrientName = 'Carbohydrate'
          break

        case 'Magnesium, Mg':
          number.analysis = `${((value / 420) * 100).toPrecision(2)}`
          number.nutrientName = 'Magnesium'
          break

        case 'Calcium, Ca':
          number.analysis = `${((value / 1000) * 100).toPrecision(2)}`
          number.nutrientName = 'Calcium'
          break

        case 'Vitamin C, total ascorbic acid':
          number.analysis = `${((value / 90) * 100).toPrecision(2)}`
          number.nutrientName = 'Calcium'
          break

        case 'Vitamin E (alpha-tocopherol)':
          number.analysis = `${((value / 15) * 100).toPrecision(2)}`
          number.nutrientName = 'Calcium'
          break

        default:
          break
      }

      setCompare(number)

      return (
        <Statistic
          title={number.nutrientName}
          value={number.value}
          suffix={number.unitName.toLocaleLowerCase()}
        />
      )
    })

    setReply(dataReply)
  }, [nutriInfo])

  React.useEffect(() => {
    const dataReply1 = nutriInfo.map((number, i) => {
      const { value } = number

      switch (number.nutrientName) {
        case 'Protein':
          number.analysis = `${((value / 56) * 100).toPrecision(2)}`
          break

        case 'Fiber, total dietary':
          number.analysis = `${((value / 38) * 100).toPrecision(2)}`
          number.nutrientName = 'Fiber'
          break

        case 'Carbohydrate, by difference':
          number.analysis = `${((value / 130) * 100).toPrecision(2)}`
          number.nutrientName = 'Carbohydrate'
          break

        case 'Magnesium, Mg':
          number.analysis = `${((value / 420) * 100).toPrecision(2)}`
          number.nutrientName = 'Magnesium'
          break

        case 'Calcium, Ca':
          number.analysis = `${((value / 1000) * 100).toPrecision(2)}`
          number.nutrientName = 'Calcium'
          break

        case 'Vitamin C, total ascorbic acid':
          number.analysis = `${((value / 90) * 100).toPrecision(2)}`
          number.nutrientName = 'Vitamin C'
          break

        case 'Vitamin E (alpha-tocopherol)':
          number.analysis = `${((value / 15) * 100).toPrecision(2)}`
          number.nutrientName = 'Vitamin E'
          break

        case 'Sodium, Na':
          number.analysis = `${((value / 1500) * 100).toPrecision(2)}`
          number.nutrientName = 'Sodium'
          break

        default:
          break
      }

      setCompare(number)

      return (
        <Statistic
          title={`RIL ${number.nutrientName} `}
          value={number.analysis}
          suffix={'%'}
        />
      )
    })

    setCompare(dataReply1)
  }, [nutriInfo])

  const onFinish = async (values: any) => {
    console.log(values)
    const fdcData = await fetch('http://localhost:8080/nutrientmap/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values
      })
    })

    const responce = fdcData.json()
    console.log(responce)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const Clients = ( <Form
    name='basic'

    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete='off'
  >
    <h3 className = 'textH3'>Client Registration</h3>
    <Form.Item
      label='Business Type'
      name='businessType'
      rules={[
        { required: true, message: 'Please input your firstname!' }
      ]}
    >
      <Select
       
        placeholder='What type of business do you operate?'
        size='middle'
      >
        <Select.Option value='Casino'>Casino</Select.Option>
        <Select.Option value='Cruise Line'>Cruise Line</Select.Option>
        <Select.Option value='Hotel'>Hotel</Select.Option>
        <Select.Option value='Leisure Facility'>Leisure Facility</Select.Option>
        <Select.Option value='Resort'>Resort</Select.Option>
        <Select.Option value='Restaurant'>Restaurant</Select.Option>
        <Select.Option value='Grocery Market'>Grocery Market</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item
      label='Business Name'
      name='businessName'
      rules={[
        { required: true, message: 'Please input your firstname!' }
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label='Firstname'
      name='representativeFirstName'
      rules={[
        { required: true, message: 'Please input your firstname!' }
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label='Lastname'
      name='representativeLastName'
      rules={[
        { required: true, message: 'Please input your lastname!' }
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name='phone'
      label='Phone Number'
      rules={[
        {
          required: true,
          message: 'Please enter your phone number!'
        }
      ]}
    >
      <Input style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      name='email'
      label='Email'
      tooltip='Enter a good contact email.'
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!'
        },
        {
          required: true,
          message: 'Enter a valid email address this email!'
        }
      ]}
      hasFeedback
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
      <motion.button
        type='submit'
        whileHover={{
          color: 'black',
          fontWeight: 300,
          border: '1px solid black'
        }}
        transition={{ duration: 0.1 }}
        className='clientNutrimap'
      >
        Submit
      </motion.button>
    </Form.Item>
  </Form>) 



const Partners = ( <Form
  name='basic'

  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete='off'
  
>
  <h3 className = 'textH3'>Partner Registration</h3>
  <Form.Item
    label='Business Type'
    name='businessType'
    rules={[
      { required: true, message: 'Selecting the type of products you produce. You may select multiple options' }
    ]}
  >
    <Select
     
      placeholder='Type of products offered by your institution?'
      size='middle'
 

     
    >
      <Select.Option value='Casino'>Casino</Select.Option>
      <Select.Option value='Cruise Line'>Cruise Line</Select.Option>
      <Select.Option value='Hotel'>Hotel</Select.Option>
      <Select.Option value='Leisure Facility'>Leisure Facility</Select.Option>
      <Select.Option value='Resort'>Resort</Select.Option>
      <Select.Option value='Restaurant'>Restaurant</Select.Option>
      <Select.Option value='Grocery Market'>Grocery Market</Select.Option>
    </Select>
  </Form.Item>

  <Form.Item
    label='Business Name'
    name='businessName'
    rules={[
      { required: true, message: 'Please input your firstname!' }
    ]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label='Firstname'
    name='representativeFirstName'
    rules={[
      { required: true, message: 'Please input your firstname!' }
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label='Lastname'
    name='representativeLastName'
    rules={[
      { required: true, message: 'Please input your lastname!' }
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    name='phone'
    label='Phone Number'
    rules={[
      {
        required: true,
        message: 'Please enter your phone number!'
      }
    ]}
  >
    <Input style={{ width: '100%' }} />
  </Form.Item>

  <Form.Item
    name='email'
    label='Email'
    tooltip='Enter a good contact email.'
    rules={[
      {
        type: 'email',
        message: 'The input is not valid E-mail!'
      },
      {
        required: true,
        message: 'Enter a valid email address this email!'
      }
    ]}
    hasFeedback
  >
    <Input />
  </Form.Item>

  <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
    <motion.button
      type='submit'
      whileHover={{
        color: 'black',
        fontWeight: 300,
        border: '1px solid black'
      }}
      transition={{ duration: 0.1 }}
      className='clientNutrimap'
    >
      Submit
    </motion.button>
  </Form.Item>
</Form>);

  
      
    
  
   
    

  

  
  return (
 
    
        <Content>
          <Row justify='center' className='rowHero' gutter={[0, 16]}>
            <Col xs={22} md={12} className='registration'>
              <h1>NutriMap Overview</h1>

              <motion.p className='solutionsPageParagraph'>
                NutriMap is a data driven nutritional analysis solution
                developed to improve consumer and community wellbeing by
                analyzing final food products, locating manufacturers of
                healthier products , and connecting food designers with
                manufacturers.
              </motion.p>
              <motion.p className='solutionsValueParagraph'>
                The following examples are based on a serving size of 3.6oz.
              </motion.p>
              <Select
                style={{ width: 'fit-content' }}
                onChange={handleNutrientTable}
                defaultValue='Select one food item to view an example of Nutrimaps analysis'
                size='middle'
              >
                <Select.Option value='bread'>Bread</Select.Option>
                <Select.Option value='butter'>Butter</Select.Option>
                <Select.Option value='whole milk'>Milk</Select.Option>
                <Select.Option value='sweet potatoes'>
                  Sweet Potatoes
                </Select.Option>
              </Select>
            </Col>
          </Row>
          <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col xs={22} md={12} className='registration'>
              <h3>Analyze nutritional data</h3>
              <motion.p className='solutionsPageParagraph'>
                Analyzes the micro and macro nutrient content of individual food
                items and their various components. 
              </motion.p>

              {nutrientTrigger == false ? null : <div>{reply}</div>}
            </Col>
          </Row>

          <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col xs={22} md={12} className='registration'>
              <h3>Understand how your products affect consumers.</h3>
              <motion.p className='solutionsPageParagraph'>
                Compare the nutrient value of your finished product to
                recommended daily nutrient intake levels.
              </motion.p>
              {nutrientTrigger == false ? null : <div>{compare}</div>}
            </Col>
          </Row>

          <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col xs={22} md={12} className='registration'>
              <h3>Source and procure better products.</h3>
              <motion.p className='solutionsPageParagraph'>
                Locate maufacturers and producers of products
                that help you create better food products .
              </motion.p>
            </Col>
          </Row>

          <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col xs={22} md={12} className='registration'>
              <h3>Register below</h3>
              <motion.p className='solutionsPageParagraph'>
                Register as a supply partner or client by selecting the option
                below that best suits your institution's needs.
              </motion.p>
              <motion.button
                whileHover={{
                  color: 'black',
                  fontWeight: 300,
                  border: '1px solid #b88623'
                }}
                whileTap={{
                  color: 'black',
                  fontWeight: 200,
                  border: '1px solid #b88623'
                }}
                onClick={handleRegistrationPartner}
                transition={{ duration: 0.1 }}
                className='buttonRegistration_Client'
              >
                <span className='spanReg'>Click here </span> to register as a distribution partner.
              </motion.button>
              <motion.button
                whileHover={{
                  color: 'black',
                  fontWeight: 300,
                  border: '1px solid #b88623'
                }}

                whileTap={{
                  color: 'black',
                  fontWeight: 200,
                  border: '1px solid #b88623'
                }}
                onClick={handleRegistrationClient}
                transition={{ duration: 0.1 }}
                className='buttonRegistration_Client'
              >
                <span className='spanReg'>Client here </span> to register as a client.
              </motion.button>
            </Col>
          </Row>

          <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col xs={22} md={12} className='forms'>
            {registration?Partners:Clients}
            </Col>
          </Row>
        </Content>
    
  
  )
}

export default Nutrimap

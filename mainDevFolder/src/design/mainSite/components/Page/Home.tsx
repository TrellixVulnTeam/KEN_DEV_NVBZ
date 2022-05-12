import * as React from 'react'
import {
  Row,
  Col,
  Select,
  Collapse,
  Tree,
  Form,
  Input,
  Checkbox,
  Button,
  Card,
  Statistic,
  Divider,
  Badge,
  Popover,
  Modal,
  Carousel
} from 'antd'
import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  AudioOutlined,
  BorderOutlined,
  CaretRightOutlined,
  CheckCircleFilled,
  DownloadOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  LockOutlined,
  MobileTwoTone,
  PhoneOutlined,
  PieChartFilled,
  RightCircleOutlined,
  SettingOutlined,
  SolutionOutlined,
  ToolOutlined,
  UserOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Image } from 'antd'
import { ModuleGraphConnection } from 'webpack';
// import nutrimapImage from '../../../../../../markus-winkler-HeqXGxnsnX4-unsplash.jpg';
import { WordCloud } from '@ant-design/plots';


let history = createBrowserHistory()

const Home: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [contact, setContact] = React.useState(false)
  const [text, setText] = React.useState('')



  const [form] = Form.useForm();

  const contactUs = () => {
    setContact(!contact)
    console.log(contact)
  }

  console.log(text)
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  // React.useEffect(()=>{
  //   (async () => {
  //     let newData1 = await fetch('https://1l68e1cfol.execute-api.us-east-1.amazonaws.com/beta')

  //     , {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(values)
  //     }
  //     let data = await newData1.json()

  //     console.log(data)
  //     let newInsert = await newData.json()
  //     history.push(`/health/nutritionalanalysis/2/${newInsert}`)
  //     console.log(values)
  //   })()
  // })

  const onFinish = (values: any) => {
    ; (async () => {
      let newData = await fetch('/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      let data = await newData.json()
      console.log(data)
    })()
  }

  const getData = async () => {
    const data = await fetch('/get')
    const newData = await data.json()
    console.log(newData)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  function callback(key) {
    console.log(key)
  }

  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info)
  }

  const onExpand = () => {
    console.log('Trigger Expand')
  }

  function handleChange(value) {
    console.log(`selected ${value}`)
  }



  return (
    <React.Fragment>
      <Row justify='space-around' className='rowHero' gutter={[0, 16]}>
        <Col xs={22} md={7} className='registration'>
          <h1>Engineering business solutions that benefit the general public</h1>
          <p className='headerParagraph'>
            At KCM INC we focus on developing solutions that improve the
            well of our general public, maximize stakeholder value and
            help business optimize.
          </p>

        </Col>
        <Col xs={22} md={8} className='registration'>

          <Form
            name='basic'

            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete='off'


          >

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
          </Form>
        </Col>

      </Row>

      <Row justify='space-around' className='rowHero' gutter={[0, 100]} >
        <Col xs={22} md={7} className='paragraphSectionIntro'>

          <h1>
            <span className='sectionStartLetter'>S</span>olutions
          </h1>
          <motion.p className='headerParagraph'>
            Our solutions assist business operating within
            a broad range of industries. We design for people first then
            engineer towards improving the bottom line.
          </motion.p>
        </Col>



        <Col xs={22} md={8} className='solutionBody'>
          <Carousel 
          
          dotPosition='top'>
            <div>
                <h1 className='solutionName'>Nutri<span>-</span>Map</h1>
                <div>
                  <p>Health,Nutrition</p>
                </div>
                <p className='headerParagraph'>
                  Nutrimap or Nutritional Mapping helps fight malnutrition and improve product quality
                  by improving the nutrient content of food products. We help business
                  find the manufacturers, distributors and products
                  necessary to create nutrient rich products.
                </p>
                <Link to='/nutrimap'> <motion.button
                  whileHover={{ color: 'black', fontWeight: 300, border: '1px solid black' }}
                  transition={{ duration: .1 }}
                  className='buttonNutrimap'>Learn More</motion.button></Link>
            </div>
            <div>
              <h3 >2</h3>
            </div>
            <div>
              <h3 >3</h3>
            </div>
            <div>
              <h3 >4</h3>
            </div>
          </Carousel>

        </Col>

      </Row>

      <Row justify='space-around' className='rowHero' gutter={[0, 100]} >
        <Col xs={22} md={15} className='paragraphSectionIntro'>

          <h1>
            <span className='sectionStartLetter'>S</span>olutions
          </h1>
          <motion.p className='headerParagraph'>
            Our solutions assist business operating within
            a broad range of industries. We design for people first then
            engineer towards improving the bottom line.
          </motion.p>
        </Col>

        <Row justify='center' gutter={[0, 5]} className='descriptionDiv'>
          <Col xs={22} md={5} >
            {/* <Image preview={false} className='image' src={nutrimapImage}></Image> */}
          </Col>
          <Col xs={22} md={10} className='solutionBody'>
            <h1 className='solutionName'>Nutri<span>-</span>Map</h1>
            <div>
              <p>Health,Nutrition</p>
            </div>
            <p className='headerParagraph'>
              Nutrimap or Nutritional Mapping helps fight malnutrition and improve product quality
              by improving the nutrient content of food products. We help business
              find the manufacturers, distributors and products
              necessary to create nutrient rich products.
            </p>


            <Row justify='space-between' gutter={[0, 16]}>

              <Col xs={22} md={13} className='solutionOverview'>

                {/* <Link to='/nutrimap' className='learnMore'>
         Learn more.
     
         </Link> */}
                <Link to='/nutrimap'> <motion.button
                  whileHover={{ color: 'black', fontWeight: 300, border: '1px solid black' }}
                  transition={{ duration: .1 }}
                  className='buttonNutrimap'>Learn More</motion.button></Link>
              </Col>

            </Row>
          </Col>
        </Row>
      </Row>




    </React.Fragment>
  )
}

export default Home

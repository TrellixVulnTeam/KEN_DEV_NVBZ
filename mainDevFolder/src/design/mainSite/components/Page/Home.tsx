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
  Modal
} from 'antd'
import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  AudioOutlined,
  CaretRightOutlined,
  CheckCircleFilled,
  DownloadOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  MobileTwoTone,
  PhoneOutlined,
  RightCircleOutlined,
  SettingOutlined,
  SolutionOutlined,
  ToolOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Image } from 'antd'

let history = createBrowserHistory()

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [contact, setContact] = React.useState(false)
  const [text, setText] = React.useState('')

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
    ;(async () => {
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

  function callback (key) {
    console.log(key)
  }

  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info)
  }

  const onExpand = () => {
    console.log('Trigger Expand')
  }

  function handleChange (value) {
    console.log(`selected ${value}`)
  }

 

  return (
    <React.Fragment>
      <Row justify='space-around' className='rowHero' gutter={[0, 16]}>
        <Col xs={22} md={18} className='registration'>
          <h1>Solutions designed to benefit the general public and institutions.</h1>
          <p className = 'headerParagraph'>
            <span className='atHeader'>At</span>
            <span className='spanHeader'> KCM INC </span>
            we design enterprise level solutions that help optimize stakeholder
            value throughout various global market sectors.
          </p>
          <motion.div></motion.div>
        </Col>
        {/* <Col
          xs={24}
          md={10}
          
          className='heroSection'
          style={{
            flexFlow: 'wrap',
            justifyContent: 'space-evenly',
            alignItems:'center'
          }}
        >

          
          <SettingOutlined className='heroIcon'/>
        </Col> */}
      </Row>

      <Row justify='space-around' className='rowHero' gutter={[0, 16]}>
        <Col xs={22} md={18} className='headerSolution'>
          <h1>
            <span className='sectionStartLetter'>S</span>olutions
          </h1>
          <p className='solutionsParagraph'>
            We offer a suite of high impact solutions that help enterprises better serve their customers and improve the lives of communities they interact with. 
          </p>
          <Row className='solutionInfo'>
                    <Col xs={22} md={18} className='nutrimap'>
                      <motion.div className='solutionHeader'>
                        <h2>Nutrimap</h2>
                      </motion.div>

                      <p className='pNutrimap'>
                        Nutrimap at its core is a nutritional analysis system. However, unlike most nutritional analysis solutions - which only give the nutritional 
                        value of an item - Nutrimap provides a deep full-cycle analysis.  
                      </p>
                      <motion.div>
                        <h4>How it works</h4>
                      </motion.div>
                      
                      <div>
                        <Statistic
                          title='Number of elements and vitamins'
                          value={'20+'}
                        />
                        <Statistic
                          title='Number of macronutrients including water observed'
                          value={'7'}
                        />
                        <Statistic
                          title='Number of life-stage groups observed'
                          value={'6'}
                        />
                      </div>
                    </Col>

                    <Col xs={24} md={5}  className='nutrimap'>
                      <h2>Features:</h2>

                      <motion.p whileHover={{ scale: 1.1 }}>
                        Nutrient Report{' '}
                        <Popover
                          content={
                            <p className='popover'>
                              Identify micro and macro nutrient varialbe within
                              a given product.
                            </p>
                          }
                          title='Micronutrients'
                          trigger='click'
                        >
                          <InfoCircleOutlined />
                        </Popover>{' '}
                      </motion.p>
                      <motion.p whileHover={{ scale: 1.1 }}>
                        Nutrient Sourcing{' '}
                        <Popover
                          content={
                            <p className='popover'>
                              Locate what maufacurers, ingredients and amounts
                              effect a products nutrient profile.
                            </p>
                          }
                          title='Macronutrients'
                          trigger='click'
                        >
                          <InfoCircleOutlined />
                        </Popover>{' '}
                      </motion.p>
                      <motion.p whileHover={{ scale: 1.1 }}>
                        Life stage analysis{' '}
                        <Popover
                          content={
                            <p className='popover'>
                              A comparative analysis that provides indentifying
                              information on nutrients levels and how they
                              impact various life-stage groups.{' '}
                            </p>
                          }
                          title='Life Stage'
                          trigger='click'
                        >
                          <InfoCircleOutlined />
                        </Popover>{' '}
                      </motion.p>
                      <Link to='/nutrimap'>
                        <motion.button
                          className='button'
                          whileHover={{ backgroundColor: '#b8862369' }}
                          transition={{ duration: 0 }}
                        >
                          Onboarding
                        </motion.button>{' '}
                      </Link>
                    </Col>
                  </Row>

          

          {/* <motion.div className='solutionDiv' whileHover={{fontWeight:'500',cursor:'pointer'}} whileTap={{fontWeight:'500',borderBottom:'1px solid black'}} onClick={()=>{console.log('heelo')}}><Badge color="white" text={"IntraVest - Finance and Security Service"} /></motion.div>
          <motion.div className='solutionDiv' whileHover={{fontWeight:'500',cursor:'pointer'}} whileTap={{fontWeight:'500',borderBottom:'1px solid black'}} onClick={()=>{console.log('heelo')}}><Badge color="white" text={"Aglo - Logistic Service"} /></motion.div>
          <motion.div className='solutionDiv' whileHover={{fontWeight:'500',cursor:'pointer'}} whileTap={{fontWeight:'500',borderBottom:'1px solid black'}} onClick={()=>{console.log('heelo')}}><Badge color="white" text={"LoFarms - Agriculture Sourcing Service"} /></motion.div> */}
        </Col>
      </Row>
      <Row justify='space-around' className='rowHero' gutter={[0, 16]}>
        <Col xs={22} md={6} className='headerSolution'>
          <motion.div className='solutionHeader'>
            <SolutionOutlined className='solutionIcon' />
            <h2>Well-being</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
        <Col xs={22} md={6} className='headerSolution'>
          <motion.div className='solutionHeader'>
            <ToolOutlined className='solutionIcon' />
            <h2>Engineering</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
        <Col xs={22} md={6} className='headerSolution'>
          <motion.div className='solutionHeader'>
            <GlobalOutlined className='solutionIcon' />
            <h2>Global</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
      </Row>

      <Row className='rowHero'>
        <Col xs={24} md={20} className='nutrimap'>
          <h1>Our clients</h1>
          <motion.div className='solutionDiv'>
            <Badge
              color='#b8862369'
              text={'IntraVest - Finance and Security Service'}
            />
          </motion.div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={15} className='nutrimap'>
          <motion.div className='solutionHeader'>
            <ExperimentOutlined className='solutionIcon' />
            <h2>Nutrimap</h2>
          </motion.div>

          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
          <div>
            <Statistic title='Number of elements and vitamins' value={'20+'} />
            <Statistic
              title='Number of macronutrients including water observed'
              value={'7'}
            />
            <Statistic
              title='Number of life-stage groups observed'
              value={'6'}
            />
          </div>
        </Col>

        <Col xs={24} md={5} offset={1} className='nutrimap'>
          <h2>Features:</h2>

          <motion.p whileHover={{ scale: 1.1 }}>
            Nutrient Report{' '}
            <Popover
              content={
                <p className='popover'>
                  Identify micro and macro nutrient varialbe within a given
                  product.
                </p>
              }
              title='Micronutrients'
              trigger='click'
            >
              <InfoCircleOutlined />
            </Popover>{' '}
          </motion.p>
          <motion.p whileHover={{ scale: 1.1 }}>
            Nutrient Sourcing{' '}
            <Popover
              content={
                <p className='popover'>
                  Locate what maufacurers, ingredients and amounts effect a
                  products nutrient profile.
                </p>
              }
              title='Macronutrients'
              trigger='click'
            >
              <InfoCircleOutlined />
            </Popover>{' '}
          </motion.p>
          <motion.p whileHover={{ scale: 1.1 }}>
            Life stage analysis{' '}
            <Popover
              content={
                <p className='popover'>
                  A comparative analysis that provides indentifying information
                  on nutrients levels and how they impact various life-stage
                  groups.{' '}
                </p>
              }
              title='Life Stage'
              trigger='click'
            >
              <InfoCircleOutlined />
            </Popover>{' '}
          </motion.p>
          <Link to='/nutrimap'>
            <motion.button
              className='button'
              whileHover={{ backgroundColor: '#b8862369' }}
              transition={{ duration: 0 }}
            >
              Onboarding
            </motion.button>{' '}
          </Link>
        </Col>
      </Row>

      <Row className='rowHero'>
        <Col xs={24} md={20} offset={1} className='nutrimap'>
          <h1>Who we are.</h1>
          <p>
            Innovative solutions designed to change the way businesses interact
            with consumers.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={6} offset={1} className='nutrimap'>
          <motion.div className='solutionHeader'>
            <SolutionOutlined className='solutionIcon' />
            <h2>Well-being</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
        <Col xs={24} md={6} offset={1} className='nutrimap'>
          <motion.div className='solutionHeader'>
            <ToolOutlined className='solutionIcon' />
            <h2>Engineering</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
        <Col xs={24} md={6} offset={1} className='nutrimap'>
          <motion.div className='solutionHeader'>
            <GlobalOutlined className='solutionIcon' />
            <h2>Global</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={15} offset={1} className='nutrimap'>
          <motion.div className='solutionHeader'>
            <ToolOutlined className='solutionIcon' />
            <h2>Engineering</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={15} offset={1} className='nutrimap'>
          <motion.div className='solutionHeader'>
            <GlobalOutlined className='solutionIcon' />
            <h2>Global</h2>
          </motion.div>
          <p>
            Nutrimap provide institutions operating within the healthcare and
            food manufacturing industries with invaluable information about the
            meals they plan and foods they design.
          </p>
        </Col>
      </Row>

   
    </React.Fragment>
  )
}

export default Home

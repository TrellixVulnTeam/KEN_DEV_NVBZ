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
import { createBrowserHistory } from "history";
let history = createBrowserHistory();

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
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

  const treeData = [
    {
      title: 'Life-Stage ',
      key: '0-0',

      children: [
        {
          title: 'Infants',
          key: '0-0-0',
          isLeaf: true
        },
        {
          title: 'Children',
          isLeaf: true,

          key: '0-0-1'
        },
        {
          title: 'Pregnancy',
          isLeaf: true,

          key: '0-0-2'
        },
        {
          title: 'Lactation',
          isLeaf: true,

          key: '0-0-3'
        },
        {
          title: 'Female',
          isLeaf: true,

          key: '0-0-4'
        },
        {
          title: 'Male',
          isLeaf: true,

          key: '0-0-5'
        }
      ]
    },

    {
      title: 'Elements',
      key: '2-2',

      children: [
        {
          title: 'Calcium',
          key: '2-2-0',
          isLeaf: true
        },
        {
          title: 'Chromium',
          isLeaf: true,

          key: '2-2-1'
        },
        {
          title: 'Copper',
          isLeaf: true,

          key: '2-2-2'
        },
        {
          title: 'Fluoride',
          isLeaf: true,

          key: '2-2-3'
        },
        {
          title: 'Iodine',
          isLeaf: true,

          key: '2-2-4'
        },
        {
          title: 'Iron',
          isLeaf: true,

          key: '2-2-5'
        },
        {
          title: 'Magnesium',
          isLeaf: true,

          key: '2-2-6'
        },
        {
          title: 'Manganese',
          isLeaf: true,

          key: '2-2-7'
        },
        {
          title: 'Molybdenum',
          isLeaf: true,

          key: '2-2-8'
        },
        {
          title: 'Phosphorus',
          isLeaf: true,

          key: '2-2-9'
        },
        {
          title: 'Selenium',
          isLeaf: true,

          key: '2-2-10'
        },
        {
          title: 'Zinc',
          isLeaf: true,

          key: '2-2-11'
        },
        {
          title: 'Potassium',
          isLeaf: true,

          key: '2-2-12'
        },
        {
          title: 'Sodium',
          isLeaf: true,

          key: '2-2-13'
        },
        {
          title: 'Chloride',
          isLeaf: true,

          key: '2-2-14'
        }
      ]
    },
    {
      title: 'Vitamins',
      key: '3-3',

      children: [
        {
          title: 'Vitamin A',
          key: '3-3-0',
          isLeaf: true
        },
        {
          title: 'Vitamin C',
          isLeaf: true,

          key: '3-3-1'
        },
        {
          title: 'Vitamin D',
          isLeaf: true,

          key: '3-3-2'
        },
        {
          title: 'Vitamin E',
          isLeaf: true,

          key: '3-3-3'
        },
        {
          title: 'Vitamin K',
          isLeaf: true,

          key: '3-3-4'
        },
        {
          title: 'Thiamin',
          isLeaf: true,

          key: '3-3-5'
        },
        {
          title: 'Riboflavin',
          isLeaf: true,

          key: '3-3-6'
        },
        {
          title: 'Niacin',
          isLeaf: true,

          key: '3-3-7'
        },
        {
          title: 'Vitamin B6',
          isLeaf: true,

          key: '3-3-8'
        },
        {
          title: 'Folate',
          isLeaf: true,

          key: '3-3-9'
        },
        {
          title: 'Vitamin B12',
          isLeaf: true,

          key: '3-3-10'
        },
        {
          title: 'Pantothenic Acid',
          isLeaf: true,

          key: '3-3-11'
        },
        {
          title: 'Biotin',
          isLeaf: true,

          key: '3-3-12'
        },

        {
          title: 'Choline',
          isLeaf: true,

          key: '3-3-13'
        }
      ]
    },
    {
      title: 'Macronutrients',
      key: '4-4',

      children: [
        {
          title: 'Water',
          key: '4-4-0',
          isLeaf: true
        },
        {
          title: 'Carbohydrate',
          isLeaf: true,

          key: '4-4-1'
        },
        {
          title: 'Fiber',
          isLeaf: true,

          key: '4-4-2'
        },
        {
          title: 'Fat',
          isLeaf: true,

          key: '4-4-3'
        },
        {
          title: 'Linoleic Acid',
          isLeaf: true,

          key: '4-4-4'
        },
        {
          title: 'U+03b1' + '-Linolenic Acid',
          isLeaf: true,

          key: '4-4-5'
        },
        {
          title: 'Protein',
          isLeaf: true,

          key: '4-4-6'
        }
      ]
    }
  ]

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ]

  return (
    <React.Fragment>
      <Row justify='space-around' className='rowHero' gutter={[16, 64]}>
        <Col xs={20} md={10}  className='heroSection'>
          <h1>
            Building advanced services that benefit <span className='heroSpan'>communities</span> and{' '}
            <span className='heroSpan'>institutions</span>.
          </h1>
          <p>
            <span className='kcm'>KCM</span> <span className='kcm'>INC</span> focuses on the development of institutional quality solutions and services 
            that help improve the lives of indivduals , create inclusive markets and improve organizational performance.{' '}
          </p>
         
        </Col>
        <Col
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
        </Col>
      </Row>

      <Row className='rowSolution'>
        <Col xs={24} md={20}   className='headerSolution'>
          <h1>Services</h1>
          <p>
            Innovative solutions designed to change the way businesses interact
            with communities.
          </p>
          <motion.div className='solutionDiv' whileHover={{fontWeight:'500',cursor:'pointer'}} whileTap={{fontWeight:'500',borderBottom:'1px solid black'}} onClick={showModal}><Badge color="white" text={""} /><Link to='/nutrimap'>NutriMap - Healthcare Service</Link></motion.div>
          <motion.div className='solutionDiv' whileHover={{fontWeight:'500',cursor:'pointer'}} whileTap={{fontWeight:'500',borderBottom:'1px solid black'}} onClick={()=>{console.log('heelo')}}><Badge color="white" text={"IntraVest - Finance and Security Service"} /></motion.div>
          <motion.div className='solutionDiv' whileHover={{fontWeight:'500',cursor:'pointer'}} whileTap={{fontWeight:'500',borderBottom:'1px solid black'}} onClick={()=>{console.log('heelo')}}><Badge color="white" text={"Aglo - Logistic Service"} /></motion.div>
          <motion.div className='solutionDiv' whileHover={{fontWeight:'500',cursor:'pointer'}} whileTap={{fontWeight:'500',borderBottom:'1px solid black'}} onClick={()=>{console.log('heelo')}}><Badge color="white" text={"LoFarms - Agriculture Sourcing Service"} /></motion.div>
        </Col>
      </Row>

      <Row className='rowHero'>
        <Col xs={24} md={20}  className='nutrimap'>
          <h1>Our clients</h1>
          <motion.div className='solutionDiv' ><Badge color="#b8862369" text={"IntraVest - Finance and Security Service"} /></motion.div>

        </Col>
      </Row>

      <Row>
        <Col xs={24} md={15} offset={1} className='nutrimap'>
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

      {/* 
      <Row justify='center' className='rowHero'>
        <Col xs={24} md={15} className='solutionTree'>
          <h1>Data Points</h1>
          <Tree.DirectoryTree
            onSelect={onSelect}
            onExpand={onExpand}
            treeData={treeData}
            style={{ height: 'fit-content', backgroundColor: '#fafafa' }}
          />
        </Col>

        <Col xs={24} md={15} className='solutionTree'>
          <h1>Nutrimap playground</h1>
          <Select style={{ width: 120 }} onChange={handleChange}>
            <Select.Option value='Coca-Cola'>Coca-Cola</Select.Option>
            <Select.Option value='Chick-fil-A'>Chick-fil-A</Select.Option>
            <Select.Option value='Apple'>Apple</Select.Option>
            <Select.Option value='Carrot'>Carrot</Select.Option>
          </Select>
        </Col>

        <Col xs={24} md={15} className='faq' id='faq'>
          <h1>Nutrimap Frequently Asked Questions (FAQ)</h1>

          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Collapse.Panel
              header='How does Nutrimap compare to other nutritional analysis solutions?'
              key='1'
            >
              Nutrimap provides a complete nutrient breakdown of both micro and
              macro nutrient components of food products. Furthermore, Nutrimap
              assists food engineers in understanding how their products affect
              individuals at a specific stage in life: allow for the creation of
              healthier food products.
            </Collapse.Panel>
            <Collapse.Panel header='How much does Nutrimap cost?' key='2'>
              Pricing for Nutrimap starts at $2,000 for 10 items. Flexible
              payment options available.
            </Collapse.Panel>
            <Collapse.Panel
              header='What is the average turn around time for Nutrimap analysis?'
              key='3'
            >
              You can expect your results in 2 months.
            </Collapse.Panel>
            <Collapse.Panel
              header='Does Nutrimap analytics comply with 21 USC 343-1?'
              key='4'
            >
              Yes
            </Collapse.Panel>
            <Collapse.Panel
              header='Can Nutrimap be integrated into an existing website or mobile appication?'
              key='5'
            >
              Yes, Nutrimap can be added to an existing website for an
              additional fee.
            </Collapse.Panel>
          </Collapse>
        </Col>

        <Col xs={24} md={15} className='contactSales'>
          <motion.h1 onClick={contactUs}>
            {contact ? <ArrowDownOutlined /> : <ArrowRightOutlined />} Click
            here to begin the registration process.{' '}
          </motion.h1>
          {contactForm()}
        </Col>
        <Button onClick={getData}>Api Test 11</Button>
      </Row> */}
    </React.Fragment>
  )
}

export default Home

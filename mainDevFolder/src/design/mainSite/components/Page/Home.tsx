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
  PieChartFilled,
  RightCircleOutlined,
  SettingOutlined,
  SolutionOutlined,
  ToolOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Image } from 'antd'
import { ModuleGraphConnection } from 'webpack';
// import nutrimapImage from '../../../../../../AdobeStock_257371575.jpeg';

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
        <Col xs={22} md={20} className='registration'>
          <h1>Business services that improve consumer wellbeing and
            stakeholder value. </h1>
          <p className='headerParagraph'>
            <span className='atHeader'>At</span>
            KCM INC 
            we design enterprise level solutions that help organizations
            operating within multiple market sectors optimize by focusing 
            on what matters most: people.
          </p>
        
        </Col>
       
      </Row>

      <Row justify='space-around' className='rowHero' gutter={[0, 100]} >
        <Col xs={22} md={18} className='paragraphSectionIntro'>
          
          <h1>
            <span className='sectionStartLetter'>S</span>olutions
          </h1>
          <p className='solutionsParagraph'>
            We offer a suite of high impact solutions that help
             organizations scale, innovate and optimize more impactfully.
             </p>
        </Col>

      <Row justify='center' gutter = {[0,5]} >
        <Col xs={22} md={5}>
          {/* <Image className='image' src={nutrimapImage} preview={false}></Image> */}
          </Col>
        <Col xs={22} md={13} className='solutionBody'>
          <h1 className = 'solutionName'>Nutri<span>-</span>Map</h1>
          <p className='headerParagraph'>
            Nutrimap is a nutritional analysis system developed to 
            help institutions <span className='tagWords'>source</span> better products, 
             <span className='tagWords'> design </span> healthier food and  
             <span className='tagWords'> improve</span> consumer health.
          </p>
          
         
          <Row justify='space-between' gutter={[0,16]}>
          
          <Col xs={22} md={13} className = 'solutionOverview'>
           
         <Link to='/nutrimap'>
         <CaretRightOutlined />Learn more.
         </Link>
           </Col>

          </Row>
        </Col>   
        </Row>  
      </Row>




    </React.Fragment>
  )
}

export default Home

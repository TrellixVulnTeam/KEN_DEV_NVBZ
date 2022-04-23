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
import { ModuleGraphConnection } from 'webpack'

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
        <Col xs={22} md={8} className='registration'>
          <h1>Solutions designed to benefit the general public and institutions.</h1>
          <p className='headerParagraph'>
            <span className='atHeader'>At</span>
            <span className='spanHeader'> KCM INC </span>
            we design enterprise level solutions that help optimize stakeholder
            value throughout various global market sectors.
          </p>
          <motion.button className='button'>
            Services Division
          </motion.button>
          <motion.div></motion.div>
        </Col>
        <Col xs={22} md={8}

          className='registration'
          style={{
            flexFlow: 'wrap',
            alignItems: 'center'
          }}
        >


          <SettingOutlined className='heroIcon' />
        </Col>
      </Row>

      <Row justify='space-around' className='rowHero' gutter={[0, 16]} >
        <Col xs={22} md={8} className='registration'>
          <h1>
            <span className='sectionStartLetter'>S</span>olutions
          </h1>
          <p className='solutionsParagraph'>
            We offer a suite of high impact solutions that help enterprises better
            serve their customers and improve the lives of communities they interact with.
          </p>
        </Col>
        <Col xs={20} md={8} className='nutrimap'>
          <motion.div className='solutionsDiv'>
            <Collapse defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              onChange={callback} ghost>
              <Collapse.Panel

                header="NutriMap" key="1">
                <motion.div className='solutionsDiv'>
                  <motion.div className='solutionHeader'>
                    <h2>Nutrimap</h2>
                  </motion.div>

                  <p className='pNutrimap'>
                    Nutrimap at its core is a nutritional analysis system. However, unlike most nutritional analysis solutions - which only give the nutritional
                    value of an item - Nutrimap provides a deep full-cycle analysis.
                  </p>


                  <motion.table>
                    <motion.thead>
                      <motion.tr>
                        <motion.th>
                          <h4>How it works</h4>
                        </motion.th>

                      </motion.tr>

                    </motion.thead>
                    <motion.tbody>
                      <motion.tr>
                        <motion.td>
                          <p>dello</p>
                        </motion.td>

                      </motion.tr>
                      <motion.tr>
                        <motion.td>
                          <p>dello</p>
                        </motion.td>

                      </motion.tr>
                    </motion.tbody>
                  </motion.table>
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
                </motion.div>
              </Collapse.Panel>
              <Collapse.Panel header="IntraVest" key="2">
                <p>IntraVest</p>
              </Collapse.Panel>
              <Collapse.Panel header="LoFarm" key="3">
                <p>LoFarm</p>
              </Collapse.Panel>
              <Collapse.Panel header="AgLo" key="4">
                <p>AgLo</p>
              </Collapse.Panel>
            </Collapse>

          </motion.div>

        </Col>
      </Row>




    </React.Fragment>
  )
}

export default Home

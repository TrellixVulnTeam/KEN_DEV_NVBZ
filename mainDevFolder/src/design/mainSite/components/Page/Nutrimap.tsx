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
  const [registration, setRegistration] = React.useState(false)
  const [nutriData, setNutriData] = React.useState([])
  const [nutriInfo, setNutriInfo] = React.useState([])
  const [nutrientTrigger, setTrigger] = React.useState(false)
  const [reply, setReply] = React.useState(undefined)

  // const onInput = (values: any) => {
  //   console.log(values)
  // }

  // const handleChange = value => {
  //   console.log(value)
  // }
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
      console.log()

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

      return (
        <motion.div key={number.nutrientName}>
          <p style={{ width: 96 }}>{String(number.nutrientName)}</p>
          <div>
            <p>{`${number.value}${number.unitName.toLocaleLowerCase()}`}</p>
          </div>
          <p>{number.analysis}</p>
        </motion.div>
      )
    })
    setReply(dataReply)
  }, [nutriInfo])

  return (
    <Layout>
      {/* <Sider>
           <Row gutter={[0,16]} justify='center'>
               <Col>
               <Button className='registrationButton' icon={<UserAddOutlined />}>Representative hjkkjh</Button>
               </Col>
               <Col>
               <Button className='registrationButton' icon={<ClusterOutlined />}>Institution</Button>
               </Col>
               <Col>
               <Button className='registrationButton' icon={<ToolOutlined />}>Service</Button>
               </Col>
           </Row>
       
       </Sider> */}
      <Layout>
        <Content>
          <Row justify='space-around' className='rowHero' gutter={[0, 16]}>
            <Col xs={22} className='registration'>
              <h1>NutriMap Overview</h1>

              <motion.p>
                NutriMap is a nutritional analysis service developed to help
                food manufacturers design healthier products and healthcare
                institutions create better nutritional plans.
              </motion.p>
            </Col>
            <Col
              xs={22}
              md={10}
              className='registration'
              // style={{
              //   flexFlow: 'wrap',
              //   justifyContent: 'space-evenly',
              //   alignItems: 'end',
              //   height:'315.94px'
              // }}
            >
              <h3>Service Features:</h3>

              <motion.p whileHover={{ fontWeight: '500', cursor: 'pointer' }}>
                Nutritive Value Report{' '}
                <Popover
                  content={
                    <p className='popover'>
                      Understand the micro and macro nutrient content of the
                      products you design.
                    </p>
                  }
                  title='Nutritive Value Report'
                  trigger='click'
                >
                  <InfoCircleOutlined />
                </Popover>{' '}
              </motion.p>
              <motion.p whileHover={{ fontWeight: '500', cursor: 'pointer' }}>
                Nutrient Sourcing Mapping{' '}
                <Popover
                  content={
                    <p className='popover'>
                      Locate the source of a nutrient value and decompose it
                      data ecosystem.
                    </p>
                  }
                  title='Nutrient Sourcing Mapping'
                  trigger='click'
                >
                  <InfoCircleOutlined />
                </Popover>{' '}
              </motion.p>
              <motion.p whileHover={{ fontWeight: '500', cursor: 'pointer' }}>
                Life-Phase Impact Report{' '}
                <Popover
                  content={
                    <p className='popover'>
                      Understand how the nutrient levels in your product affect
                      individuals of various age groups and life phases.{' '}
                    </p>
                  }
                  title='Life-Phase Impact Report'
                  trigger='click'
                >
                  <InfoCircleOutlined />
                </Popover>{' '}
              </motion.p>

              {/* <Form_0  /> */}
            </Col>

            <Col xs={22} md={10} className='registration'>
              {/* <Form_0/> */}
              <motion.div>
                <h2>Nutrimap Label</h2>
                <Select
                  style={{ width: 'fit-content' }}
                  onChange={handleNutrientTable}
                  defaultValue='Select food item'
                >
                  <Select.Option value='whole milk'>Whole milk</Select.Option>
                  <Select.Option value='bread'>Bread</Select.Option>
                  <Select.Option value='sweet potatoes'>
                    Sweet potatoes
                  </Select.Option>
                </Select>
              </motion.div>
              <motion.div>
                <p>Serving(g)</p>
                <p></p>
                <InputNumber min={0} max={100} step={5} defaultValue={100} size="small"/>
               
              </motion.div>
              <motion.div>
                <p>Element</p>
                <p></p>
                <p>Amount</p>

                {/* <p>{nutriData.foods[0].fdcId}</p> */}
              </motion.div>
              {nutrientTrigger == false ? <p>true</p> : reply}

              {/* <Timeline >
    <Timeline.Item>Client on boarding</Timeline.Item>
    <Timeline.Item color="green">Product recording</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Supplier research
    </Timeline.Item>
    <Timeline.Item color="red">Research Summary</Timeline.Item>
    <Timeline.Item> Recipe design </Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Nutrient investigation
    </Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Nutrient source mapping
    </Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Life Stage mapping
    </Timeline.Item>
  </Timeline> */}
            </Col>
          </Row>

          <Row className='rowHero'></Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Nutrimap

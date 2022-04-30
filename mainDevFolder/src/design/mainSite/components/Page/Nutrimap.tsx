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
  const [compare, setCompare] = React.useState(undefined)


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
         
          <Statistic title={number.nutrientName} value={number.value} suffix={number.unitName.toLocaleLowerCase()} />

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
         
          <Statistic title={`RIL ${number.nutrientName} `} value={number.analysis} suffix={'%'} />

      )
    })
    setCompare(dataReply1)
  }, [nutriInfo])




  console.log(compare)
  return (
    <Layout>
     
      <Layout>
        <Content>
          <Row justify='center' className='rowHero' gutter={[0, 16]}>
            <Col xs={22} md={12} className='registration'>
              <h1>NutriMap Overview</h1>

              <motion.p>
                NutriMap is a nutritional analysis service developed to help
                food manufacturers design healthier products and healthcare
                institutions create better nutritional plans.
              </motion.p>
            </Col>

            </Row>
            <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col
              xs={22}
              md={12}
              className='registration'
            >
              <h3>Analyze nutritional data</h3>
              <motion.p>
                Analyzes the micro and macro nutrient 
                content of individual food items.
              </motion.p>
              <Select
                  style={{ width: 'fit-content' }}
                  onChange={handleNutrientTable}
                  defaultValue='Select one food item'
                  size='middle'
                >
                  <Select.Option value='whole milk'>Milk</Select.Option>
                  <Select.Option value='sweet potatoes'>
                    Eggs
                  </Select.Option>
                </Select>
                {nutrientTrigger == false ? null : <div>{reply}</div>}
            </Col>   
          </Row>

          <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col
              xs={22}
              md={12}
              className='registration'
            >
              <h3>Understand how your products affect consumers.</h3>
              <motion.p>
                We compare a product's nutrient values to 
                recommended intake levels prescribed by the world's leading 
                health research institutions.
              </motion.p>
              {nutrientTrigger == false ? null : <div>{compare}</div>}
            </Col>   
          </Row>

          <Row justify='center' className='rowHero' gutter={[0, 8]}>
            <Col
              xs={22}
              md={12}
              className='registration'
            >
              <h3>Understand how your products affect consumers.</h3>
              <motion.p>
                We compare a product's nutrient values to 
                recommended intake levels prescribed by the world's leading 
                health research institutions.
              </motion.p>
              {nutrientTrigger == false ? null : <div>{compare}</div>}
            </Col>   
          </Row>

          
        </Content>
      </Layout>
    </Layout>
  )
}

export default Nutrimap

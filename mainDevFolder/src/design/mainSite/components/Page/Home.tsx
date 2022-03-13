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
  Popover
} from 'antd'
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  DownloadOutlined,
  InfoCircleOutlined,
  PhoneOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

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

  const contactForm = () => {
    switch (contact) {
      case false:
        return <p>{null}</p>
        break

      case true:
        return (
          <Row>
            <Col xs={24}>
              <Form
                name='basic'
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='on'
                size='small'
                style={{ width: 'fit-content' }}
              >
                <Form.Item
                  name='institution_name'
                  label='Name'
                  rules={[
                    {
                      required: true,
                      message: "Please input your instition's name."
                    }
                  ]}
                >
                  <Input placeholder='Enter name' className='input' />
                </Form.Item>

                <Form.Item
                  name='institution_email'
                  label='Email address'
                  rules={[
                    {
                      required: true,
                      message: 'Please input a valid email address.'
                    }
                  ]}
                >
                  <Input placeholder='Enter email address' className='input' />
                </Form.Item>

                <Form.Item
                  name='institution_phone'
                  label='Phone Number'
                  rules={[
                    {
                      required: true,
                      message: 'Please input a valid contact number.'
                    }
                  ]}
                >
                  <Input
                    onChange={e => {
                      setText(e.target.value)
                    }}
                    placeholder='Enter contact number'
                    className='input'
                  />
                </Form.Item>
                <Form.Item
                  name='website'
                  label='Web address'
                  rules={[{ required: false }]}
                >
                  <Input placeholder='Enter web address' className='input' />
                </Form.Item>
                <Form.Item
                  name='solution_request'
                  label='Select Solutions'
                  rules={[
                    { required: true, message: 'Please select solutions!' }
                  ]}
                >
                  <Select
                    mode='multiple'
                    className='input'
                    placeholder='Select one or more solutions'
                  >
                    <Select.Option value='NLDV'>
                      Nutritional Labeling DV
                    </Select.Option>
                    <Select.Option value='NLDV&DRI'>
                      Dietary Reference Intakes
                    </Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name='menuItems_quantity'
                  label='Select number of menu items'
                  rules={[
                    { required: true, message: 'Please select solutions!' }
                  ]}
                >
                  <Select
                    className='input'
                    placeholder='How many items are on your menu?'
                  >
                    <Select.Option value='1-10'>1-10</Select.Option>
                    <Select.Option value='11-20'>11-20</Select.Option>
                    <Select.Option value='21-30'>21-30</Select.Option>
                    <Select.Option value='31-40'>31-40</Select.Option>
                    <Select.Option value='41-50'>41-50</Select.Option>
                    <Select.Option value='50+'>50+</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name='frequencyOfChange'
                  label='Menu rotations'
                  rules={[
                    { required: true, message: 'Please select solutions!' }
                  ]}
                >
                  <Select
                    className='input'
                    placeholder='How often does your menu change?'
                  >
                    <Select.Option value='Daily'>Daily</Select.Option>
                    <Select.Option value='Weekly'>Weekly</Select.Option>
                    <Select.Option value='Monthly'>Monthly</Select.Option>
                    <Select.Option value='Quarterly'>Quarterly</Select.Option>
                    <Select.Option value='Annually'>Annually</Select.Option>
                    <Select.Option value='Fixed'>Fixed</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name='agreement'
                  valuePropName='checked'
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error('Please agree to terms of service.')
                            )
                    }
                  ]}
                >
                  <Checkbox>
                    I have read and understand the
                    <motion.button
                      whileHover={{ color: 'darkgoldenrod' }}
                      type='button'
                      className='terms'
                      onClick={showModal}
                    >
                      terms of service
                    </motion.button>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <motion.button
                    className='button'
                    whileHover={{
                      border: '2px dashed darkgoldenrod',
                      backgroundColor: 'darkgoldenrod'
                    }}
                    type='submit'
                  >
                    Submit
                  </motion.button>
                </Form.Item>
                <h1>{text}</h1>
              </Form>
            </Col>
          </Row>
        )
        break

      default:
        break
    }
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
        <Col xs={20} md={10} offset={1} className='heroSection'>
          <h1>
            Solutions that benefit <span>communities</span> and{' '}
            <span>institutions</span>.
          </h1>
          <p>
            We focuses on the development of institutional quality solutions
            that help improve communities and industries. We target
            environmental weakness effecting communites, engineer solutions to
            solve the respective problem and finally bring our world changing
            solutions directly to market.{' '}
          </p>
        </Col>
        <Col
          xs={24}
          md={10}
          offset={1}
          className='heroSection'
          style={{
            flexFlow: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'end',
            height:'315.94px'
          }}
        >
          <motion.div
            style={{ width: '35px', borderRadius: '5px' }}
            animate={{ height: '150px', backgroundColor: '#b88623' }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            style={{ width: '35px', borderRadius: '5px' }}
            animate={{ height: '175px', backgroundColor: '#b88623' }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            style={{ width: '35px', borderRadius: '5px' }}
            animate={{ height: '200px', backgroundColor: '#b88623' }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          <motion.div
            style={{ width: '35px', borderRadius: '5px' }}
            animate={{ height: '235px', backgroundColor: '#b88623' }}
            transition={{ duration: 2 }}
          ></motion.div>
          <motion.div
            style={{ width: '35px', borderRadius: '5px' }}
            animate={{ height: '250px', backgroundColor: '#b88623' }}
            transition={{ duration: 2.5 }}
          ></motion.div>
          <motion.div
            style={{ width: '35px', borderRadius: '5px' }}
            animate={{ height: '275px', backgroundColor: '#b88623' }}
            transition={{ duration: 3 }}
          ></motion.div>
        </Col>
      </Row>

      <Row  className='rowHero'>

      <Col xs={24} md={20} offset={1} className='nutrimap'>
          <h1>
            <span>Present </span>solutions
          </h1>         
           <p>
           Innovative solutions designed to change the way 
           businesses interact with consumers.
          </p>
      </Col>

      <Col xs={24} md={15} offset={1} className='nutrimap'>
      <h2>Nutri<span>map</span></h2>
          <p>
          A nutritional mapping solution providing healthcare 
          institutions,food manufacturers, and dietician with invaluable 
          nutritional information about the food they design 
          and prescribe.  
          </p>
          <div>
          <Statistic title="Underweight adults globally" value={'462'} suffix='million' />
          <Statistic title="Overweight adults globally" value={'1.6'} suffix='billion' />
          <Statistic title="World's population undernourished" value={'663'} suffix='million' />

          </div>
         
      </Col>
      <Col xs={24} md={5} offset={1}  className='nutrimap'>
          <h2>Key facts</h2>
         
          <motion.p whileHover={{scale:1.1}}>Micronutrients <Popover content={<p className='popover'>Micronutrients, often referred to as <span>vitamins</span> and <span>minerals</span>, are vital to healthy development, disease prevention, and wellbeing. With the exception of vitamin D, micronutrients are not produced in the body and must be derived from the diet.</p>} title="Micronutrients" trigger="click"><InfoCircleOutlined /></Popover> </motion.p>
          <motion.p whileHover={{scale:1.1}}>Macronutrients <Popover content={<p className='popover'>Macronutrients are a group of nutrients that provide your body with energy and the components it needs to maintain its structure and functions. Macronutrients include <span>carbohydrates</span>, <span>protein</span>, and <span>fat</span>.</p>} title="Macronutrients" trigger="click"><InfoCircleOutlined /></Popover> </motion.p>
          <motion.p whileHover={{scale:1.1}}>Life-Stage <Popover content={'klhkjj'} title="Life Stage" trigger="click"><InfoCircleOutlined /></Popover> </motion.p>   
          <Link to='/nutrimap'><motion.button className='button' whileHover={{backgroundColor:'#b8862369'}} transition={{duration:0}}>Schedule Consultation</motion.button> </Link>   
      </Col>

      <Col xs={24} md={15} offset={1} className='nutrimap'>
          <h2>Nutrimap</h2>
          <p>
            Nutrimap is a data driven nutritional analysis solution that
            provides greater insight into the food we eat and design. This
            solution gives institutions information into the nutrient content of
            food products and their affect on individuals at various stages in
            life.
          </p>
      </Col>
      <Col xs={24} md={5} offset={1}  className='nutrimap'>
          <h2>Nutrimap</h2>
          <p>
            Nutrimap is a data driven nutritional analysis solution that
            provides greater insight into the food we eat and design. This
            solution gives institutions information into the nutrient content of
            food products and their affect on individuals at various stages in
            life.
          </p>
      </Col>

      <Col xs={24} md={15} offset={1} className='nutrimap'>
          <h2>Nutrimap</h2>
          <p>
            Nutrimap is a data driven nutritional analysis solution that
            provides greater insight into the food we eat and design. This
            solution gives institutions information into the nutrient content of
            food products and their affect on individuals at various stages in
            life.
          </p>
      </Col>
      <Col xs={24} md={5} offset={1}  className='nutrimap'>
          <h2>Nutrimap</h2>
          <p>
            Nutrimap is a data driven nutritional analysis solution that
            provides greater insight into the food we eat and design. This
            solution gives institutions information into the nutrient content of
            food products and their affect on individuals at various stages in
            life.
          </p>
      </Col>
       
      </Row>


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
      </Row>
    </React.Fragment>
  )
}

export default Home

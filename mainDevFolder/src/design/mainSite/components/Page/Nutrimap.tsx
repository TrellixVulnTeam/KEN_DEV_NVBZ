import { ClockCircleOutlined, ClusterOutlined, InfoCircleOutlined, SearchOutlined, ToolOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Cascader, Checkbox, Col, DatePicker, Input, InputNumber, Layout, Popover, Progress, Radio, Result, Row, Select, Statistic, Steps,  Tabs,  Timeline,  TreeSelect } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import { motion } from 'framer-motion';
import * as React from 'react';
import { Link } from 'react-router-dom';
import {Form_0} from './Form'




const Nutrimap = () => {
  const [registration , setRegistration] = React.useState(false)


const onInput = (values:any) =>{
    console.log(values)
}



  
  
  
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
      
        
        <Col xs={22}   className='registration'>
        <h1>NutriMap Overview</h1>
         
          <motion.p >
            NutriMap is a nutritional analysis service developed to 
            help food manufacturers design healthier products 
            and healthcare institutions create better nutritional plans.   
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
         <h1>Service Features:</h1>

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

          
         {/* <Form_0  /> */}
          
    </Col>

    <Col xs={22} md={10}  className='registration'>
        <h1>Service Breakdown</h1>

        <Timeline >
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </Timeline.Item>
    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      Technical testing 2015-09-01
    </Timeline.Item>
  </Timeline>

        </Col>

      </Row>

      <Row className='rowHero'>
        
      </Row>


         </Content>
       </Layout>
     </Layout>
     
      

    )
}

export default Nutrimap
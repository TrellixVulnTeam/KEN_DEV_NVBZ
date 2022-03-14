import { ClusterOutlined, InfoCircleOutlined, SearchOutlined, ToolOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Cascader, Checkbox, Col, DatePicker, Input, InputNumber, Layout, Popover, Progress, Radio, Result, Row, Select, Statistic, Steps,  TreeSelect } from 'antd';
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
               <Button className='registrationButton' icon={<UserAddOutlined />}>Representative</Button>
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
             
         <Row justify='space-around' className='rowHero' gutter={[16, 64]}>
      
        
        <Col xs={24} md={8} offset={1}  className='registration'>
          <h2>Service Registration Portal</h2>
         
          <motion.p >
            Welcome to the Nutrimap intake portal. If any error occurs during the 
            registration process please contact us directly via <span className='formSpan'>phone</span> or <span className='formSpan'>email</span>.   
          </motion.p>
         
      </Col>
        <Col
          xs={20}
          md={13}
          
          className='heroSection'
          style={{
            flexFlow: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'end',
            height:'315.94px'
          }}
        >
      
         <Form_0  />
          
    </Col>

      </Row>
         </Content>
       </Layout>
     </Layout>
     
      

    )
}

export default Nutrimap
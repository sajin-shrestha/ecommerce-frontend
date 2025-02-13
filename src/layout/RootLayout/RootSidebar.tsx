import {
  HomeOutlined,
  RightOutlined,
  LeftOutlined,
  CustomerServiceOutlined,
  InfoCircleOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button } from 'antd'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const { Sider } = Layout

const items = [
  {
    key: '/home',
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    key: '/aboutus',
    label: 'About Us',
    icon: <InfoCircleOutlined />,
  },
  {
    key: '/products',
    label: 'Products',
    icon: <ShoppingOutlined />,
  },
  {
    key: '/cart',
    label: 'My Cart',
    icon: <ShoppingCartOutlined />,
  },
  {
    key: '/order',
    label: "My Order's",
    icon: <OrderedListOutlined />,
  },
  {
    key: '/customerservice',
    label: 'Customer Service',
    icon: <CustomerServiceOutlined />,
  },
]

const RootSidebar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      width={210}
      style={{
        borderRight: '1px solid grey',
        position: 'sticky',
        top: '0px',
      }}
      theme="light"
      collapsible={false}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="sidebar">
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={items}
          onClick={({ key }) => navigate(key)}
        />
        <Button
          className="toggle"
          shape="circle"
          style={{ fontSize: '14px', minWidth: '28px', height: '28px' }}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </Button>
      </div>
    </Sider>
  )
}

export default RootSidebar

import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons'
import { Layout, Avatar, Space, Flex, Image, Dropdown } from 'antd'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/techbazzar-logo.png'

const { Header } = Layout

const NavBar: React.FC = () => {
  const navigate = useNavigate()

  const userDropdownMenuItems = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <UserOutlined />,
      onClick: () => navigate('/profile'),
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: () => navigate('/login'),
    },
  ]

  return (
    <Header
      style={{
        background: '#fff',
        padding: '0 20px',
        borderBottom: '1px solid grey',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Flex
        justify="space-between"
        align="center"
      >
        {/* Logo */}
        <Image
          src={logo}
          style={{ width: 200, height: 50, marginBottom: 10 }}
          alt="TecBazar Logo"
        />

        {/* Right Section */}
        <Flex
          align="center"
          gap={16}
          style={{ cursor: 'pointer' }}
        >
          <Dropdown
            menu={{ items: userDropdownMenuItems }}
            trigger={['click']}
          >
            <Space size={8}>
              <Avatar icon={<UserOutlined />} />
              Sajin Shrestha
              <DownOutlined style={{ fontSize: '14px' }} />
            </Space>
          </Dropdown>
        </Flex>
      </Flex>
    </Header>
  )
}

export default NavBar

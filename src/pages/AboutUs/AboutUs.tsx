import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Divider,
  Avatar,
  Carousel,
  Image,
} from 'antd'
import { TeamOutlined, TrophyOutlined, SmileOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

const AboutUs = () => {
  return (
    <Layout>
      <Content style={{ padding: '50px', background: '#f0f2f5' }}>
        {/* Our Story Section */}
        <Row
          gutter={[32, 32]}
          align="middle"
        >
          <Col
            xs={24}
            md={12}
          >
            <Title level={3}>Our Story</Title>
            <Paragraph>
              We started our journey with a mission to revolutionize online
              shopping. Inspired by the best in the industry, our platform is
              built on the pillars of innovation, trust, and customer
              satisfaction.
            </Paragraph>
            <Paragraph>
              From our humble beginnings to becoming a recognized name in
              e-commerce, we continue to strive for excellence and deliver an
              unmatched shopping experience.
            </Paragraph>
          </Col>
          <Col
            xs={24}
            md={12}
          >
            <Card
              hoverable
              cover={
                <Image
                  alt="Our Team"
                  src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3VyJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
              }
              variant="borderless"
            >
              <Card.Meta
                title="Meet the Team"
                description="A passionate team of experts dedicated to bringing you the best online shopping experience."
              />
            </Card>
          </Col>
        </Row>

        <Divider />

        {/* Core Values Section */}
        <Row
          gutter={[32, 32]}
          justify="center"
        >
          <Col
            xs={24}
            sm={8}
          >
            <Card
              variant="borderless"
              style={{ textAlign: 'center' }}
            >
              <Avatar
                size={64}
                icon={<TeamOutlined />}
              />
              <Title
                level={4}
                style={{ marginTop: '10px' }}
              >
                Expert Team
              </Title>
              <Text>
                Our experts bring years of industry experience and innovative
                solutions.
              </Text>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={8}
          >
            <Card
              variant="borderless"
              style={{ textAlign: 'center' }}
            >
              <Avatar
                size={64}
                icon={<TrophyOutlined />}
              />
              <Title
                level={4}
                style={{ marginTop: '10px' }}
              >
                Award Winning
              </Title>
              <Text>
                Recognized for excellence and industry-leading practices.
              </Text>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={8}
          >
            <Card
              variant="borderless"
              style={{ textAlign: 'center' }}
            >
              <Avatar
                size={64}
                icon={<SmileOutlined />}
              />
              <Title
                level={4}
                style={{ marginTop: '10px' }}
              >
                Customer Focused
              </Title>
              <Text>
                Our customers are our top priority, and we work relentlessly to
                exceed their expectations.
              </Text>
            </Card>
          </Col>
        </Row>

        <Divider />

        {/* Our Journey Carousel */}
        <Title
          level={3}
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          Our Journey
        </Title>
        <Carousel autoplay>
          <div>
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Milestone 1"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
              alt="Milestone 2"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
              alt="Milestone 3"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlJTIwYmFubmVyfGVufDB8fDB8fHww"
              alt="Milestone 1"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1675883156911-6496b36c9f4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGVjb21tZXJjZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Milestone 2"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1593238404535-cda7ae2fe50b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxlY29tbWVyY2UlMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Milestone 3"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </Carousel>
      </Content>
    </Layout>
  )
}

export default AboutUs

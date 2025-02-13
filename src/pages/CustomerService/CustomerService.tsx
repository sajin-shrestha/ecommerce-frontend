import { Row, Col, Card, Typography } from 'antd'
import { CustomerServiceOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

const CustomerService = () => {
  return (
    <div
      style={{
        padding: '24px',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
      }}
    >
      {/* Custom Page Header */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '16px 24px',
          borderRadius: '4px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CustomerServiceOutlined
          style={{ fontSize: '32px', color: '#1890ff', marginRight: '16px' }}
        />
        <div>
          <Title
            level={2}
            style={{ margin: 0 }}
          >
            Customer Service
          </Title>
          <Text type="secondary">We're here to help 24/7</Text>
        </div>
      </div>

      {/* Main Content */}
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <Card
            title="FAQs"
            variant="borderless"
            hoverable
          >
            <Paragraph>
              Quickly find answers to your most frequently asked questions.
            </Paragraph>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <Card
            title="Live Chat"
            variant="borderless"
            hoverable
          >
            <Paragraph>
              Chat with our support team in real-time for immediate assistance.
            </Paragraph>
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <Card
            title="Submit a Ticket"
            variant="borderless"
            hoverable
          >
            <Paragraph>
              Can’t find what you’re looking for? Submit a ticket and we’ll get
              back to you promptly.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CustomerService

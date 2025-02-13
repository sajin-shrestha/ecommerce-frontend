import React, { useState } from 'react'
import {
  Table,
  Tag,
  Button,
  Modal,
  Typography,
  Divider,
  Descriptions,
} from 'antd'
import {
  ShoppingCartOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface OrderItem {
  id: number
  title: string
  quantity: number
  price: string
  paymentMethod: 'Online' | 'Cash on Delivery'
}

interface Order {
  id: number
  orderNumber: string
  date: string
  total: string
  status: string
  items: OrderItem[]
}

// Static Order Data
const DemoOrderList: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-001',
    date: '2025-01-10',
    total: '$1,299.00',
    status: 'Shipped',
    items: [
      {
        id: 1,
        title: 'Ultra Sleek Laptop',
        quantity: 1,
        price: '$1,299.00',
        paymentMethod: 'Online',
      },
    ],
  },
  {
    id: 2,
    orderNumber: 'ORD-002',
    date: '2025-01-15',
    total: '$1,198.00',
    status: 'Processing',
    items: [
      {
        id: 2,
        title: 'Wireless Headphones',
        quantity: 1,
        price: '$299.00',
        paymentMethod: 'Cash on Delivery',
      },
      {
        id: 3,
        title: 'Smartphone Pro',
        quantity: 1,
        price: '$899.00',
        paymentMethod: 'Online',
      },
    ],
  },
  {
    id: 3,
    orderNumber: 'ORD-003',
    date: '2025-01-15',
    total: '$1,1999.00',
    status: 'Cancelled',
    items: [
      {
        id: 2,
        title: 'Mac Battery',
        quantity: 1,
        price: '$299.00',
        paymentMethod: 'Cash on Delivery',
      },
      {
        id: 3,
        title: 'Mac Display',
        quantity: 1,
        price: '$899.00',
        paymentMethod: 'Cash on Delivery',
      },
    ],
  },
]

const Order: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  // Order Status Color & Icon
  const getStatusTag = (status: string) => {
    let color = 'blue'
    let icon = <SyncOutlined spin />

    if (status === 'Shipped') {
      color = 'green'
      icon = <CheckCircleOutlined />
    } else if (status === 'Processing') {
      color = 'orange'
      icon = <SyncOutlined spin />
    } else if (status === 'Cancelled') {
      color = 'red'
      icon = <CloseCircleOutlined />
    }
    return (
      <Tag color={color}>
        {icon} {status}
      </Tag>
    )
  }

  // Table Columns for Orders
  const orderColumns = [
    {
      title: 'Order Number',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => getStatusTag(status),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: Order) => (
        <Button
          type="link"
          onClick={() => {
            setSelectedOrder(record)
            setIsModalVisible(true)
          }}
        >
          View Details
        </Button>
      ),
    },
  ]

  // Table Columns for Order Items
  const orderItemColumns = [
    {
      title: 'Product',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
      render: (method: string) =>
        method === 'Online' ? (
          <Tag color="blue">Online Payment</Tag>
        ) : (
          <Tag color="gold">
            <ShoppingCartOutlined /> Cash on Delivery
          </Tag>
        ),
    },
  ]

  const handleModalClose = () => {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>🛒 My Orders</Title>
      <Table
        dataSource={DemoOrderList}
        columns={orderColumns}
        rowKey="id"
      />

      {/* Order Details Modal */}
      <Modal
        open={isModalVisible}
        title={<Title level={4}>Order Details</Title>}
        onCancel={handleModalClose}
        footer={null}
        width={750}
        style={{ top: 50 }}
      >
        {selectedOrder && (
          <div>
            <Descriptions
              bordered
              column={2}
              size="middle"
            >
              <Descriptions.Item label="Order Number">
                {selectedOrder.orderNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Order Date">
                <CalendarOutlined /> {selectedOrder.date}
              </Descriptions.Item>
              <Descriptions.Item label="Total Amount">
                {selectedOrder.total}
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                {getStatusTag(selectedOrder.status)}
              </Descriptions.Item>
            </Descriptions>

            <Divider />

            <Title level={5}>🛍️ Order Items</Title>
            <Table
              dataSource={selectedOrder.items}
              columns={orderItemColumns}
              rowKey="id"
              pagination={false}
              size="small"
              style={{ marginTop: 10 }}
            />

            <Divider />
            <Paragraph type="secondary">
              <strong>Note:</strong> The payment method for each item is
              displayed above.
            </Paragraph>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Order

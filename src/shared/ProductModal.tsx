import React, { useState } from 'react'
import {
  Modal,
  Row,
  Col,
  Button,
  InputNumber,
  Typography,
  Tag,
  Space,
  Flex,
} from 'antd'
import { ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons'

const { Text, Paragraph } = Typography

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  price: string | number
  imageUrl: string
  discount?: string | number
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  title,
  price,
  imageUrl,
  discount,
}) => {
  // Static data for additional product info
  const productDescription =
    'This is an amazing product that combines quality and style. Perfect for daily use, it features state-of-the-art design and performance that exceeds expectations. Get yours today and experience the difference!'

  // State for quantity selection
  const [quantity, setQuantity] = useState<number>(1)

  // Handler functions (you can expand these to interact with your store/cart)
  const handleAddToCart = () => {
    console.log('Added to cart:', { title, price, quantity })
  }

  const handleBuyNow = () => {
    console.log('Buy Now:', { title, price, quantity })
  }

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={800}
      style={{ padding: '20px' }}
      title={title}
    >
      <Row gutter={[24, 24]}>
        {/* Left Column: Product Image */}
        <Col
          xs={24}
          md={12}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={imageUrl}
              alt={title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            {discount && (
              <Tag
                color="red"
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  fontSize: '14px',
                  padding: '4px 8px',
                }}
              >
                {`-${discount}%`}
              </Tag>
            )}
          </div>
        </Col>

        {/* Right Column: Product Details */}
        <Col
          xs={24}
          md={12}
        >
          <Space
            direction="vertical"
            size="middle"
            style={{ width: '100%' }}
          >
            {/* Pricing Section */}
            <div>
              <Text
                strong
                style={{ fontSize: '24px', marginRight: '10px' }}
              >
                ${price}
              </Text>
              {price && (
                <Text
                  delete
                  style={{ fontSize: '18px', color: '#888' }}
                >
                  ${price}
                </Text>
              )}
            </div>

            {/* Product Description */}
            <Paragraph
              style={{
                fontSize: '16px',
                color: '#555',
              }}
            >
              {productDescription}
            </Paragraph>

            {/* Quantity Selector */}
            <Flex
              align="center"
              justify="end"
              gap={8}
            >
              <Text style={{ fontSize: '16px' }}>Quantity:</Text>
              <InputNumber
                min={1}
                max={100}
                value={quantity}
                onChange={(value) => setQuantity(value as number)}
              />
            </Flex>

            {/* Action Buttons */}
            <Flex
              align="center"
              justify="end"
              gap={12}
              style={{ marginTop: '16px' }}
            >
              <Button
                type="primary"
                size="middle"
                icon={<ShoppingCartOutlined />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                type="default"
                size="middle"
                icon={<ShoppingOutlined />}
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </Flex>
          </Space>
        </Col>
      </Row>
    </Modal>
  )
}

export default ProductModal

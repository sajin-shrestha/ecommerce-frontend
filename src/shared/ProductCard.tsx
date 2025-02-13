import React from 'react'
import { Card, Flex, Tag, Image } from 'antd'

interface ProductCardProps {
  title: string
  imageUrl: string
  price: string | number
  discount?: string | number
  onClick: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageUrl,
  price,
  discount,
  onClick,
}) => {
  return (
    <Card
      hoverable
      style={{ borderRadius: '10px', overflow: 'hidden' }}
      cover={
        <Image
          alt={title}
          src={imageUrl}
          style={{ height: '300px', objectFit: 'cover' }}
          preview={false}
        />
      }
      onClick={onClick}
    >
      <Card.Meta
        title={title}
        description={
          <Flex
            justify="space-between"
            align="center"
          >
            <span>{`$${price}`}</span>
            {discount && (
              <Tag
                color="red"
                style={{ fontSize: '14px' }}
              >
                {`-${discount}%`}
              </Tag>
            )}
          </Flex>
        }
      />
    </Card>
  )
}

export default ProductCard

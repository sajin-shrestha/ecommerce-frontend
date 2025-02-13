import React, { useState } from 'react'
import { Table, Button, InputNumber, Image } from 'antd'
import { IProduct } from '../../types/product.types'
import { DemoProductList } from '../../shared/DemoData'

const Cart: React.FC = () => {
  // Initialize cart items with a default quantity of 1
  const [cartItems, setCartItems] = useState<IProduct[]>(DemoProductList)

  // Define table columns
  const columns = [
    {
      title: 'Product',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (imageUrl: string) => (
        <Image
          width={80}
          src={imageUrl}
        />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: string | number) => `$${price}`,
    },
    {
      title: 'Discount (%)',
      dataIndex: 'discount',
      key: 'discount',
      render: (discount: string | number | undefined) => `${discount ?? 0}%`, // Handle undefined
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number | undefined, record: IProduct) => (
        <InputNumber
          min={1}
          value={quantity ?? 1} // Default to 1 if undefined
          onChange={(value: number | null) => {
            if (value !== null) {
              setCartItems((prev) =>
                prev.map((item) =>
                  item.id === record.id ? { ...item, quantity: value } : item,
                ),
              )
            }
          }}
        />
      ),
    },
    {
      title: 'Subtotal',
      key: 'subtotal',
      render: (_: string, record: IProduct) => {
        const priceNum =
          typeof record.price === 'string'
            ? parseFloat(record.price.replace(/,/g, ''))
            : record.price
        const discount =
          typeof record.discount === 'string'
            ? parseFloat(record.discount)
            : record.discount ?? 0
        const quantity = record.quantity ?? 1 // Ensure quantity is at least 1
        const subtotal = priceNum * quantity * (1 - discount / 100)
        return `$${subtotal.toFixed(2)}`
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: IProduct) => (
        <Button
          danger
          onClick={() =>
            setCartItems((prev) => prev.filter((item) => item.id !== record.id))
          }
        >
          Remove
        </Button>
      ),
    },
  ]

  // Calculate overall total
  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNum =
      typeof item.price === 'string'
        ? parseFloat(item.price.replace(/,/g, ''))
        : item.price
    const discount =
      typeof item.discount === 'string'
        ? parseFloat(item.discount)
        : item.discount ?? 0
    const quantity = item.quantity ?? 1 // Ensure quantity is at least 1
    return acc + priceNum * quantity * (1 - discount / 100)
  }, 0)

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Cart</h1>
      <Table
        dataSource={cartItems}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Button type="primary">Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart

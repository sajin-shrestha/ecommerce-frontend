import React, { useState } from 'react'
import { Row, Col, Carousel, Input, Select, Pagination, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { DemoProductList } from '../../shared/DemoData'
import ProductCard from '../../shared/ProductCard'
import { IProduct } from '../../types/product.types'
import ProductModal from '../../shared/ProductModal'

const { Option } = Select
const { Title, Paragraph } = Typography

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const productsPerPage = 8

  // Filter and sort products
  const filteredProducts = DemoProductList.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  ).sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/,/g, ''))
    const priceB = parseFloat(b.price.replace(/,/g, ''))
    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA
  })

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product)
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
    setSelectedProduct(null)
  }

  return (
    <div>
      {/* Carousel Banner */}
      <Carousel autoplay>
        <div>
          <div
            style={{
              height: '300px',
              background:
                'url(https://via.placeholder.com/1200x300?text=Exclusive+Deals) center/cover',
            }}
          >
            <div
              style={{
                padding: '100px',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.3)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Title style={{ color: '#fff' }}>Exclusive Deals</Title>
              <Paragraph style={{ color: '#fff' }}>
                Grab the best tech deals now
              </Paragraph>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              height: '300px',
              background:
                'url(https://via.placeholder.com/1200x300?text=New+Arrivals) center/cover',
            }}
          >
            <div
              style={{
                padding: '100px',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.3)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Title style={{ color: '#fff' }}>New Arrivals</Title>
              <Paragraph style={{ color: '#fff' }}>
                Latest tech products just in
              </Paragraph>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Search & Sort Section */}
      <div
        style={{
          padding: '20px 50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Input
          placeholder="Search products..."
          prefix={<SearchOutlined />}
          style={{ width: '250px', marginBottom: '10px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          defaultValue="asc"
          style={{ width: '180px', marginBottom: '10px' }}
          onChange={(value) => setSortOrder(value)}
        >
          <Option value="asc">Price: Low to High</Option>
          <Option value="desc">Price: High to Low</Option>
        </Select>
      </div>

      {/* Products Grid */}
      <div style={{ padding: '20px 50px' }}>
        <Row gutter={[16, 16]}>
          {currentProducts.map((product) => (
            <Col
              key={product.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <ProductCard
                title={product.title}
                imageUrl={product.imageUrl}
                price={product.price}
                discount={product.discount}
                onClick={() => handleProductClick(product)}
              />
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Pagination
            current={currentPage}
            pageSize={productsPerPage}
            total={filteredProducts.length}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalVisible}
          onClose={handleModalClose}
          title={selectedProduct.title}
          price={selectedProduct.price}
          imageUrl={selectedProduct.imageUrl}
          discount={selectedProduct.discount}
        />
      )}
    </div>
  )
}

export default Products

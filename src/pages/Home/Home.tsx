import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Typography, Button } from 'antd'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import ProductCard from '../../shared/ProductCard'
import { DemoProductList } from '../../shared/DemoData'
import ProductModal from '../../shared/ProductModal'
import { IProduct } from '../../types/product.types'

const { Content } = Layout
const { Title, Paragraph } = Typography

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Home = () => {
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  const handleProductClick = (product: IProduct) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  // UseMemo to optimize carousel items
  const carouselItems = useMemo(() => {
    return DemoProductList.map((product) => (
      <div key={product.id}>
        <ProductCard
          title={product.title}
          imageUrl={product.imageUrl}
          price={product.price}
          discount={product.discount}
          onClick={() => handleProductClick(product)}
        />
      </div>
    ))
  }, [])

  return (
    <Content>
      {/* Hero Section */}
      <div
        style={{
          position: 'relative',
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <Title style={{ fontSize: '48px', margin: 0 }}>
          Welcome to TECBAZAR
        </Title>
        <Paragraph
          style={{ fontSize: '20px', maxWidth: '600px', margin: '20px 0' }}
        >
          Discover the latest and greatest in tech. Upgrade your lifestyle with
          exclusive deals on the hottest gadgets and electronics.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          style={{
            marginTop: '20px',
            borderRadius: '5px',
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
          }}
          onClick={() => navigate('/products')}
        >
          Shop Now
        </Button>
      </div>

      {/* Featured Products Section */}
      <div style={{ padding: '50px 20px', backgroundColor: '#f7f7f7' }}>
        <Title
          level={2}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          Today's Featured Products
        </Title>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="transform 0.5s ease-in-out" // Smooth transition effect
          transitionDuration={500} // Duration of the transition in ms
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          slidesToSlide={1} // Move one item at a time
        >
          {carouselItems}
        </Carousel>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProduct.title}
          price={selectedProduct.price}
          imageUrl={selectedProduct.imageUrl}
          discount={selectedProduct.discount}
        />
      )}
    </Content>
  )
}

export default Home

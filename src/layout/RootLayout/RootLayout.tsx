import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import RootSidebar from './RootSidebar'
import PageLoading from '../../components/PageLoading'
import NavBar from './Navbar/Navbar'
import './rootlayout.css'

export default function RootLayout() {
  return (
    <Layout style={{ height: '100vh' }}>
      <NavBar />
      <Layout style={{ height: '100vh' }}>
        <RootSidebar />
        <Content style={{ overflow: 'auto' }}>
          <div style={{ padding: '16px 24px' }}>
            <Suspense fallback={<PageLoading />}>
              <Outlet />
            </Suspense>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
        TECBAZAR ©{new Date().getFullYear()} All Rights Reserved.
      </Footer>
    </Layout>
  )
}

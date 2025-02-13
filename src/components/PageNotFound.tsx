import { Button, Flex, Result } from 'antd'
import { Link } from 'react-router-dom'

const PageNotFound: React.FC = () => (
  <Flex
    justify="center"
    align="center"
  >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you are trying to visit is unavailable."
      extra={
        <Link to="/">
          <Button type="primary">Go To Home Page</Button>
        </Link>
      }
    />
  </Flex>
)

export default PageNotFound

import { Header } from '../Header';
import Product from '../Products';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />




      </Wrapper>
    </Container>
  );
};

export default Layout
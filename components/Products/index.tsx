import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
import Image from 'next/image'
import SellerInfo from '../SellerInfo';

import tshirtImage from '../../assets/tshirt.png'

const Product: React.FC = () => {
  return (
    //Container=<div class="container">
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender</a>
      </Row>


      <Panel>
        <Column>
          <Gallery>
            <Image src={tshirtImage} height={400} width={400} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
          {/* <SellerInfo /> */}
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>

  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida</p>
        <p className="description">
          Receba o produto q vc ta esperando
        </p>
      </span>
      <span>
        <p className="title"> Garantia do vendedor</p>
        <p className="description">Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
  </Section>
);
 
const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>

      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
      a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
      <br />
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500
      </p>
  </Description>
);

export default Product;
import { Col, Row } from 'react-bootstrap';
import { BASE_PLACEHOLDER_URL } from '../../constants/constants.ts';

const AboutMe = () => {
  return (
    <>
      <Row className="justify-content-around mt-5">
        <Col lg={12} className="mb-5">
          <div className="d-flex align-items-center">
            <div className="me-3 w-75">
              <h2 className="mb-3">About me title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at atque beatae consequatur dolor
                iste iure nesciunt placeat sint. A aut blanditiis consectetur dolor enim eum illum, magnam maxime minus
                neque nesciunt nostrum, quaerat quis voluptas voluptatem? Doloribus nesciunt nulla omnis optio rerum
                tenetur ut! A aperiam est nemo nihil, optio quam repellat ullam!
              </p>
            </div>
            <div>
              <img src={BASE_PLACEHOLDER_URL + '250x350'} style={{ width: '250px' }} alt="john's pic" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AboutMe;

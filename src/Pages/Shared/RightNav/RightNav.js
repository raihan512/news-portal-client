import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/Brand1.png";
import Brand2 from "../../../assets/Brand2.png";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant='outline-primary' className='mb-3'>
          <FaGoogle /> Login with Google
        </Button>
        <Button variant='outline-dark' className='mb-3'>
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find Us on</h5>
      </div>
      <div>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src={Brand1} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={Brand2} alt='Second slide' />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightNav;

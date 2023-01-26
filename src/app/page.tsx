'use client';

import {Container, Row, Col, Stack} from 'react-bootstrap';

import SearchBar from './modules/SearchBar';
import ChordsList from './modules/ChordsList';
import ChordsBody from './modules/ChordsBody';

import styles from './page.module.css';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={4}>
          <Stack>
            <SearchBar />
            <ChordsList />
          </Stack>
        </Col>
        <Col xs={12} lg={8}>
          <ChordsBody />
        </Col>
      </Row>
    </Container>
  )
};

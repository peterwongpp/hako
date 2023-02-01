import {
  Container, Row, Col, Stack,
  Accordion,
  Button,
  Form,
  InputGroup,
  ListGroup,
} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';

type ChordType = {
  id?: string,
  singerNames: string[],
  songName: string,
  path: string,
};

export default function Admin() {
  const [allChords, setAllChords]: [ChordType[], Function] = useState([]);
  const [chords, setChords]: [ChordType[], Function] = useState([]);

  useEffect(() => {
    fetch('/api/chords')
    .then(res => res.json())
    .then((data) => {
      setAllChords(data.body);
      setChords(data.body);
    })
    .catch((e) => console.log(e));
  }, []);
  
  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      setChords(allChords);
    } else {
      const re = new RegExp(searchValue, 'ig');
      const newChords: ChordType[] = [];
      allChords.forEach((chord) => {
        if (
          chord.songName.match(re)
          || chord.singerNames.some((singerName) => singerName.match(re))
        ) {
          newChords.push(chord);
        }
      });
      setChords(newChords);
    }
  };

  const clearSearch = (e: React.MouseEvent) => {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    searchInput.value = '';
    searchInput.focus();
    setChords(allChords);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const chordId = (form.elements.namedItem('id') as HTMLInputElement).value;
    const data:ChordType = {
      songName: (form.elements.namedItem('songName') as HTMLInputElement).value,
      singerNames: (form.elements.namedItem('singerNamesCsv') as HTMLInputElement).value.split(/,/).map((v) => v.trim()),
      path: ((form.elements.namedItem('path') as HTMLInputElement).value),
    };

    const response = await fetch(`/api/chords/${chordId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    console.log('response', response);
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12}>
          <Stack gap={3}>
            <Row>
              <Col xs={2} className='d-flex justify-content-center align-self-center'>Hako</Col>
              <Col xs={10}>
                <Form>
                  <InputGroup>
                    <Form.Control id='searchInput' placeholder='Filter by song name / singers...' onChange={onSearchInputChange}/>
                    <Button variant='outline-secondary' onClick={clearSearch}>X</Button>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <ListGroup variant='flush'>
                  {chords.sort((a, b) => {
                    const aSingerNames = a.singerNames.join(', ');
                    const bSingerNames = b.singerNames.join(', ');
                    return (aSingerNames < bSingerNames ? -1 : aSingerNames > bSingerNames ? 1 : 0);
                  }).map((chord, i) => {
                    return (
                      <ListGroup.Item key={chord.id}>
                        <Accordion>
                          <Accordion.Item eventKey={i.toString()}>
                            <Accordion.Header>{chord.singerNames.join(', ')}- {chord.songName}</Accordion.Header>
                            <Accordion.Body>
                              <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className='mb-3' controlId='id'>
                                <Form.Label column sm='2'>ID</Form.Label>
                                  <Form.Control name='id' type='text' defaultValue={chord.id} readOnly plaintext />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='songName'>
                                  <Form.Label>Name</Form.Label>
                                  <Form.Control name='songName' type='text' defaultValue={chord.songName} />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='singerNamesCsv'>
                                  <Form.Label>Singer Names</Form.Label>
                                  <Form.Control name='singerNamesCSV' type='text' defaultValue={chord.singerNames.join(', ')} />
                                  <Form.Text className='text-muted'>Input in order and seperate by comma.<br />Spaces around comma will be trimmed.</Form.Text>
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='path'>
                                  <Form.Label>Path</Form.Label>
                                  <Form.Control name='path' type='text' defaultValue={chord.path} />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                              </Form>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              </Col>
            </Row>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
};

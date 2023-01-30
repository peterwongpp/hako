import {
  Container, Row, Col, Stack,
  Form,
  ListGroup,
} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

type ChordType = {
  id: string,
  singerNames: string[],
  songName: string,
  path: string,
};

export default function Home() {
  const [allChords, setAllChords]: [{[key: string]: [value: ChordType]}, Function] = useState({});
  const [chords, setChords]: [{[key: string]: [value: ChordType]}, Function] = useState({});

  useEffect(() => {
    fetch('/api/chords')
    .then(res => res.json())
    .then((data) => {
      const chords = data.body;
      const groupedBySingerNames: { [key: string]: [value?: ChordType] } = {};
      chords.forEach((chord: ChordType) => {
        const singerNames = chord.singerNames.join(', ');
        if (typeof groupedBySingerNames[singerNames] === 'undefined') { groupedBySingerNames[singerNames] = [] }
        groupedBySingerNames[singerNames].push(chord);
      });
      return groupedBySingerNames;
    })
    .then(chords => {
      setAllChords(chords);
      setChords(chords);
    })
    .catch((e) => console.log(e));
  }, []);

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      setChords(allChords);
    } else {
      const re = new RegExp(searchValue, 'ig');
      const newChords: {[key: string]: [value?: ChordType]} = {};
      Object.keys(allChords).forEach((singerNames) => {
        allChords[singerNames].forEach((chord) => {
          if (chord.songName.match(re)) {
            if (typeof newChords[singerNames] === 'undefined') { newChords[singerNames] = []; }
            newChords[singerNames].push(chord);
          }
        });
      });
      setChords(newChords);
    }
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} lg={8}>
          <Stack gap={3}>
            <Row>
              <Col xs={2} md={1} className='d-flex justify-content-center align-self-center'>Hako</Col>
              <Col xs md={11}>
                <Form>
                  <Form.Control id='searchInput' placeholder='Song name...' onChange={onSearchInputChange}/>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <ListGroup variant='flush'>
                  {Object.keys(chords).sort().map((singerNames) => {
                    return (
                      <ListGroup.Item key={singerNames}>
                        <h6>{singerNames}</h6>
                        <ul className='list-unstyled'>
                          {chords[singerNames].map((chord) => {
                            return (
                              <li id={chord.id} key={chord.id}>
                                <a href={chord.path} target='_blank' rel='noreferrer'>{chord.songName}</a>
                              </li>
                            )
                          })}
                        </ul>
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

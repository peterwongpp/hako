import {
  Container, Row, Col, Stack,
  ListGroup,
} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

import FilterForm from '@/components/filter_form';

import ChordType from '@/types/ChordType';
import GroupedChordType from '@/types/GroupedChordType';

export default function Home() {
  const [allChords, setAllChords]: [ChordType[], Function] = useState([]);
  const [chords, setChords]: [GroupedChordType, Function] = useState({});

  useEffect(() => {
    fetch('/api/chords')
    .then(res => res.json())
    .then((data) => {
      const chords = data.body;
      const grouped = chordsFormatter(chords);
      return [chords, grouped];
    })
    .then(([chords, groupedChords]) => {
      setAllChords(chords);
      setChords(groupedChords);
    })
    .catch((e) => console.log(e));
  }, []);

  const chordsFormatter = (chords: ChordType[]): GroupedChordType => {
    const grouped: GroupedChordType = {};
    chords.forEach((chord: ChordType) => {
      const singerNames = chord.singerNames.join(', ');
      if (typeof grouped[singerNames] === 'undefined') {
        grouped[singerNames] = [chord];
      } else {
        grouped[singerNames].push(chord);
      }
    });
    return grouped;
  };

  const onChordClicked = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const theFrame: HTMLIFrameElement = document.getElementById('theFrame') as HTMLIFrameElement;
    theFrame.src = (e.target as HTMLAnchorElement).getAttribute('href') as string;
  };

  return (
    <Container fluid>
      <Row className='justify-content-md-center'>
        <Col xs={3} md={4}>
          <Stack gap={3}>
            <Row>
              <Col xs={12} md={2} className='d-flex justify-content-center align-self-center'>Hako</Col>
              <Col xs={12} md={10}>
                <FilterForm allChords={allChords} setChords={setChords} formatter={chordsFormatter}></FilterForm>
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
                                <a href={chord.path} target='_blank' rel='noreferrer' onClick={onChordClicked}>{chord.songName}</a>
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
        <Col xs={9} md={8}>
          <iframe id='theFrame' width='100%' height='100%'></iframe>
        </Col>
      </Row>
    </Container>
  )
};

import {
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';

import ChordType from '@/types/ChordType';

export default function FilterForm({allChords, setChords, formatter}: { allChords: ChordType[], setChords: Function, formatter?: Function}) {
  const theFormatter = typeof formatter !== 'undefined' ? formatter : (data: any) => data;

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      setChords(theFormatter(allChords));
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
      setChords(theFormatter(newChords));
    }
  };

  const clearSearch = (e: React.MouseEvent) => {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    searchInput.value = '';
    searchInput.focus();
    setChords(theFormatter(allChords));
  };

  return (
    <Form>
      <InputGroup>
        <Form.Control id='searchInput' placeholder='Filter by song name / singers...' onChange={onSearchInputChange}/>
        <Button variant='outline-secondary' onClick={clearSearch}>X</Button>
      </InputGroup>
    </Form>
  );
};

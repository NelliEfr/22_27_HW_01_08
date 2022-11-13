import { words } from '../../data/words'
import CardsContainer from '../CardsContainer';
import Triggers from '../Triggers';
import { useState } from 'react';
import Form from '../Form';

function App() {
  const [cards, setCards] = useState(words);
  const change_to_rus = () => {
    setCards(
      cards.map(el => {
        el.lang = 'rus'
        return el
      })
    );
  }

  const change_to_de = () => {
    setCards(
      cards.map(el => {
        el.lang = 'de'
        return el
      })
    );
  }

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if (el.id === id) {
        el.lang = el.lang === 'rus' ? 'de' : 'rus'
      }
      return el
    }));
  }

  const deleteCard = (id) => {
    setCards(cards.filter(el => {
      return el.id !== id
    }));
  }

  const add_card = (de, rus) => setCards([
    ...cards,
    {
      id: Date.now(),
      de,
      rus,
      lang: 'de'
    }
  ]);
  return (
    <div>
      <Form add_card={add_card} />
      <CardsContainer cards={cards} change_to_rus={change_to_rus} change_to_de={change_to_de} change_lang={change_lang} deleteCard={deleteCard} />
      <Triggers change_to_rus={change_to_rus} change_to_de={change_to_de} />
    </div>
  );
}

export default App;

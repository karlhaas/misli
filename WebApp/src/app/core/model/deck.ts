import { Slide } from './slide';

export interface Deck {
  uuid: string;
  name: string;
  slides: Array<Slide>;
}

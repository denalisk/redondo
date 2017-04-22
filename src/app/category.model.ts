import { Image } from './image.model';

export class Category {
  constructor(public name: string, public description: string, public primaryArtist: string, public image: Image) {};
}

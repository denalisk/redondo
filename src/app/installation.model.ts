import { Image } from './image.model';

export class Installation {
  constructor(public name: string, public customer: string, public description: string, public images: Image[]) {}
}

import { Tile } from './tile.model';
import { Image } from './image.model';

export var IMAGES: Image[] = [
  new Image('.././assets/images/standin1.png', 'A standin image 1', 'Stand in Image 1', '1'),
  new Image('.././assets/images/standin2.png', 'A standin image 2', 'Stand in Image 2', '2'),
  new Image('.././assets/images/standin3.png', 'A standin image 3', 'Stand in Image 3', '3'),
  new Image('.././assets/images/standin4.png', 'A standin image 4', 'Stand in Image 4', '4'),
  new Image('.././assets/images/standin5.png', 'A standin image 5', 'Stand in Image 5', '5'),
  new Image('.././assets/images/standin6.png', 'A standin image 6', 'Stand in Image 6', '6')
];

export var TILES: Tile[] = [
  new Tile('Blue Steel', 'Classics', new Image('.././assets/images/standin1.png', 'A standin image 1', 'Stand in Image 1', '1')),
  new Tile('Red October', 'Classics', new Image('.././assets/images/standin2.png', 'A standin image 2', 'Stand in Image 2', '2')),
  new Tile('Clockwork Orange', 'Classics', new Image('.././assets/images/standin3.png', 'A standin image 3', 'Stand in Image 3', '3')),
  new Tile('Green Room', 'Sporty', new Image('.././assets/images/standin4.png', 'A standin image 4', 'Stand in Image 4', '4')),
  new Tile('Mellow Yellow', 'Sporty', new Image('.././assets/images/standin5.png', 'A standin image 5', 'Stand in Image 5', '5')),
  new Tile('Purple Haze', 'Classics', new Image('.././assets/images/standin6.png', 'A standin image 6', 'Stand in Image 6', '6')),
  new Tile('Panther Black', 'NeoModern', new Image('.././assets/images/standin1.png', 'A standin image 1', 'Stand in Image 1', '1'))
]

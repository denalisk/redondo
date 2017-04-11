export class Image {
  public static carouselArray: Image[] = [
    new Image('.././assets/images/standin1.png', 'A standin image 1', 'Stand in Image 1'),
    new Image('.././assets/images/standin2.png', 'A standin image 2', 'Stand in Image 2'),
    new Image('.././assets/images/standin3.png', 'A standin image 3', 'Stand in Image 3'),
    new Image('.././assets/images/standin4.png', 'A standin image 4', 'Stand in Image 4'),
    new Image('.././assets/images/standin5.png', 'A standin image 5', 'Stand in Image 5'),
  ];

  constructor(public srcString: string, public altString: string, public title: string) {}
}

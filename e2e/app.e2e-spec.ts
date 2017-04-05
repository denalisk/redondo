import { RedondoV1Page } from './app.po';

describe('redondo-v1 App', () => {
  let page: RedondoV1Page;

  beforeEach(() => {
    page = new RedondoV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

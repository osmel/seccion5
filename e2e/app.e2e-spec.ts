import { Seccion5Page } from './app.po';

describe('seccion5 App', function() {
  let page: Seccion5Page;

  beforeEach(() => {
    page = new Seccion5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

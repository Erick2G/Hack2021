import { InaiPage } from './app.po';

describe('inai App', function() {
  let page: InaiPage;

  beforeEach(() => {
    page = new InaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

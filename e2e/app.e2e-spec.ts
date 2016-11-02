import { LazyPage } from './app.po';

describe('lazy App', function() {
  let page: LazyPage;

  beforeEach(() => {
    page = new LazyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

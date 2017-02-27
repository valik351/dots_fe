import { DotsFePage } from './app.po';

describe('dots-fe App', () => {
  let page: DotsFePage;

  beforeEach(() => {
    page = new DotsFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

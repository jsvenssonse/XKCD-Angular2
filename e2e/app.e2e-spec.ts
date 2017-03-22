import { XKCDAngular2Page } from './app.po';

describe('xkcd-angular2 App', () => {
  let page: XKCDAngular2Page;

  beforeEach(() => {
    page = new XKCDAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

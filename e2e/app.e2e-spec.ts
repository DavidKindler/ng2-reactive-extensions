import { ReactiveExtensions2Page } from './app.po';

describe('reactive-extensions2 App', function() {
  let page: ReactiveExtensions2Page;

  beforeEach(() => {
    page = new ReactiveExtensions2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

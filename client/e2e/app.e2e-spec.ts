import { Dp3Page } from './app.po';

describe('dp3 App', function() {
  let page: Dp3Page;

  beforeEach(() => {
    page = new Dp3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

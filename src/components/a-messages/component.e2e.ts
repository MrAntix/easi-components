import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

describe('a-easi-messages', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent('<a-easi-messages></a-easi-messages>');
    element = await page.find('a-easi-messages');

    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('a-easi-extent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-easi-extent></a-easi-extent>');
    const element = await page.find('a-easi-extent');

    expect(element).toHaveClass('hydrated');
  });
});

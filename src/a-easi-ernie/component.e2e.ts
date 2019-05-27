import { newE2EPage } from '@stencil/core/testing';

describe('a-easi-ernie', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-easi-ernie></a-easi-ernie>');
    const element = await page.find('a-easi-ernie');

    expect(element).toHaveClass('hydrated');
  });
});

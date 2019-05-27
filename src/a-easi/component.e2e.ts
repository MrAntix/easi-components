import { newE2EPage } from '@stencil/core/testing';

describe('a-easi', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-easi></a-easi>');
    const element = await page.find('a-easi');

    expect(element).toHaveClass('hydrated');
  });
});

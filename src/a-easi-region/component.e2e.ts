import { newE2EPage } from '@stencil/core/testing';

describe('a-easi-severity', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-easi-severity></a-easi-severity>');
    const element = await page.find('a-easi-severity');

    expect(element).toHaveClass('hydrated');
  });
});

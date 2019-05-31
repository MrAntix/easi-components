import { newE2EPage } from '@stencil/core/testing';

describe('a-easi-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<a-easi-select></a-easi-select>');
    const element = await page.find('a-easi-select');

    expect(element).toHaveClass('hydrated');
  });
});

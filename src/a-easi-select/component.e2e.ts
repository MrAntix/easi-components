import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';

describe('a-easi-select', () => {
  let page: E2EPage;
  let element: E2EElement;

  const options = [0, 1, 2];

  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent('<a-easi-select></a-easi-select>');
    element = await page.find('a-easi-select');
    element.setProperty('options', options);

    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('select on click', async () => {
    const option = await page.find('a-easi-select >>> label:nth-child(2)');
    await option.click();

    const value = await element.getProperty('value');

    expect(value).toBe(options[1]);
  });
});

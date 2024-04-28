import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { easiDefault } from '../../models';

describe('a-easi', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent('<a-easi></a-easi>');
    element = await page.find('a-easi');
    element.setProperty('value', easiDefault);
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  it('show text always on child-adult', async () => {
    const childAdultElement = await page.find('a-easi >>> .child-adult');
    const lableElement = await childAdultElement.find('>>> label');

    element.setProperty('show-text', false);
    await page.waitForChanges();

    expect(lableElement.innerText).toBe('Extent');
  });
});

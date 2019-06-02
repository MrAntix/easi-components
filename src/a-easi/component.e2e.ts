import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { EasiDefault } from '../models';

describe('a-easi', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();

    await page.setContent('<a-easi></a-easi>');
    element = await page.find('a-easi');
    element.setProperty('value', EasiDefault);
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(element).toHaveClass('hydrated');
  });

  // TODO: https://github.com/ionic-team/stencil/issues/1530
  // it('show text always on child-adult', async () => {
  //   const childAdultElement = await page.find('a-easi >>> .child-adult >>> label');

  //   element.setProperty('show-text', false);
  //   await page.waitForChanges();

  //   expect(childAdultElement.innerText).toBe('Child');
  // });
});

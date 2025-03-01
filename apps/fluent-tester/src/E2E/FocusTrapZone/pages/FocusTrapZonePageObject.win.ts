import {
  FOCUSTRAPZONE_TESTPAGE,
  FOCUSTRAPZONE_TEST_COMPONENT,
  HOMEPAGE_FOCUSTRAPZONE_BUTTON,
} from '../../../FluentTester/TestComponents/FocusTrapZone/consts';
import { BasePage, By } from '../../common/BasePage';

class FocusTrapZonePageObject extends BasePage {
  // OVERRIDE: We use isExisting() here instead of isDisplayed() because FocusTrapZone does not have any UI to it, it's simply
  // a wrapper that adds keyboard focus functionality
  waitForPrimaryElementDisplayed(timeout?: number): void {
    const errorMsg = 'The FocusTrapZone UI Element did not load correctly. Please see logs.';
    this.waitForCondition(() => this._primaryComponent.isExisting(), errorMsg, timeout);
  }

  /*****************************************/
  /**************** Getters ****************/
  /*****************************************/
  get _testPage() {
    return By(FOCUSTRAPZONE_TESTPAGE);
  }

  get _pageName() {
    return FOCUSTRAPZONE_TESTPAGE;
  }

  get _primaryComponent() {
    return By(FOCUSTRAPZONE_TEST_COMPONENT);
  }

  get _pageButton() {
    return By(HOMEPAGE_FOCUSTRAPZONE_BUTTON);
  }
}

export default new FocusTrapZonePageObject();

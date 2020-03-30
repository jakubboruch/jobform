// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'adding applicant': (browser) => {
    const mainSelector = '#app';
    const nameSelector = 'input[name="name"]';
    const emailSelector = 'input[name="email"]';
    const dropdownSelector = '.jf-dropdown-select__field';
    const vueSelector = '.jf-checkbox[name="Vue.js"]';
    const submitSelector = '.jf-button';
    const name = 'Jakub Boruch';
    const email = 'jakub@boruch.pl';
    const skill = 'Vue.js';
    const successIcon = '.fa-thumbs-up';
    const applicantsListContainerSelector = '.applicants';
    const applicantsListLinkSelector = '#nav [name="list"]';
    const applicantNameSelector = '.jf-applicant__name';
    const applicantEmailSelector = '.jf-applicant__email';
    const applicantSkillsSelector = '.jf-applicant__skills';

    browser
      .init()
      .waitForElementVisible(mainSelector)
      .setValue(nameSelector, name)
      .setValue(emailSelector, email)
      .click(dropdownSelector)
      .click(vueSelector)
      .click(dropdownSelector)
      .click(submitSelector)
      .assert.visible(successIcon, 'Success icon is visible')
      .click(applicantsListLinkSelector)
      .assert.visible(applicantsListContainerSelector, 'Applicants list is visible')
      .assert.containsText(applicantNameSelector, name, 'Field contains name')
      .assert.containsText(applicantEmailSelector, email, 'Field contains email')
      .assert.containsText(applicantSkillsSelector, skill, 'Field contains selected skill')
      .end();
  },

  'prevent adding applicant with the same e-mail': (browser) => {
    const mainSelector = '#app';
    const nameSelector = 'input[name="name"]';
    const emailSelector = 'input[name="email"]';
    const dropdownSelector = '.jf-dropdown-select__field';
    const submitSelector = '.jf-button';
    const firstName = 'Jakub Boruch';
    const secondName = 'John Doe';
    const email = 'jakub@boruch.pl';
    const vueSelector = '.jf-checkbox[name="Vue.js"]';
    const successIcon = '.fa-thumbs-up';
    const errorIcon = '.fa-exclamation';
    browser
      .init()
      .waitForElementVisible(mainSelector)
      .setValue(nameSelector, firstName)
      .setValue(emailSelector, email)
      .click(dropdownSelector)
      .click(vueSelector)
      .click(dropdownSelector)
      .click(submitSelector)
      .assert.visible(successIcon, 'Success icon is visible')
      .setValue(nameSelector, secondName)
      .setValue(emailSelector, email)
      .click(dropdownSelector)
      .click(vueSelector)
      .click(dropdownSelector)
      .click(submitSelector)
      .assert.visible(errorIcon, 'Error icon is visible')
      .end();
  },

  'display validation errors': (browser) => {
    const mainSelector = '#app';
    const nameSelector = 'input[name="name"]';
    const nameErrorsSelector = '.jf-input[name="name"] .jf-input__error';
    const emailErrorsSelector = '.jf-input[name="email"] .jf-input__error';
    const skillsErrorsSelector = '.jf-dropdown-select[name="skills"] .jf-dropdown-select__error';
    const emailSelector = 'input[name="email"]';
    const submitSelector = '.jf-button';
    const firstName = '';
    const firstEmail = 'jakubboruch.pl';

    browser
      .init()
      .waitForElementVisible(mainSelector)
      .setValue(nameSelector, firstName)
      .setValue(emailSelector, firstEmail)
      .click(submitSelector)
      .assert.visible(nameErrorsSelector, 'Error for name field is visible')
      .assert.visible(emailErrorsSelector, 'Error for email field is visible')
      .assert.visible(skillsErrorsSelector, 'Error for skills field is visible')
      .end();
  },

  'concatenate skills': (browser) => {
    const mainSelector = '#app';
    const nameSelector = 'input[name="name"]';
    const emailSelector = 'input[name="email"]';
    const dropdownSelector = '.jf-dropdown-select__field';
    const allSkillsSelector = '.jf-checkbox';
    const submitSelector = '.jf-button';
    const name = 'Jakub Boruch';
    const email = 'jakub@boruch.pl';
    const successIcon = '.fa-thumbs-up';
    const moreSkillsSelector = '.jf-applicant__more';
    const applicantsListLinkSelector = '#nav [name="list"]';
    const iter = (elems) => {
      elems.value.forEach((element) => {
        browser.elementIdClick(element.ELEMENT);
      });
    };

    browser
      .init()
      .waitForElementVisible(mainSelector)
      .setValue(nameSelector, name)
      .setValue(emailSelector, email)
      .click(dropdownSelector)
      .elements('css selector', allSkillsSelector, iter)
      .click(dropdownSelector)
      .click(submitSelector)
      .assert.visible(successIcon, 'Success icon is visible')
      .click(applicantsListLinkSelector)
      .assert.containsText(moreSkillsSelector, '7 others', 'Field contains hidden skills')
      .end();
  },
};


Feature('finding element under shadow root');

Scenario('detect webelement under shadow root', (I) => {
    I.setCookie({ name: 'optin', value: 'true'});
});

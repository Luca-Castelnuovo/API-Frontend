document.addEventListener('DOMContentLoaded', function () {
    // Mobile Nav
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#' + burger.dataset.target);

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});

// Signup Options
const apiUmbrellaSignupOptions = {
    registrationSource: 'web',
    apiKey: 'ZOAERqZ5v0YHrvz9JTbCRdyEdhVmmtwXwOQ4127J',
    contactUrl: '{{site.url}}/contact',
    siteName: 'api.castelnuovo.xyz',
    emailFromName: 'api.castelnuovo.xyz',
    // exampleApiUrl: 'https://api.castelnuovo.xyz/imgpush?api_key= {{ api_key }}',
    signupConfirmationMessage: '<h2>What Next?</h2>' + '<ul>' + '<li>Explore our <a href="{{site.url}}/docs/">available Web services</a>.</li>' + '<li>Need more help? <a href="{{site.url}}/contact/">Contact us</a>.</li>' + '</ul>',
    verifyEmail: true,
    termsCheckbox: true,
    termsUrl: "{{site.url}}/terms"
};

// Contact Options
const apiUmbrellaContactOptions = {
    apiKey: apiUmbrellaSignupOptions.apiKey,
    contactUrl: apiUmbrellaSignupOptions.contactUrl,
    siteName: apiUmbrellaSignupOptions.siteName,
    emailFromName: apiUmbrellaSignupOptions.emailFromName,
    issuesUrl: '/issues'
};

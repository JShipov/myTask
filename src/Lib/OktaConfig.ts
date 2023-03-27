export const OktaConfig = {
    clientId: '0oa8ts454ja6NJY8R5d7',
    issuer: 'https://dev-21817805.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpCheck: true,
    i18n: {
        az: {
            "primaryauth.username.placeholder": "İstifadəçi adı", // Подсказка для поля "username"
            "primaryauth.password.placeholder": "Şifrə", // Подсказка для поля "password"
            "primaryauth.title": "Daxil ol", // Заголовок формы входа
            "primaryauth.submit": "Daxil ol", // Кнопка отправки формы входа
            "remember": "Yadda saxla", // Remember me
            "needhelp": "Daxil olmaqda kömək lazımdır?", // Need help signing in
        },
    },

    customButtons: [
        {
            title: 'Google ilə daxil olun',
            className: 'btn-customAuth',
            click: function() {
                // Need level up Okta
            }
        },
        {
            title: 'Facebook ilə daxil olun',
            className: 'btn-customAuth',
            click: function() {
                // Need level up Okta
            }
        },
    ],

    language: "az",
}
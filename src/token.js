window.onload = () => {
  YaAuthSuggest.init(
      {
         client_id: 'c46f0c53093440c39f12eff95a9f2f93',
         response_type: 'token',
         redirect_uri: 'https://examplesite.com/suggest/token'
      },
      'https://examplesite.com'
   )
   .then(({
      handler
   }) => handler())
   .then(data => console.log('Сообщение с токеном', data))
   .catch(error => console.log('Обработка ошибки', error));
};

window.onload = () => {
  document.getElementById("suggest").onclick = () => {
    YaAuthSuggest.init(
      {
         client_id: '07ba81568e504583b5f33282cfdcd5b1',
         response_type: 'token',
         redirect_uri: 'https://oauth-master-class-azure.vercel.app/token.html'
      },
      'https://oauth-master-class-azure.vercel.app/'
   )  
      .then(function(result) {
        return result.handler();
      })
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };

  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "07ba81568e504583b5f33282cfdcd5b1",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-azure.vercel.app/token.html",
      },
      "https://oauth-master-class-azure.vercel.app/",
      {
        view: "button",
        parentId: "buttonContainerId",
        buttonSize: 'm',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonBorderRadius: "22",
        buttonIcon: 'ya',
      }
    )
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token); // здесь создаётся переменная с именем result, в которую сохраняется сам OAuth-токен, который мы получаем в результате работы вставленного нами скрипта
        authorize(result); // здесь мы авторизуем пользователя с сохранённым в result OAuth-токеном
        console.log(result, data); // #а здесь сохраняем запись токена авторизации и текущей даты в логи, чтобы потом можно было проанализировать работу, если возникла ошибка
      })
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};

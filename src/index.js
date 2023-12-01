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
               return result.handler()
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
      .then(function(result) {
               return result.handler()
            })
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};

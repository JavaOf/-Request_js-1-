fetch( 'https://api.quotable.io/random')
  .then(function(response){
    if(response.status === 200){
        alert('Запрос успешно отправлен');
        return response.json()
    }else{
        alert('Неуспешно');
    }
})


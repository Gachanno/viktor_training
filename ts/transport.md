### Задание

Реализуйте класс для работы с запросами, который:

1. Содержит методы GET, PUT, POST, DELETE;
2. В методе GET  `data` трансформируется в формат GET-запроса `?key1=value1&key2=value2`;
3. По таймауту выбрасывает ошибку;
4. Умеет работать с пользовательскими заголовками;
5. После успешного ответа — необходимо возвращать в промисе сам XHR, то есть разрезолвить XHR;
6. Объект `options` должен содержать:
    - `timeout` — время на запрос. Если запрос выполняется дольше указанного времени, должен быть `reject`;
    - `data` — возможность работы с информацией: GET-параметры и JSON;
    - `headers` — объект, для описания заголовков, у которого ключ и значение всегда `string`.

```ts
class HTTPTransport {
    // todo
}

const transport = new HTTPTransport();
transport.get('https://yandex.ru').then(console.log) // Response
```

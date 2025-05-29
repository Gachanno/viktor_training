class HTTPTransport {
    request(method, url, options){
        const xhr = new XMLHttpRequest()
        const {timeoutValue = 5000, data = {}, headers = {}} = options

        if(method === 'GET' || method === 'DELETE'){
            const params = data?.params ? '?' + new URLSearchParams(data).toString() : ''
            url += params
        }

        return new Promise((resolve, reject) =>{
            xhr.open(method, `${url}${params}`, true);
            xhr.responseType = 'json'

            for (const key in headers) {
                xhr.setRequestHeader(key, headers[key]);
            }
            
            const timeout = setTimeout(()=>{
                reject(`Ошибка, сервер не отвечает`)
                xhr.abort()
            }, timeoutValue)

            xhr.onload = () =>{
                clearTimeout(timeout);
                if (xhr.status >= 200 && xhr.status < 300) { 
                    console.log(xhr.status)
                    resolve(xhr.response)
                }
                else {
                    reject(`Ошибка ${xhr.status}: ${xhr.statusText}`)
                }
            }

            xhr.onerror = () => {
                clearTimeout(timeout);
                reject('Сетевая ошибка');
            };

            if(method === 'PUT' || method === 'POST') xhr.send(data?.json)
            else xhr.send()
        })
    }

    get(url, options = {}){
        return this.request('GET', url, options)
    }

    put(url, options = {}){
        return this.request('PUT', url, options)
    }

    post(url, options = {}){
        return this.request('POST', url, options)
    }

    delete(url, options = {}){
        return this.request('DELETE', url, options)
    }
}

const transport = new HTTPTransport();
transport.get('https://jsonplaceholder.typicode.com/todos/1').then(r => console.log(r))

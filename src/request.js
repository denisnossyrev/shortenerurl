/* 
    XMLHTTPRequest
    HTTP Request: 
            GET 
            https://www.googleapis.com/urlshortener/v1/url?key={key}&shortUrl={shortUrl}&projection={projection?}
*/
//need to provide API key
import {apiKey} from './api';

const appTitle = 'Shortener Url App';
const appDiv = document.querySelector('#app');
const inputUrl = document.querySelector('#input_url');
const aShortUrl = document.querySelector('#short_url');
const aLongUrl = document.querySelector('#long_url');
const textOut = document.querySelector('#textOut');

const url = "https://www.googleapis.com/urlshortener/v1/url";


//from LONG URL to SHORT URL
const shortenUrl = () => {
    const shortUrl = inputUrl.value;
    const xhr = new XMLHttpRequest();
    const urlToRequest = `${url}?key=${apiKey}&shortUrl=${shortUrl}`;
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
            textOut.value = `${xhr.response.longUrl}`;
            inputUrl.value = '';
        }
    }

    xhr.open('GET', urlToRequest);
    xhr.send();
}

//from SHORT URL to LONG URL
const longerUrl = () => {
    const urlWithKey = url + '?key=' + apiKey;
    const urlToShorten = inputUrl.value;
    const data = JSON.stringify({longUrl: urlToShorten});
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            textOut.value = `${xhr.response.id}`;
            inputUrl.value = '';
        }
    }
    xhr.open('POST', urlWithKey);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
}
const shortUrl = () => {
    aShortUrl.addEventListener('click', () => {
        shortenUrl();
    })
}

const longUrl = () => {
    aLongUrl.addEventListener('click', () => {
        longerUrl(); 
    })
}
export {shortUrl, longUrl, appTitle};
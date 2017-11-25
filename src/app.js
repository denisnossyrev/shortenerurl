import '../node_modules/normalize.css/normalize.css';
import "./style.css";
import {xhrRequest, shortUrl, longUrl, appTitle} from './request';

document.title = appTitle;
shortUrl();
longUrl();
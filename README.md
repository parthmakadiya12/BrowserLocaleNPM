## detect-locale
- This application is ment to provide you the browser's language with minimal code with zero dependencies.Some packages uses accept-language header to detect language that cost XHR to server but here we use `navigator` to get the language.The main thing is that it supports all possible browsers.

## How to Install ?
- ``` npm install detect-locale```
- ``` yarn add detect-locale ```

## How to use ?
- ES6 way :
    ```
    import { getBrowserLocale,getShortBrowserLocale,getUserLanguages } from "detect-locale";
    console.log(` 5 character Browser Locale : String :$ {getBrowserLocale()}`);
    console.log(`2 Character Browser Locale : String 2 character: <b>{getShortBrowserLocale()}`);
    console.log(`User languages prefference : Array : <b>{getUserLanguages()}`);
    ```
- Old way
    ```
    const locale = require("detect-locale");
    console.log(` 5 character Browser Locale : String :${locale.getBrowserLocale()}`);
    console.log(`2 Character Browser Locale : String 2 character: ${locale.getShortBrowserLocale()}`);
    console.log(`User languages prefference : Array : ${locale.getUserLanguages()}`);
    ```

## Browser Suppoer
- Chrome
- Firefox
- Opera
- Edge
- IE
- chromium
- UC
- Safari

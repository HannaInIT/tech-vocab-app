# Word a day

A simple and interactive web app to help users learn and practice English vocabulary.
Includes API integration for dynamic content.

This app randomly provides words using the [Dictionary API](https://dictionaryapi.dev/).  
It also allows searching for any word to get its definitions and related information.

Images associated with words are fetched dynamically using the [Unsplash API](https://unsplash.com/developers), providing relevant visuals for better learning.

---

## Main Idea

**Trying to learn English fast?**  
We often overestimate what can be done in a single day, but underestimate what consistent effort achieves over time.  
Learning one word a day may seem small, but over time it leads to big results.  
Here, you can learn at your own pace — one word a day or as many as you want.  
Ready to start?

---

## Installation

To get started, clone the repository and install dependencies:

```bash
npm install

---

## Unsplash API Key

This project uses the Unsplash API to fetch images for words. The API key (Access Key) is currently hardcoded in the source code for simplicity.

If you want to use your own Unsplash Access Key, follow these steps:

1. Register at [Unsplash Developers](https://unsplash.com/developers) and obtain your Access Key.

2. Open the file `services/imageService.js`.

3. Locate the `Authorization` header inside the `fetch` request in the `fetchWordImage` function.

4. Replace the existing Access Key string with your own key, for example:

```js
Authorization: "Client-ID YOUR_ACCESS_KEY_HERE",


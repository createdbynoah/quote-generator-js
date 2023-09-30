// https://jacintodesign.github.io/quotes-api/data/quotes.json
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const shareBtn = document.getElementById('share');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//  Show New Quote
function newQuote() {
  // pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if author is null
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 150) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch error here
  }
}

// On Load
getQuotes();

newQuoteBtn.addEventListener('click', () => newQuote());

// copy to clipboard
const copyButton = document.getElementById('copyBtn');
const toastText = document.getElementById('toast');
copyButton.addEventListener('click', async function () {
  try {
    toastText.classList.remove('toast-exit');
    const textToCopy =
      '"' + quoteText.textContent + '"' + '\n- ' + authorText.textContent;
    await navigator.clipboard.writeText(textToCopy);
    toastText.textContent = 'Copied to clipboard!';
    setTimeout(() => {
      toastText.classList.add('toast-exit');
      setTimeout(() => {
        toastText.textContent = '';
      }, 280);
    }, 2500);
  } catch (error) {
    console.log('unable to copy text: ', error);
  }
});

const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    createdBy: "Walt Disney",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    createdBy: "Winston Churchill",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    createdBy: "Sam Levenson",
  },
  {
    quote: "Dream big and dare to fail.",
    createdBy: "Norman Vaughan",
  },
  {
    quote: "The future depends on what you do today.",
    createdBy: "Mahatma Gandhi",
  },
  {
    quote: "It always seems impossible until it's done.",
    createdBy: "Nelson Mandela",
  },
  {
    quote: "Believe you can and you're halfway there.",
    createdBy: "Theodore Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    createdBy: "Eleanor Roosevelt",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    createdBy: "Steve Jobs",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    createdBy: "Chris Grosser",
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    createdBy: "Franklin D. Roosevelt",
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    createdBy: "C.S. Lewis",
  },
  {
    quote: "If you can dream it, you can do it.",
    createdBy: "Walt Disney",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    createdBy: "Mark Twain",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    createdBy: "George Addair",
  },
  {
    quote: "Small steps every day lead to big results.",
    createdBy: "Unknown",
  },
  {
    quote: "Discipline is choosing between what you want now and what you want most.",
    createdBy: "Abraham Lincoln (attributed)",
  },
  {
    quote: "Great things never come from comfort zones.",
    createdBy: "Unknown",
  },
  {
    quote: "Don't limit your challenges. Challenge your limits.",
    createdBy: "Jerry Dunn",
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    createdBy: "Henry David Thoreau",
  },
];

const quuote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.querySelector("button");

const randomQuote = () =>{
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const random = quotes[randomIndex];
    console.log(random)
    console.log(randomIndex);
    quuote.innerText=random.quote;
    author.innerText=random.createdBy;
}
randomQuote();

button.addEventListener("click",randomQuote);

// const count = document.getElementById("count")
// const increment = document.getElementById("incre")
// const decrement = document.getElementById("dec")
// const resetBtn = document.getElementById("reset")
// let ans = 0
// // function countNum(){
// //     ans++;
// //     count.innerText=ans;
// // }
// function incrementNum(){
//     ans++;
//     count.innerText=ans;
// }
// function decrementNum(){
//     if(ans>0){
//         ans--;
//         count.innerText=ans;
//     }
// }
// function reset(){
//     ans =0;
//     count.innerText=ans;
// }
// increment.addEventListener("click",incrementNum);
// decrement.addEventListener("click",decrementNum);
// resetBtn.addEventListener("click",reset);
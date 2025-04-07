document.addEventListener("DOMContentLoaded", () => {
  // Handle collapsible sections
  document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  // Load and display a random quote
  fetch('quotes.json')
    .then(res => res.json())
    .then(quotes => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").textContent = `"${randomQuote.quote}"`;
      document.getElementById("author").textContent = `— ${randomQuote.author}`;
    })
    .catch(err => {
      document.getElementById("quote").textContent = "Failed to load quote.";
      document.getElementById("author").textContent = "";
      console.error(err);
    });
});

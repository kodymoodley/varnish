document.addEventListener("DOMContentLoaded", function() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach((block) => {
    const pre = block.parentNode;
    // Skip if button already exists
    if (pre.querySelector(".copy-button")) return;

    // Create copy button
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => { button.innerText = "Copy"; }, 2000);
      });
    });

    // Insert button before the code block
    pre.insertBefore(button, block);
  });
});

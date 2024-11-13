function update() {
  // Gets the box section and input element
  const section = document.getElementById("boxes");
  const quantity = document.getElementById("quantity");
  // Removes all previous boxes
  section.replaceChildren();
  for (let i = 1; i <= quantity.value; i++) {
    // Creates box with index identifying it
    const box = document.createElement("div");
    const text = document.createElement("p");
    box.classList.add("box");
    text.innerText = i;
    box.appendChild(text);
    // Appends to box section
    section.appendChild(box);
  }
}

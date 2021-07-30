document.querySelector("#message-input").addEventListener("keydown", (event) => {
  if(event.key === "Enter")
    getMessage();
});

document.querySelector("#submit").addEventListener("click", () => {
    getMessage();
});

getMessage = () => {
  document.querySelector("#message-output").textContent = document.querySelector("#message-input").value;
  document.querySelector("#message-input").value = "";
}

export const displayMessage = (type, message, targetElement) => {
  const msg = document.querySelector(targetElement);

  msg.innerHTML = `<div class="message-${type}">${message}</div>`;
};

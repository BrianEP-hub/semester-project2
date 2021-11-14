/* export const editModal = () => {
  const button = document.querySelector("#edit");

  if (button) {
    button.onClick = () => {
      alert("Modal opened");
    };
  }
}; */
const editModal = () => {
  const button = document.querySelector("#edit");

  if (button) {
    button.onclick = () => {
      alert("edit product");
    };
  }
};

export default editModal;

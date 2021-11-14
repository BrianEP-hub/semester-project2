const addModal = () => {
  const button = document.querySelector("#add");
  const container = document.querySelector(".add-products-modal");

  if (button) {
    button.onclick = () => {
      container.innerHTML = `
                              <h2>Add product</h2>
                                <form>
                                  <div>
                                    <label for="name">Product name</label>
                                    <input id="name" type="text" />
                                  </div>
                                  <div>
                                    <label for="name">Price</label>
                                    <input id="price" type="number" />
                                  </div>
                                  <div>
                                    <label for="description">Product description</label>
                                    <input id="description" type="text" />
                                  </div>
                                  <div>
                                    <label for="image">Image</label>
                                    <input id="image" type="file" />
                                  </div>
                                  <div>
                                    <label for="featured">Featured</label>
                                    <select name="featured" id="featured">
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                  <button class="button-add">Add</button>
                                </form>
                                
                              `;
    };
  }
};

export default addModal;

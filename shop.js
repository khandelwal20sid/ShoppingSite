let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "image1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "image2.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "image3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "image4.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "image5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Party Wear",
    size: "L",
    color: "Black",
    price: 1700,
    image: "image6.jpg",
    description: "Good looking Party Wear",
  },

  {
    id: 7,
    name: "Casual Shirt",
    size: "L",
    color: "White",
    price: 1010,
    image: "image7.jpg",
    description: "Good looking Casual Wear",
  },

  {
    id: 8,
    name: "Funckey wear",
    size: "M",
    color: "Multicolor",
    price: 1200,
    image: "image8.jpg",
    description: "Good looking funkey wear",
  },

  {
    id: 9,
    name: "Formals",
    size: "M",
    color: "Black and White",
    price: 2000,
    image: "image9.jpg",
    description: "Good looking Formal Dress",
  },

  {
    id: 10,
    name: "Blue Tshirt",
    size: "M",
    color: "Blue",
    price: 900,
    image: "image10.jpg",
    description: "Good looking Blue tshirt",
  },

  {
    id: 11,
    name: "Green Tshirt",
    size: "M",
    color: "Green",
    price: 850,
    image: "image11.jpg",
    description: "Good looking Green tshirt",
  },

  {
    id: 12,
    name: "Red Shirt",
    size: "M",
    color: "Red",
    price: 1000,
    image: "image12.jpg",
    description: "Good looking Red Shirt",
  },
];

cart = [];
let count = 0;

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

let flag = false;

function addToCart(id) {
  flag = false;
  // getting the product
  let pro = getProductByID(products, id);

  cart.forEach(function (ele) {
    if (ele.id == pro.id) {
      flag = true;
    }
  });

  if (flag) {
    alert("Item already added!!");
    return 0;
  }

  //   putting in cart
  cart.push(pro);
  count += 1;
  document.getElementById("count").innerHTML = count;
  let type = displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  count -= 1;
  document.getElementById("count").innerHTML = count;
  displayProducts(cart, "cart");
}

function filterPrice() {
  let minp = document.getElementById("minv").value;
  let maxp = document.getElementById("maxv").value;
  let items = products.filter(function (item) {
    return item.price >= minp && item.price <= maxp;
  });

  displayProducts(item);
  document.getElementById("minv").value = "";
  document.getElementById("maxv").value = "";
}

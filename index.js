// // Sample ramen data
const ramens = [ 
    {
        id: 1,
        image: "https://i.pinimg.com/236x/b8/66/8f/b8668f8cd21823b85b65cd5af44031df.jpg",
        name: "Shoyu Ramen",
        restaurant: "Ichiraku Ramen",
        rating: 4,
        comment: "Everything was just right!"
    },
    {
        id: 2,
        image: "https://i.pinimg.com/236x/fd/5c/1b/fd5c1b80385dd77eaeeb8b1e0296961e.jpg",
        name: "Kojiro Ramen",
        restaurant: "Ramen Ichiban",
        rating: 3,
        comment: "Noodles were too thick"
    },
    {
        id: 3,
        image: "https://i.pinimg.com/236x/1a/18/c8/1a18c83abc0b30b2f2eb86c0f2441242.jpg",
        name: "Gyukotsu Ramen",
        restaurant: "Hakata Ramen",
        rating: 5,
        comment: "Taste just like how my mother made it!"
    },
    {
        id: 4,
        image: "https://i.pinimg.com/236x/bc/82/14/bc8214deb149a1db565972e86736444d.jpg",
        name: "Naruto Ramen",
        restaurant: "Kirua Ramen",
        rating: 2,
        comment: "Too spicy"
    },
    {
        id: 5,
        image: "https://i.pinimg.com/236x/64/9f/a3/649fa3ce1c107088c015c6aad2ddf991.jpg",
        name: "Nirvana Ramen",
        restaurant: "Chimera Ramen",
        rating: 4,
        comment: "Incredible balance between sweet and spicy!",

    }

];
// // 1. displayRamens() - Loads ramen images and appends to #ramen-menu
document.addEventListener("DOMContentLoaded", () => {
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const detailImage = document.getElementById("ramen-img");
const detailName = document.getElementById("ramen-name");
const detailRestaurant = document.getElementById("ramen-restaurant");
const detailRating = document.getElementById("ramen-rating");
const detailComment = document.getElementById("ramen-comment");
const newRamenForm = document.getElementById("new-ramen");

function displayRamens() {
  ramens.forEach(ramen => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.classList.add("ramen-thumbnail");
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

// // 2. handleClick function (display ramen details)
function handleClick(ramen) {
  detailImage.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;
  detailRating.textContent = `Rating: ${ramen.rating}`;
  detailComment.textContent = `Comment: ${ramen.comment}`;

}

// // 3. addSubmitListener() - Adds a new ramen when form is submitted
function addSubmitListener() {
  newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newRamen = {
      id: ramens.length + 1,
      name: document.getElementById("name").value,
      restaurant: document.getElementById("restaurant").value,
      image: document.getElementById("image").value,
      rating: document.getElementById("rating").value,
      comment: document.getElementById("comment").value
    };

    ramens.push(newRamen);

    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.classList.add("ramen-thumbnail");
    img.addEventListener("click", () => handleClick(newRamen));
    ramenMenu.appendChild(img);

    newRamenForm.reset();
  });
}

// // 4. Initializes the app
function main() {
  displayRamens();
  addSubmitListener();
}

// // 5. DOM is fully loaded before running main()
main();
});

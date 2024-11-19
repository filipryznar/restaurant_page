export function loadMenuPage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Fake Restaurant Menu";
  contentDiv.appendChild(title);

  const beverage = document.createElement("h3");
  beverage.textContent = "Beverages";
  beverage.className = "menuType";
  contentDiv.appendChild(beverage);

  const beer = document.createElement("div");
  beer.id = "sections";
  beer.innerHTML = `<h4>Beer</h4>
        <p>
          A warm, sweet tea made with the finest honey and a hint of lemon. Perfect for sipping before your pasta feast!
        </p>
        <div class="container">
           <p class="price">3$</p>
        </div>`;

  contentDiv.appendChild(beer);

  const water = document.createElement("div");
  water.id = "sections";
  water.innerHTML = `<h4>Water</h4>
        <p>
          A warm, sweet tea made with the finest honey and a hint of lemon. Perfect for sipping before your pasta feast!
        </p>
        <div class="container">
           <p class="price">2$</p>
        </div>`;

  contentDiv.appendChild(water);

  const main = document.createElement("h3");
  main.textContent = "Main Diches";
  main.className = "menuType";
  contentDiv.appendChild(main);

  const Lasagna = document.createElement("div");
  Lasagna.id = "sections";
  Lasagna.innerHTML = `<h4>Lasagna Bolognese
        </h4>
        <p>Layers of fresh pasta, rich beef and pork ragu, creamy béchamel, and melted mozzarella. A classic Italian comfort dish!
        </p>
        <div class="container">
           <p class="price">12$</p>
        </div>`;

  contentDiv.appendChild(Lasagna);

  const penne = document.createElement("div");
  penne.id = "sections";
  penne.innerHTML = `<h4>Penne Arrabbiata

        </h4>
        <p>Penne pasta in a spicy tomato sauce with garlic, red pepper flakes, and a touch of olive oil. A fiery treat for heat lovers!
        </p>
        <div class="container">
           <p class="price">9$</p>
        </div>`;

  contentDiv.appendChild(penne);

  const kids = document.createElement("h3");
  kids.textContent = "Kid's Menu";
  kids.className = "menuType";
  contentDiv.appendChild(kids);

  const mac = document.createElement("div");
  mac.id = "sectionsKids";
  mac.innerHTML = `h4>Mac 'n' Cheese Bites
        </h4>
        <p> A smaller portion of pasta with your choice of marinara or butter sauce. Kid-friendly and delicious!

        </p>
        <div class="container">
           <p class="price">7$</p>
        </div>`;

  contentDiv.appendChild(mac);

  const mini = document.createElement("div");
  mini.id = "sectionsKids";
  mini.innerHTML = `<h4>Mini Pasta & Sauce


        </h4>
        <p>A smaller portion of pasta with your choice of marinara or butter sauce. Kid-friendly and delicious!

        </p>
        <div class="container">
           <p class="price">6$</p>
        </div>`;

  contentDiv.appendChild(mini);
}

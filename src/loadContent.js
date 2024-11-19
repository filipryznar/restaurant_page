export function loadHomePage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = "Fake Restaurant";
  contentDiv.appendChild(title);

  const heroImage = document.createElement("img");
  heroImage.id = "hero";
  heroImage.src =
    "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5408d281-2a38-4df1-aa8a-5da9b7ea48bd_1024x608.jpeg";
  contentDiv.appendChild(heroImage);

  const aboutSection = document.createElement("div");
  aboutSection.id = "sections";
  aboutSection.innerHTML = `<p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quam
          suscipit quod id blanditiis, quasi odit est neque, ullam, optio omnis
          deserunt nostrum libero. Minus saepe modi excepturi totam facilis!
        </p><p id="chef">Legit Chef</p>`;

  contentDiv.appendChild(aboutSection);

  const openingHours = document.createElement("div");
  openingHours.id = "sections";
  openingHours.innerHTML = `<h3>Opening hours</h5>
        <p>Sunday: 11am - 9pm</p>
        <p>Monday: 5pm - 9pm</p>
        <p>Tuesday: 5pm - 9pm</p>
        <p>Wednesday: 5pm - 9pm</p>
        <p>Thursday: 5pm - 10pm</p>
        <p>Friday: 5pm - 10pm</p>
        <p>Saturday: 11am - 10pm</p>`;

  contentDiv.appendChild(openingHours);

  const address = document.createElement("div");
  address.id = "sections";
  address.innerHTML = `<h3>Location</h5>
        <p>123 Forest Drive, Forestville, New York</p>`;

  contentDiv.appendChild(address);
}

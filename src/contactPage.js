export function loadContactPage() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const mainContainer = document.createElement("div");
  mainContainer.className = "contactUsContainer";
  contentDiv.appendChild(mainContainer);

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  mainContainer.appendChild(title);

  const text = document.createElement("p");
  text.innerHTML = `<p>Feel free to get in touch with our friendly staff:</p>`;
  mainContainer.appendChild(text);

  const workerContainer = document.createElement("div");
  workerContainer.className = "workersContainer";
  mainContainer.appendChild(workerContainer);

  const firstWorker = document.createElement("div");
  firstWorker.className = "worker";
  firstWorker.innerHTML = `<h4 class="workerName">Gordon Ramsey</h4>
            <p class="position">Chef</p>
            <p><b>Phone:</b> 111-222-333</p>
            <p><b>Email:</b> <a href="mailto:gordon@fakerestaurant.com">gordon@fakerestaurant.com</a></p>`;

  workerContainer.appendChild(firstWorker);

  const secondWorker = document.createElement("div");
  secondWorker.className = "worker";
  secondWorker.innerHTML = `<h4 class="workerName">Micheal Scott</h4>
            <p class="position">Manager</p>
            <p><b>Phone:</b> 111-222-333</p>
            <p><b>Email:</b> <a href="mailto:mike@fakerestaurant.com">mike@fakerestaurant.com</a></p>
          </div>`;

  workerContainer.appendChild(secondWorker);

  const thirdtWorker = document.createElement("div");
  thirdtWorker.className = "worker";
  thirdtWorker.innerHTML = `<h4 class="workerName">Pam Beasly </h4>
            <p class="position">Waiter</p>
            <p><b>Phone:</b> 111-222-333</p>
            <p><b>Email:</b> <a href="mailto:mike@fakerestaurant.com">mike@fakerestaurant.com</a></p>`;

  workerContainer.appendChild(thirdtWorker);

  const fourthWorker = document.createElement("div");
  fourthWorker.className = "worker";
  fourthWorker.innerHTML = `<h4 class="workerName">Ryan</h4>
            <p class="position">Waiter</p>
            <p><b>Phone:</b> 111-222-333</p>
            <p><b>Email:</b> <a href="mailto:mike@fakerestaurant.com">mike@fakerestaurant.com</a></p>`;

  workerContainer.appendChild(fourthWorker);
}

const quotes = [
  "You do not have to have everything figured out right now.",
  "Being overwhelmed does not mean you are failing.",
  "You deserve friends, rest, and softness too.",
  "Comparison is not proof that you are behind."
];

const popupMessages = [
  "Drink some water and unclench your jaw.",
  "You are allowed to rest before you earn it.",
  "A bad day does not mean a bad life.",
  "You do not need to do everything perfectly to be worthy."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const stressSlider = document.getElementById("stressSlider");
const stressOutput = document.getElementById("stressOutput");
const quizButtons = document.querySelectorAll(".quiz-btn");
const quizResult = document.getElementById("quizResult");
const plannerForm = document.getElementById("plannerForm");
const plannerList = document.getElementById("plannerList");
const clearPlannerBtn = document.getElementById("clearPlannerBtn");
const budgetForm = document.getElementById("budgetForm");
const budgetResult = document.getElementById("budgetResult");
const flipCards = document.querySelectorAll(".flip-card");
const safetyMessage = document.getElementById("safetyMessage");
const reminderBtn = document.getElementById("reminderBtn");
const popupOverlay = document.getElementById("popupOverlay");
const popupText = document.getElementById("popupText");
const closePopupBtn = document.getElementById("closePopupBtn");

let budgetChart;

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteOutput.textContent = quotes[randomIndex];
});

stressSlider.addEventListener("input", () => {
  stressOutput.textContent = `Your stress level is ${stressSlider.value}/10.`;
});

quizButtons.forEach((button) => {
  button.addEventListener("click", () => {
    quizResult.textContent = button.dataset.result;
  });
});

function savePlannerItems() {
  const items = [];
  const listItems = plannerList.querySelectorAll("li");

  listItems.forEach((item) => {
    items.push(item.textContent);
  });

  localStorage.setItem("plannerItems", JSON.stringify(items));
}

function loadPlannerItems() {
  const savedItems = JSON.parse(localStorage.getItem("plannerItems")) || [];

  savedItems.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    plannerList.appendChild(li);
  });
}

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const eventName = document.getElementById("eventName").value.trim();
  const eventDate = document.getElementById("eventDate").value;

  if (eventName === "" || eventDate === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${eventName} — ${eventDate}`;
  plannerList.appendChild(li);

  savePlannerItems();
  plannerForm.reset();
});

clearPlannerBtn.addEventListener("click", () => {
  plannerList.innerHTML = "";
  localStorage.removeItem("plannerItems");
});

budgetForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const budget = Number(document.getElementById("budgetAmount").value);
  const coffee = Number(document.getElementById("coffeeAmount").value);
  const food = Number(document.getElementById("foodAmount").value);
  const clothes = Number(document.getElementById("clothesAmount").value);

  const totalSpent = coffee + food + clothes;
  const remaining = budget - totalSpent;

  if (remaining >= 0) {
    budgetResult.textContent = `You have $${remaining} left after your planned spending.`;
  } else {
    budgetResult.textContent = `You are $${Math.abs(remaining)} over budget right now.`;
  }

  const ctx = document.getElementById("budgetChart");

  if (budgetChart) {
    budgetChart.destroy();
  }

  budgetChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Coffee", "Food", "Clothes"],
      datasets: [
        {
          label: "Budget Breakdown",
          data: [coffee, food, clothes]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  });
});

flipCards.forEach((card) => {
  card.addEventListener("click", () => {
    safetyMessage.textContent = card.dataset.message;
  });
});

reminderBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * popupMessages.length);
  popupText.textContent = popupMessages[randomIndex];
  popupOverlay.classList.remove("hidden");
});

closePopupBtn.addEventListener("click", () => {
  popupOverlay.classList.add("hidden");
});

popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.classList.add("hidden");
  }
});

document.addEventListener("mousemove", (event) => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "♡";
  heart.style.left = `${event.clientX}px`;
  heart.style.top = `${event.clientY}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 900);
});

loadPlannerItems();
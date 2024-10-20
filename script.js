const usersData = [
  {
    name: "Алексей Иванов",
    email: "alexey.ivanov@example.com",
    phone: "+7 (495) 123-4567",
    website: "ivanov.ru",
  },
  {
    name: "Мария Петрова",
    email: "maria.petrova@example.com",
    phone: "+7 (495) 987-6543",
    website: "petrova.ru",
  },
  {
    name: "Дмитрий Смирнов",
    email: "dmitry.smirnov@example.com",
    phone: "+7 (495) 555-1234",
    website: "smirnov.ru",
  },
  {
    name: "Екатерина Сидорова",
    email: "ekaterina.sidorova@example.com",
    phone: "+7 (495) 999-8888",
    website: "sidorova.ru",
  },
  {
    name: "Иван Кузнецов",
    email: "ivan.kuznetsov@example.com",
    phone: "+7 (495) 111-2222",
    website: "kuznetsov.ru",
  },
];

function createCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Телефон:</strong> ${user.phone}</p>
        <p><strong>Сайт:</strong> <a href="http://${user.website}">${user.website}</a></p>
    `;
  return card;
}

const container = document.getElementById("users");
usersData.forEach((user) => container.appendChild(createCard(user)));

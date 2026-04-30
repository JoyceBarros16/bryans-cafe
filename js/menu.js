fetch("xml/menu.xml")
  .then(response => response.text())
  .then(data => {

    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml");
    const items = xml.getElementsByTagName("item");

    let mealsCards = "";
    let coffeeCards = "";
    let beveragesCards = "";

    let mealsTable = "";
    let coffeeTable = "";
    let beveragesTable = "";

    for (let i = 0; i < items.length; i++) {

      const name = items[i].getElementsByTagName("name")[0].textContent;
      const description = items[i].getElementsByTagName("description")[0].textContent;
      const price = items[i].getElementsByTagName("price")[0].textContent;
      const image = items[i].getElementsByTagName("image")[0].textContent;
      const category = items[i].getElementsByTagName("category")[0].textContent;
      const tag = items[i].getElementsByTagName("tag")[0].textContent;

      // CARD HTML
      const card = `
        <div class="menu-card">
          <img src="images/${image}">
          <div class="menu-card-content">
            <h3>${name}</h3>
            <p>${description}</p>
            <p><strong>$${price}</strong></p>
          </div>
        </div>
      `;

      // SORT BY CATEGORY
      if (category === "meal") {
        mealsCards += card;

        mealsTable += `
          <tr>
            <td>${name}</td>
            <td>$${price}</td>
            <td>${description}</td>
          </tr>
        `;
      }

      if (category === "coffee") {
        coffeeCards += card;

        coffeeTable += `
          <tr>
            <td>${name}</td>
            <td>$${price}</td>
            <td>${description}</td>
          </tr>
        `;
      }

      if (category === "beverage") {
        beveragesCards += card;

        beveragesTable += `
          <tr>
            <td>${name}</td>
            <td>$${price}</td>
          </tr>
        `;
      }

    }

    // DISPLAY CARDS
    document.getElementById("menuMeals").innerHTML = mealsCards;
    document.getElementById("menuCoffee").innerHTML = coffeeCards;
    document.getElementById("menuBeverages").innerHTML = beveragesCards;

    // DISPLAY TABLES
    document.getElementById("tableMeals").innerHTML = mealsTable;
    document.getElementById("tableCoffee").innerHTML = coffeeTable;
    document.getElementById("tableBeverages").innerHTML = beveragesTable;

  });
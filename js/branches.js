fetch("xml/branches.xml")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Could not load branches.xml");
    }
    return response.text();
  })
  .then(function (data) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml");

    const parserError = xml.querySelector("parsererror");
    if (parserError) {
      throw new Error("Invalid XML format in branches.xml");
    }

    const branches = xml.getElementsByTagName("branch");
    const branchesList = document.getElementById("branchesList");

    let output = "";

    for (let i = 0; i < branches.length; i++) {
      const name = branches[i].getElementsByTagName("name")[0].textContent;
      const address = branches[i].getElementsByTagName("address")[0].textContent;
      const phone = branches[i].getElementsByTagName("phone")[0].textContent;
      const hours = branches[i].getElementsByTagName("hours")[0].textContent;
      const map = branches[i].getElementsByTagName("map")[0].textContent;

      output += `
        <article class="branch-card">
          <h3>${name}</h3>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Opening Hours:</strong> ${hours}</p>
          <a class="map-link" href="${map}" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </article>
      `;
    }

    if (branchesList) {
      branchesList.innerHTML = output;
    }
  })
  .catch(function (error) {
    const branchesList = document.getElementById("branchesList");
    if (branchesList) {
      branchesList.innerHTML = "<p>There was a problem loading the branch data.</p>";
    }
    console.error(error);
  });
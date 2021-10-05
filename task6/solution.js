function setUp() {
  const dropdown = document.getElementById("countries");
  retrieveCountries(dropdown);
  retrieveStatistics({ target: { value: "us" } });
  dropdown.addEventListener("change", retrieveStatistics);
}

// Note: you cannot actually call `document` from NodeJS,
//  so you cannot run the code in this file!

function whenDomContentLoaded() {
  return new Promise((resolve, _reject) => {
    document.addEventListener("DOMContentLoaded", resolve);
  });
}

whenDOMContentLoaded().then(setUp);

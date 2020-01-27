const gtown_url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
// For local development - I was on my way to DevConf2020 😃
// const gtown_url = 'http://localhost:8000/src/js/local.json';
let payload;

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response) {
  return response.json();
}

fetch(gtown_url)
  .then(status)
  .then(response => response.json())
  .then(function(data) {
    payload = data.Brastlewark;
    showGnomes(data.Brastlewark);
    showProfessions(data.Brastlewark);
  })
  .catch(function(error) {
    console.error('Request failed', error);
  });

// get initial info on the page
function showGnomes(data) {
  document.querySelector('.card-columns').innerHTML = `
    ${data.map(template).join('')}
  `;
}

// just makes a list
function lists(lists) {
  return `
  <ul class="listOut">
    ${lists.map(listItem => `<li>${listItem}</li>`).join('')}
  </ul>
  `;
}

// card template
function template(data) {
  return `
  <div class="card">
    <img src="${data.thumbnail}" class="card-img-top" alt="Profile photo of ${data.name}" />
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <h4>Professions</h4>
        ${data.professions.length ? lists(data.professions) : '<ul><li>I need a job, you should hire me 😉</li></ul>'}
      <h4>Mates</h4>
        ${data.friends.length ? lists(data.friends) : "Friendship is the best ship! Let's hang out 🤗🚣‍♂️"}
    </div>
  </div>
  `;
}

// sort by trade
function showProfessions(data) {
  getAllProf(data);
}

// add all professions to a Set - non duplicates items
function getAllProf(data) {
  let reformattedArray = data.map(obj => {
    let rObj = {};
    rObj = obj.professions;
    return rObj;
  });

  const allProf = new Set(reformattedArray.flat());
  makeTradeBtns(allProf);
}

// filter by button
function registerBtns() {
  const btns = document.querySelectorAll('button');
  btns.forEach(item =>
    item.addEventListener('click', event => {
      const tradeBtn = event.target.textContent;
      filterByTrade(tradeBtn);
    })
  );
}

// loop through trades and make a list of buttons
function makeTradeBtns(tradeSet) {
  const tradeArr = [...tradeSet];
  const listItems = tradeArr.reduce((result, item) => {
    result += `<button>${item}</button>`;
    return result;
  }, '');

  const resultElement = document.getElementById('dropdown-menu-trades');
  const allTradesBtn = `<button>All trades</button>`;
  resultElement.innerHTML = allTradesBtn + listItems;
  registerBtns();
}

function filterByTrade(tradeStr) {
  function filterByID(item) {
    if (item.professions.includes(tradeStr)) {
      return true;
    }
  }
  let arrByID = payload.filter(filterByID);
  document.querySelector('.card-columns').innerHTML = `${arrByID.map(template).join('')}`;
  if (tradeStr == 'All trades') {
    showGnomes(payload);
  }
}

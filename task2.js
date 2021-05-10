

console.log('hi');

let requeste = new XMLHttpRequest();
requeste.open('GET', 'https://restcountries.eu/rest/v2/all', true);
requeste.send();
requeste.onload = ()=> {
  let data = JSON.parse(requeste.response);
  let peoples = [];
  let countryName = [];
  let asiaPopulations = [];
  //Asia Ocean Population // 
  let asiaOceanCountry_name = data.filter(element => {
    return element.region=='Asia';
  });
  asiaOceanCountry_name.filter(item => {
    if (item.population) {
      asiaPopulations.push(item.population);
    }
  });
  let asiaPopulationTotal = asiaPopulations.reduce((pre, accum) => {
    return (pre += accum);
  });
  console.log('AsiaOcean total Populations ' + asiaPopulationTotal);

  //Country Below @lacks Peoples
  data.filter(item => {
    if (item.population <= 200000 && item.name && item.flag) {
      peoples.push(item.population);
      countryName.push(item.name);
      console.log('CountryNames ' + item.name + ' Total Populations ' + item.population);
    }
  });
  let tot = peoples.reduce((pre, accum) => {
    return (pre += accum);
  });
  console.log('Below 2lacks peoples totals  ' +tot +'  total countries  ' +countryName.length);

  //Below 2lacks Country countryFlags
  data.filter(items => {
    const image = document.createElement('img');
    image.setAttribute('src', items.flag);
    let news = document.querySelector('body').appendChild(image);
    news.classList.add('img');
  });
};

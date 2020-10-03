const url = "https://www.keshprad.ml/contact/socials.JSON";

// fetch data
async function fetchData(load_url) {
  const url_response = await fetch(load_url);
  var socials = await url_response.json();

  showSocials(socials);
}
fetchData(url);

// show the social links
function showSocials(socials) {
  var code = ``;

  for (let social in socials) {
    if (social != "keshprad") {
      code += `<a href="${socials[social].href}" target="${socials[social].target}" class="animate__animated animate__rollIn"><i class="${socials[social].icon.FAClass}"></i></a>`;
    }
  }

  const containers = [
    document.querySelector("#home .container .social-links"),
    document.querySelector("#footer .socials"),
  ];
  containers.forEach((container) => {
    container.innerHTML = code;
  });
}

const url = "http://127.0.0.1:5500/contact/socials.JSON";

// fetch data
async function fetchData(load_url) {
  const url_response = await fetch(load_url);
  var allSocials = await url_response.json();
  showSocials(allSocials.socials);
}
fetchData(url);

// show the social links
function showSocials(socials) {
  var code = ``;

  socials.forEach((social) => {
    if (social.title != "keshprad") {
      code += `<a href="${social.href}" target="${social.target}" class="animate__animated animate__rollIn"><i class="${social.icon.FAClass}"></i></a>`;
    }
  });

  const containers = [
    document.querySelector("#home .container .social-links"),
    document.querySelector("#footer .socials"),
  ];
  containers.forEach((container) => {
    container.innerHTML = code;
  });
}

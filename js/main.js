const basePath = window.location.pathname.includes('/Consultorio/') ? '/Consultorio' : '';

fetch(`${basePath}/header.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

fetch(`${basePath}/footer.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
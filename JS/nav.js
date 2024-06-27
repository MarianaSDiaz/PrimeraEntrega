header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';



ORIGEN.href = '/index.html';
ORIGEN.appendChild(img);
img.src = 'img/casco-de-carreras.png';
img.alt = 'DrillRide';

liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);

for (const link of links) {
    const li = document.createElement('li');   
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}


header.style.backgroundColor = '#2b2b2b';


footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'DrillRide - ' + TIME;
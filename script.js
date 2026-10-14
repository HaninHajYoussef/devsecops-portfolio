const projects = [
  { name: "Portfolio Docker", description: "Portfolio servi par Nginx dans un conteneur.", tech: "Docker, Nginx" },
  { name: "Intégration continue", description: "Jenkins installé en service sur Ubuntu Server.", tech: "Jenkins, Git" },
  { name: "Automatisation", description: "Création de VM avec Vagrant.", tech: "Vagrant, Linux" }
];

const list = document.getElementById("projects-list");
list.innerHTML = projects.map(p =>
  `<div class="card"><h3>${p.name}</h3><p>${p.description}</p><small>${p.tech}</small></div>`
).join("");

document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

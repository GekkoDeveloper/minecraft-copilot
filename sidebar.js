const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");
const tree = document.querySelector(".tree");
const header = document.querySelector(".header");

const sidebarTitle = document.getElementById("sidebar-title");
const sidebarText = document.getElementById("sidebar-text");

fetch("steps.json")
  .then(res => res.json())
  .then(stepsData => {

    document.querySelectorAll(".node").forEach(node => {
      node.addEventListener("click", () => {
        const step = stepsData[node.id];
        if (!step) return;

        sidebarTitle.textContent = step.title;

        sidebarText.innerHTML = "";
        if (Array.isArray(step.sections)) {
          step.sections.forEach(section => {
            if (section.type === 'text') {
              const p = document.createElement('p');
              p.textContent = section.value;
              sidebarText.appendChild(p);
            } else if (section.type === 'image') {
              const img = document.createElement('img');
              img.src = section.src;
              img.alt = section.alt || '';
              img.className = 'clickable-image';
              img.style.maxWidth = '100%';
              img.style.margin = '10px 0';
              img.style.cursor = 'pointer';
              sidebarText.appendChild(img);
            }
          });
        } 
        sidebar.classList.add("open");
        tree.classList.add("shrink");
      });
    });

  });

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  tree.classList.remove("shrink");
});

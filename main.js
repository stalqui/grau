function hideAllSections() {
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
}
function showSection(sectionId) {
    hideAllSections();
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});
showSection('almoco');
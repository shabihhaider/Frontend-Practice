const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove 'active' class from all Panels
        removeActiveClass();
        // Then add 'active' class to current panel that clicked
        panel.classList.add('active');
    });
});

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
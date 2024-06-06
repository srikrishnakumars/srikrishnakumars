// Function to apply styles to links
function applyLinkStyles(containerClass, linkClass) {
    const links = document.querySelectorAll(`.${containerClass} a.${linkClass}`);
    links.forEach(link => {
        link.style.fontWeight = 'bold';
    });
}

// Fetch Tier 1 content
fetch('./tier1/tier1.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('tier1-container').innerHTML = html;
        applyLinkStyles('tier1', 'tier1-link');
    });

// Fetch Tier 2 content
fetch('./tier2/tier2.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('tier2-container').innerHTML = html;
        applyLinkStyles('tier2', 'tier2-link');
    });

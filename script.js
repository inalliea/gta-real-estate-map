const hotspots = document.querySelectorAll('.hotspot');
const box = document.getElementById('info-box');

hotspots.forEach(h => {
    h.addEventListener('mouseenter', () => {
        const price = h.dataset.price;
        const area = h.dataset.area;
        box.innerText = `${area}: ${price}`;
    });

    h.addEventListener('mouseleave', () => {
        box.innerText = "";
    });

    h.addEventListener('click', () => {
        const area = h.dataset.area;
        window.location.href = `ticket.html?location=${encodeURIComponent(area)}`;
    });
});


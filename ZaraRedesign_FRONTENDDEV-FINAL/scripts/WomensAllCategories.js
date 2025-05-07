let isListView = false;

function toggleView() {
    const container = document.querySelector('.Categories-Container');
    const categories = document.querySelectorAll('.category');
    const toggleBtn = document.getElementById('toggleViewBtn');
    const toggleIcon = document.getElementById('toggleIcon');

    container.classList.toggle('list-view');

    categories.forEach(function(category) {
        category.classList.toggle('list-item');
        category.classList.toggle('grid-item');
    });

    if (!isListView) {
        toggleIcon.textContent = '';
        toggleBtn.innerHTML = '<span id="toggleIcon"></span> Switch to Grid View';
    } else {
        toggleIcon.textContent = '';
        toggleBtn.innerHTML = '<span id="toggleIcon"></span> Switch to List View';
    }

    isListView = !isListView;
}


const categoryCards = document.querySelectorAll('.category');


categoryCards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
        if (!isListView) {
            card.style.transform = 'scale(1.1)';
        }
    });

    card.addEventListener('mouseout', function() {
        if (!isListView) {
            card.style.transform = 'scale(1)';
        }
    });
});


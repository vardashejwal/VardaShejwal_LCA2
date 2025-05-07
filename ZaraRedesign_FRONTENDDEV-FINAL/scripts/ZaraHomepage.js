const womenButton = document.getElementById('womenscategory');

document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'W') {
        womenButton.click();  
    }
});



document.getElementById('womenscategory').addEventListener('click', function() {
    alert("Redirecting to Woman Category Page...");
    window.location.href = 'WomensCategoryBestsellersPage.html';
});


document.getElementById('no-btn').addEventListener('mouseover', function() {
    this.style.position = 'fixed';
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    this.style.left = `${Math.random() * maxX}px`;
    this.style.top = `${Math.random() * maxY}px`;
});

// document.getElementById('yes-btn').addEventListener('click', function() {
//     const newPage = window.open();
//     newPage.document.write('<!DOCTYPE html><html><head><title>Valentine\'s Day</title></head><body><h1 style="color:#d6336c; text-align:center;">Happy Valentine\'s Day, love! 💖</h1><p style="text-align:center;">Wishing you all the love and happiness you so richly deserve.</p></body></html>');
//     newPage.document.close();
// });


document.addEventListener("DOMContentLoaded", () => {
    const caption = sessionStorage.getItem('catCaption');
    const captionElement = document.getElementById('catCaption');
    if (captionElement) {
      captionElement.textContent = caption || 'Your cat caption here.';
    }
  
    const button4 = document.getElementById("divinationButton");
    // You can now use button4 as needed
  });
  
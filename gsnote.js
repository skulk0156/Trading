console.log("GS NOTE JS LOADED ✔️");

document.addEventListener("DOMContentLoaded", () => {
    
    const btn = document.getElementById("gsNoteBtn");
    const popup = document.getElementById("gsNotePopup");
    const closeBtn = document.getElementById("gsNoteClose");

    // Show popup
    btn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    // Close popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close when clicking outside the card
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

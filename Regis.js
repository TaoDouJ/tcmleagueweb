document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('leagueForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const originalText = btnText.textContent;
        btnText.textContent = "SENDING...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        try {
            const response = await fetch(window.location.pathname, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                alert("Success! Your team registration has been sent to the stewards. Don't forget to send us your logo!");
                form.reset();
            } else {
                alert("Error: Netlify received the data but rejected it. Check your Netlify Forms dashboard.");
            }

        } catch (error) {
            alert("Network error. Please try again.");
        } finally {
            btnText.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
        }
    });
});
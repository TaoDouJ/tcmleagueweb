document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('leagueForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        // Visual feedback
        const originalText = btnText.textContent;
        btnText.textContent = "SENDING...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        try {
            // Send the data securely to Netlify's built-in form handler
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                alert("Success! Your team registration has been sent to the stewards. Don't forget to send us your logo!");
                form.reset();
            } else {
                alert("Error: Something went wrong submitting the form.");
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
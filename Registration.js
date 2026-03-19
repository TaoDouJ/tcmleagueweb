document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('leagueForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');

    form.addEventListener('submit', async (e) => {
        // Prevent the default HTML redirect so we can stay on the page
        e.preventDefault();

        // 1. Gather the form data
        const formData = new FormData(form);

        // 2. Change button text to show it's working
        const originalText = btnText.textContent;
        btnText.textContent = "SENDING...";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.7";

        try {
            // 3. Send the data to Web3Forms
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            // 4. Handle the response
            if (response.ok) {
                // I updated the alert to remind them about the logo!
                alert("Success! Your team registration has been sent to the stewards. Don't forget to send us your logo!");
                form.reset(); // Clear the form so they know it worked
            } else {
                alert("Error: " + data.message);
            }

        } catch (error) {
            alert("Something went wrong with the network. Please try again.");
        } finally {
            // 5. Reset the button back to normal
            btnText.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
        }
    });
});
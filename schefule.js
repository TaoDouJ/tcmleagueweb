
document.addEventListener('DOMContentLoaded', () => {

    // Here is your schedule data. Update this for the upcoming week!
    const scheduleData = [
        { date: "APRIL 1st", track: "START of the league", time: "TBD", format: "Grand Race" }

    ];

    const board = document.getElementById('schedule-board');

    // Loop through the schedule and create the cards
    scheduleData.forEach((race, index) => {
        const card = document.createElement('div');
        card.classList.add('race-card');

        // This makes the cards load one by one like a wave
        card.style.animationDelay = `${index * 0.15}s`;

        card.innerHTML = `
            <div class="race-date">${race.date}</div>
            <div class="race-track">${race.track}</div>
            <div class="race-details">
                <span class="detail-pill pill-time">${race.time}</span>
                <span class="detail-pill pill-format">${race.format}</span>
            </div>
        `;

        board.appendChild(card);
    });
});
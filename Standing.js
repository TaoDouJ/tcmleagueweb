document.addEventListener('DOMContentLoaded', () => {


    const teamsData = [
        { name: "SUPERNOVA", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "HELLO KITTY RACING", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "FUJIWARA RACING", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "WILD STYLE", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "WOLVES TEAM", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "KYOKOSHA RACING", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "E6-Racing-Team", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "TEAM VODKAA", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "TEAM 9", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "TEAM 10", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "TEAM 11", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "TEAM 12", pts: 0, w: 0, d: 0, l: 0, bpts: 0 },
        { name: "TEAM 13", pts: 0, w: 0, d: 0, l: 0, bpts: 0 }
    ];

    const board = document.getElementById('standings-board');


    teamsData.forEach((team, index) => {
        const row = document.createElement('div');
        row.classList.add('team-row');


        row.style.animationDelay = `${index * 0.1}s`;

        row.innerHTML = `
            <div class="pill pill-no">${index + 1}</div>
            <div class="pill pill-team">${team.name}</div>
            <div class="pill pill-pts">${team.pts}</div>
            <div class="pill pill-stat">${team.w}</div>
            <div class="pill pill-stat">${team.d}</div>
            <div class="pill pill-stat">${team.l}</div>
            <div class="pill pill-stat">${team.bpts}</div>
        `;

        board.appendChild(row);
    });
});
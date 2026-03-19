document.addEventListener('DOMContentLoaded', () => {

    // Team Data - Update this with your actual teams!
    // I used 'ui-avatars' to automatically generate cool placeholder logos based on team names.
    const teamsData = [
        {
            name: "Wild Style",
            logo: "./Asseste/WildStyle.png",
            leader: "Eternal-Polaris",
            description: "THE GOON SQUAD RACING ",
            members: ["Eternal-Polaris", "ANTHRACITE", "WS-BlitzBee", "Rina-Yamabato","RCR_SaabLover","ARCZero--Skill","imadewaldretire","HKR-Esse PSN: essepro","AHUMMM","TrashSlipFest","WS-FedEx"," LEDG3R_"," IKyx","NoizYBoY_MSD","BandoCHOO",]
        },
        {
            name: "Supernova",
            logo: "./Asseste/Supernova.png",
            leader: "Blitzrey ",
            description: "Absolute Domination ",
            members: ["EreKing", "Kurokai", "LittleBird","zKorsk","Nxmesiis","Mugi__ ","Vorexance ","Lum-Hak","Navera","Bool77 "]
        },
        {
            name: "HKR RACING",
            logo: "./Asseste/HKR.png",
            leader: "HKR-Vaped",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            members: ["HKR-Vaped", "lKojiro", "HKR-Zxxm", "HKR-Babba", "Subarashii.", "Chinanam", "Nailoong", "Favoring.", "LNO.", "HKR-K1", "HKR-Mace", "Predaking.", "Mistrimsys.", "Netrex-.-", "Predacon.", "HKR-Kero", "HKR-Shogo", "Sxlmmed"]
        },
        {
            name: "FUJIWARA RACING",
            logo: "./Asseste/FWR.jpg",
            leader: "𝘴𝘙𝘦𝘡𝘪𝘪𝘟.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            members: ["𝘴𝘙𝘦𝘡𝘪𝘪𝘟.", "𝘎𝘢𝘪𝘪𝘫𝘪𝘯.", "lHeiko.", "𝘡𝘦𝘯𝘳𝘺𝘶.", "𝘡𝘦𝘯𝘳𝘺𝘶..", "𝘕𝘢𝘭𝘺𝘢.", "𝘛𝘰𝘮𝘪𝘢𝘲𝘶𝘢.", "𝘭𝘭𝘌𝘯𝘬𝘦𝘪.", "𝘒𝘢𝘵𝘴𝘶𝘬𝘪..", "𝘕𝘺𝘷𝘳𝘢.", "𝘈𝘬𝘺𝘶𝘮𝘢.."]
        },
        {
            name: "WOLVES TEAM",
            logo: "./Asseste/WOLVES.jpg",
            leader: "WLF-Bebo",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            members: ["WLF-Bebo", "WLF-Vzx-95V", "WLF-EndtY47", "WLF-I_3DNY", "WLF-iE8n", "WLF-i7phx", "WLF-MJRM01-", "WLF-8AZ", "WLF-Feras", "WLF-jih_40", "WLF-066YasSinNe", "WLF-ix_RB88", "WLF-FLOKI", "WLF-MHkO", "WLF-WK036", "WLF-ahmxd", "WLF-Qvr-p", "WLF-ABOOD", "WLF-XEIL", "WLF-Yzn", "WLF-yzn_DS", "A187___", "WLF-FWRG", "WLF-FAHAD", "Mqjy88-"]
        },
        {
            name: "Kyokosha Racing",
            logo: "./Asseste/KKR.jpg",
            leader: "KKR_Blade.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            members: ["KKR_Blade.", "KKR_Freqz.", "Apokalypto_Red.", "Nemsiking.", "KKR...", "KKR_Gaylord", "KKR_Flicction", "KKR_Kynoshii.", "KKR_Zyphr.", "KKR_BlacDawg", "KKR_nvm.", "IAzzxh.-", "KKR_nooKstar", "KKR_actisted"]
        },
        {
            name: "E6-Racing-Team",
            logo: "./Asseste/E6.png",
            leader: "E6_Purple_H4ze",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            members: ["E6_Purple_H4ze", "UseClutchBots.", "E6_FyMka", "E6_Chotsru", "Gamorsku", "Tetrodotox1n.", "E6_Hurra", "E6_InsuDe_ns", "E6_Le_David_TV", "Its__Kobra"]
        },
        {
            name: "TEAM VoDkAA",
            logo: "./Asseste/vodkka.png",
            leader: "Bananaaking.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            members: ["Bananaaking.", "VoDkAA-Pastaga", "Taakii.", "Hyoha.", "MPowerKing.", "VoDKAA-_-BeTo", "VoDkAA-_-Dark", "VoDkAA-_-RAGNAR", "VoDkAA-_-Stylox", "VoDkAA-_-MojitO", "VoDkAA-_-SnAke", "VoDkAA-_-Vitalitix", "VoDkAA-_-Aveugle", "VoDkAA-_-PreDa", "VoDkAA-_-Sensei", "VoDKAA-_-Tézos", "VoDkAA-_-clems", "VoDkAA-_-FoYkA", "VoDkAA-_-Lyxus", "vodkaa_cerise", "VoDkAA-_-Kimer77", "VoDkAA-_-AZLANx", "VoDkAA-_-Syrax", "VoDkAA-_-Slazick", "TaMaire.", "OSRT_Nastu", "Dj_Meishy."]
        }
    ];

    const board = document.getElementById('teams-board');
    const modal = document.getElementById('team-modal');
    const closeBtn = document.getElementById('close-modal');

    // Modal elements to update
    const modalLogo = document.getElementById('modal-logo');
    const modalTeamName = document.getElementById('modal-team-name');
    const modalLeader = document.getElementById('modal-leader');
    const modalDriversCount = document.getElementById('modal-drivers-count');
    const modalDescription = document.getElementById('modal-description');
    const modalRoster = document.getElementById('modal-roster');

    // 1. Generate the Team Rows
    teamsData.forEach((team, index) => {
        const row = document.createElement('div');
        row.classList.add('team-list-row');
        row.style.animationDelay = `${index * 0.15}s`;

        row.innerHTML = `
            <div class="team-row-left">
                <img src="${team.logo}" alt="${team.name} Logo" class="team-logo-circle">
                <div>
                    <div class="team-name-text">${team.name}</div>
                    <div class="team-leader-text">Leader: ${team.leader}</div>
                </div>
            </div>
            <div class="team-drivers-count">${team.members.length} Drivers</div>
        `;

        // 2. Add Click Event to open Modal
        row.addEventListener('click', () => {
            openModal(team);
        });

        board.appendChild(row);
    });

    // 3. Function to populate and open the modal
    function openModal(team) {
        modalLogo.src = team.logo;
        modalTeamName.textContent = team.name;
        modalLeader.textContent = team.leader;
        modalDriversCount.textContent = team.members.length;
        modalDescription.textContent = team.description;

        // Clear previous roster and inject new ones
        modalRoster.innerHTML = '';
        team.members.forEach(member => {
            const li = document.createElement('li');
            li.textContent = member;
            modalRoster.appendChild(li);
        });

        // Show the modal
        modal.classList.add('active');
    }

    // 4. Close modal logic
    function closeModal() {
        modal.classList.remove('active');
    }

    // Close when clicking the 'X'
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside the modal box
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
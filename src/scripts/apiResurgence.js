const warframes = ["Ash",
  "Ember",
  "Excalibur",
  "Loki",
  "Mag",
  "Rhino",
  "Trinity",
  "Volt",
  "Frost",
  "Nyx",
  "Banshee",
  "Saryn",
  "Vauban",
  "Nova",
  "Nekros",
  "Valkyr",
  "Oberon",
  "Zephyr",
  "Hydroid",
  "Mirage",
  "Limbo",
  "Mesa",
  "Chroma",
  "Equinox",
  "Atlas",
  "Wukong",
  "Ivara",
  "Nezha",
  "Inaros",
  "Titania",
  "Nidus",
  "Octavia",
  "Harrow",
  "Gara",
  "Khora",
  "Revenant",
  "Garuda",
  "Baruuk",
  "Hildryn",
  "Wisp",
  "Gauss",
  "Grendel",
  "Protea",
  "Xaku",
  "Lavos",
  "Sevagoth",
  "Yareli",
  "Caliban",
  "Gyre",
  "Styanax",
  "Voruna",
  "Citrine",
  "Kullervo",
  "Dagath",
  "Qorvex",
  "Dante",
  "Jade",
  "Koumei",
  "Cyte-09",
  "Temple",
  "Oraxia"];


const warframeImages = [
"https://wiki.warframe.com/images/AshPrimeFull.png?bb4a6",
"https://static.wikia.nocookie.net/warframe/images/3/3a/EmberPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/e/e8/ExcaliburPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/f/f9/LokiPrimeFull.png/revision/latest",
"https://wiki.warframe.com/images/MagPrimeFull.png?1dc77",
"https://static.wikia.nocookie.net/warframe/images/8/86/RhinoPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/2/20/TrinityPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/8/8c/VoltPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/a/ab/FrostPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/d/dc/NyxPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/4/4f/BansheePrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/6/64/SarynPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/3/3c/VaubanPrimeFull.png/revision/latest",
"https://wiki.warframe.com/images/NovaPrimeFull.png?0ebeb",
"https://static.wikia.nocookie.net/warframe/images/5/50/NekrosPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/d/db/ValkyrPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/f/f4/OberonPrimeFull.png/revision/latest",
"https://wiki.warframe.com/images/ZephyrPrimeFull.png?13f56",
"https://static.wikia.nocookie.net/warframe/images/0/09/HydroidPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/2/2e/MiragePrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/3/36/LimboPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/8/81/MesaPrimeFull.png/revision/latest",
"https://wiki.warframe.com/images/ChromaPrimeFull.png?71aef",
"https://static.wikia.nocookie.net/warframe/images/f/f7/EquinoxPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/6/66/AtlasPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/1/18/WukongPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/a/a2/IvaraPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/6/67/NezhaPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/c/c3/InarosPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/3/3e/TitaniaPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/1/18/NidusPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/4/42/OctaviaPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/4/43/HarrowPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/7/70/GaraPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/2/21/KhoraPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/2/24/RevenantPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/c/c6/GarudaPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/d/d1/BaruukPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/a/a7/HildrynPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/d/db/WispPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/8/8d/GaussPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/3/31/GrendelPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/4/41/ProteaPrimeFull.png/revision/latest",
"https://static.wikia.nocookie.net/warframe/images/f/f0/XakuPrimeFull.png/revision/latest",
"https://wiki.warframe.com/images/LavosPrimeFull.png?b6a65",
"https://static.wikia.nocookie.net/warframe/images/5/5a/SevagothPrimeFull.png/revision/latest",
"https://wiki.warframe.com/images/YareliPrime.png?a28ee",
"https://wiki.warframe.com/images/CalibanPrime.png?feeeb",
"https://static.wikia.nocookie.net/warframe/images/?/?c/GyrePrimeFull.png/revision/latest" ];


let endTime = null;
let refreshCount = 0;
const maxRefreshes = 5;

function showMessage(msg) {
  document.getElementById("output").innerHTML += `<p>${msg}</p>`;
}

function updateCountdown() {
  if (!endTime) return;

  const now = new Date();
  const remainingMs = endTime - now;

  if (remainingMs <= 0) {
    if (refreshCount < maxRefreshes) {
      refreshCount++;
      showMessage(`<b>Refreshing data... (${refreshCount}/${maxRefreshes})</b>`);
      fetchdata();
    } else {
      showMessage("<b>Max refresh attempts reached.</b>");
      clearInterval(countdownInterval);
    }
    return;
  }

  const seconds = Math.floor(remainingMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const displaySeconds = seconds % 60;
  const displayMinutes = minutes % 60;
  const displayHours = hours % 24;

  const countdownMsg = `Time remaining: 
    <b>${days}</b> days, 
    <b>${displayHours}</b> hours, 
    <b>${displayMinutes}</b> minutes, 
    <b>${displaySeconds}</b> seconds`;

  document.getElementById("countdown").innerHTML = countdownMsg;
}

let countdownInterval = setInterval(updateCountdown, 1000); 

async function fetchdata() {
  try {
    const response = await fetch('https://api.warframestat.us/pc/vaultTrader');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();

    // Clear previous output
    document.getElementById("output").innerHTML = "";

    // Current frames
    const regex = /(?=.*MPV)(?=.*PrimeDualPack)/i;
    const filtered = data.inventory.filter(item => regex.test(item.uniqueName));
    const entryName = filtered[0]?.uniqueName || "";
    const matchedFrames = warframes.filter(frame =>
      entryName.toLowerCase().includes(frame.toLowerCase())
    );
    const frame1 = matchedFrames[0] || null;
    const frame2 = matchedFrames[1] || null;

    const warframeIndex = matchedFrames.map(matched =>
    warframes.findIndex(f => f.toLowerCase().replace(/\s+/g, '') === matched.toLowerCase().replace(/\s+/g, ''))
    );
    const frameImg1 = warframeImages[warframeIndex[0]]
    const frameImg2 = warframeImages[warframeIndex[1]]

    showMessage(
      `Current Prime Resurgence Frames: 
       <span class="frames">${frame1}</span> & 
       <span class="frames">${frame2}</span>`
    );

      const frameImgDisplay1 = `<img class="img1" src=${frameImg1}></img>`;
      const frameImgDisplay2 = `<img class="img1" src=${frameImg2}></img>`;
      document.getElementById("frameImg1").innerHTML = frameImgDisplay1;
      document.getElementById("frameImg2").innerHTML = frameImgDisplay2;

    // Next frames
    const scheduleAll = data.schedule;
    const schedule = scheduleAll[scheduleAll.length - 1];
    const entryName2 = schedule.item || "";
    const normalizedEntry = entryName2.replace(/\s+/g, '');
    const matchedFrames2 = warframes.filter(frame =>
      normalizedEntry.toLowerCase().includes(frame.toLowerCase())
    );

    const warframeIndex2 = matchedFrames2.map(matched =>
    warframes.findIndex(f => f.toLowerCase().replace(/\s+/g, '') === matched.toLowerCase().replace(/\s+/g, ''))
    );
    const frameImg3 = warframeImages[warframeIndex2[0]]
    const frameImg4 = warframeImages[warframeIndex2[1]]
    const frame3 = matchedFrames2[0] || null;
    const frame4 = matchedFrames2[1] || null;
    console.log(matchedFrames, matchedFrames2);

      const frameImgDisplay3 = `<img class="img2" src=${frameImg3}></img>`;
      const frameImgDisplay4 = `<img class="img2" src=${frameImg4}></img>`;
      document.getElementById("frameImg3").innerHTML = frameImgDisplay3;
      document.getElementById("frameImg4").innerHTML = frameImgDisplay4;

    if (frame1 !== frame3 && frame2 !== frame4) {
      showMessage(
        `Next Prime Resurgence Frames: 
         <span class="frames">${frame3}</span> & 
         <span class="frames">${frame4}</span>`
      );

      const scheduleTime = scheduleAll[scheduleAll.length - 2];
      endTime = new Date(scheduleTime.expiry);
      updateCountdown(); 
    } else {
      showMessage("Next resurgence not revealed :/");
    }

    
    if (!endTime) {
      endTime = new Date(Date.now() + 5 * 60 * 1000); 
    }

  } catch (error) {
    console.error(error);
    showMessage("Error: " + error.message);
  }
}

fetchdata();
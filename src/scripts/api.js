const warframes = ["Ash","Ember","Excalibur","Loki","Mag","Rhino","Trinity","Volt","Frost","Nyx",
  "Banshee","Saryn","Vauban","Nova","Nekros","Valkyr","Oberon","Zephyr","Hydroid",
  "Mirage","Limbo","Mesa","Chroma","Equinox","Atlas","Wukong","Ivara","Nezha",
  "Inaros","Titania","Nidus","Octavia","Harrow","Gara","Khora","Revenant","Garuda",
  "Baruuk","Hildryn","Wisp","Gauss","Grendel","Protea","Xaku","Lavos","Sevagoth",
  "Yareli","Caliban","Gyre","Styanax","Voruna","Citrine","Kullervo","Dagath",
  "Qorvex","Dante","Jade","Koumei","Cyte-09","Temple","Oraxia"];

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
    showMessage(
      `Current Prime Resurgence Frames: 
       <span class="frames">${frame1}</span> & 
       <span class="frames">${frame2}</span>`
    );

    // Next frames
    const scheduleAll = data.schedule;
    const schedule = scheduleAll[scheduleAll.length - 1];
    const entryName2 = schedule.item || "";
    const normalizedEntry = entryName2.replace(/\s+/g, '');
    const matchedFrames2 = warframes.filter(frame =>
      normalizedEntry.toLowerCase().includes(frame.toLowerCase())
    );
    const frame3 = matchedFrames2[0] || null;
    const frame4 = matchedFrames2[1] || null;

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


const emergencyServices = [
    {
      id: 1,
      name: "National Emergency Number",
      nameEn: "National Emergency",
      number: "999",
      category: "All",
      icon: "assets/emergency.png",
      bgColor: "bg-[#FFE3E2]",
    },
    {
      id: 2,
      name: "Police Helpline Number",
      nameEn: "Police",
      number: "999",
      category: "Police",
      icon: "assets/police.png",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      name: "Fire Service Number",
      nameEn: "Fire Service",
      number: "999",
      category: "Fire",
      icon: "assets/fire-service.png",
      bgColor: "bg-[#FFE3E2]",
    },
    {
      id: 4,
      name: "Ambulance Service",
      nameEn: "Ambulance",
      number: "1994-999999",
      category: "Health",
      icon: "assets/ambulance.png",
      bgColor: "bg-[#FFE3E2]",
    },
    {
      id: 5,
      name: "Women & Child Helpline",
      nameEn: "Women & Child Helpline",
      number: "109",
      category: "Help",
      icon: "assets/emergency.png",
      bgColor: "bg-[#FFE3E2]",
    },
    {
      id: 6,
      name: "Anti-Corruption Helpline",
      nameEn: "Anti-Corruption",
      number: "106",
      category: "Govt.",
      icon: "assets/emergency.png",
      bgColor: "bg-[#FFE3E2]",
    },
    {
      id: 7,
      name: "Electricity Helpline",
      nameEn: "Electricity Outage",
      number: "16216",
      category: "Electricity",
      icon: "assets/emergency.png",
      bgColor: "bg-[#FFE3E2]",
    },
    {
      id: 8,
      name: "Brac Helpline",
      nameEn: "Brac",
      number: "16445",
      category: "NGO",
      icon: "assets/brac.png",
      bgColor: "bg-[#FFE3E2]",
    },
    {
      id: 9,
      name: "Bangladesh Railway Helpline",
      nameEn: "Bangladesh Railway",
      number: "163",
      category: "Travel",
      icon: "assets/Bangladesh-Railway.png",
      bgColor: "bg-[#FFE3E2]",
    },
  ];
  
  
  let heartCount = 0;
  let coinCount = 100;
  let copyCount = 0;
  let callHistory = [];
  
  
  const heartCountEl = document.getElementById('heartCount');
  const coinCountEl = document.getElementById('coinCount');
  const copyCountEl = document.getElementById('copyCount');
  const cardsContainer = document.getElementById('cardsContainer');
  const historyList = document.getElementById('historyList');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  
  
  function generateCards() {
    cardsContainer.innerHTML = '';
  
    emergencyServices.forEach(service => {
      const cardHTML = `
        <div class="bg-white rounded-lg shadow-lg p-3 sm:p-5 lg:p-6">
          <div class="flex justify-between items-start mb-2 sm:mb-4 lg:mb-5">
            <div class="${service.bgColor} p-1 sm:p-2 lg:p-3 rounded-lg">
              <img src="${service.icon}" alt="${service.name}" class="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 rounded-full">
            </div>
            <button class="heart-btn text-gray-400 hover:text-red-500 transition-colors" data-id="${service.id}">
              <i class="fa-regular fa-heart text-sm sm:text-lg lg:text-xl"></i>
            </button>
          </div>
          <div class="mb-2 sm:mb-4 lg:mb-5">
            <h3 class="text-xs sm:text-sm lg:text-base hind-madurai-semibold text-gray-800 mb-1">${service.name}</h3>
            <p class="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 hind-madurai-regular">${service.nameEn}</p>
            <p class="text-base sm:text-xl lg:text-2xl hind-madurai-bold text-gray-800 mb-1 sm:mb-2">${service.number}</p>
            <span class="inline-block px-2 py-1 text-xs hind-madurai-medium text-gray-600 bg-gray-200 rounded-full">
              ${service.category}
            </span>
          </div>
          <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button class="copy-btn flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-2 sm:px-4 lg:px-5 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm lg:text-base hind-madurai-medium" data-number="${service.number}">
              <i class="fa-regular fa-copy text-xs sm:text-sm"></i>
              <span>Copy</span>
            </button>
            <button class="call-btn flex-1 bg-green-600 text-white py-2 px-2 sm:px-4 lg:px-5 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm lg:text-base hind-madurai-medium" data-name="${service.name}" data-number="${service.number}">
              <i class="fa-solid fa-phone text-xs sm:text-sm"></i>
              <span>Call</span>
            </button>
          </div>
        </div>
      `;
      cardsContainer.innerHTML += cardHTML;
    });
  }
  
  function updateHistoryDisplay() {
    historyList.innerHTML = '';
    callHistory.forEach(call => {
      const historyItem = `
        <div class="bg-[#fafafa] rounded-lg p-2 sm:p-4 lg:p-4 mb-2 sm:mb-3">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h4 class="hind-madurai-semibold text-gray-800 text-xs sm:text-sm mb-1">${call.name}</h4>
              <p class="text-gray-600 text-xs sm:text-sm hind-madurai-regular">${call.number}</p>
            </div>
            <div class="text-right ml-2 sm:ml-4 flex items-center">
              <p class="text-black-500 text-xs hind-madurai-regular">${call.time}</p>
            </div>
          </div>
        </div>
      `;
      historyList.innerHTML += historyItem;
    });
  }
  
  
  function addEventListeners() {
    document.querySelectorAll('.heart-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        heartCount++;
        heartCountEl.textContent = heartCount;
        this.classList.add('text-red-500');
        this.classList.remove('text-gray-400');
      });
    });
  
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const number = this.getAttribute('data-number');
  
       
        navigator.clipboard.writeText(number).then(() => {
          alert(`Number ${number} copied`);
          copyCount++;
          copyCountEl.textContent = copyCount;
        }).catch(() => {
         
          const textArea = document.createElement('textarea');
          textArea.value = number;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert(`Number ${number} copied`);
          copyCount++;
          copyCountEl.textContent = copyCount;
        });
      });
    });
  
    document.querySelectorAll('.call-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const serviceName = this.getAttribute('data-name');
        const serviceNumber = this.getAttribute('data-number');
  
        if (coinCount < 20) {
          alert('Not enough coins! You need at least 20 coins to make a call.');
          return;
        }
        coinCount -= 20;
        coinCountEl.textContent = coinCount;
  
        alert(`Calling ${serviceName} at ${serviceNumber}`);
        const currentTime = new Date().toLocaleTimeString();
        callHistory.unshift({ name: serviceName, number: serviceNumber, time: currentTime });
        updateHistoryDisplay();
      });
    });
  
    clearHistoryBtn.addEventListener('click', function () {
      callHistory = [];
      updateHistoryDisplay();
    });
  }
  
  
  function init() {
    generateCards();
    addEventListeners();
    updateHistoryDisplay();
  }
  
  init();
  

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
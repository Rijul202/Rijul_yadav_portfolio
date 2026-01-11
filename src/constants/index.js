export const myProjects = [
  {
    id: 1,
    title: "Implementation of Software Defined Networks (SDN)",
    description:
      "Designed and simulated network topologies using Mininet to analyze connectivity, latency, and bandwidth performance with programmable flow management through Ryu SDN Controller.",
    subDescription: [
      "Designed and simulated network topologies (minimal, custom, tree, and linear) using Mininet to analyze connectivity, latency, and bandwidth performance.",
      "Integrated the Ryu SDN Controller for programmable flow management, demonstrating dynamic traffic control and centralized network intelligence.",
      "Conducted performance tests (pingall, iperf, bandwidth constraints) to evaluate traffic engineering and optimize heavy-host resource allocation.",
      "Built a scalable SDN testbed in a virtualized Linux environment, providing a foundation for data center, cloud, and 5G/edge networking research.",
    ],
    href: "https://github.com/Rijul202/sdn-mininet-project",
    logo: "",
    image: "/assets/projects/sdn-network.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Mininet",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "Ryu Controller",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Linux VM",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Facial Recognition-Based Attendance System",
    description:
      "A real-time attendance system using OpenCV for facial recognition, replacing manual and RFID-based processes in institutional settings with 95% recognition accuracy.",
    subDescription: [
      "Developed a real-time attendance system using OpenCV for facial recognition, replacing manual and RFID-based processes in institutional settings.",
      "Achieved 95% recognition accuracy across 20+ individuals in dynamic conditions; reduced manual effort by 90% through seamless Excel-based recordkeeping.",
      "Delivered a plug-and-play, scalable solution designed for easy deployment in classrooms, offices, and training centers.",
    ],
    href: "https://github.com/divijwadhwa1/COLLEGE_ATTENDENCE_MANAGER",
    logo: "",
    image: "/assets/projects/facial-recognition.webp",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "OpenCV",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "NumPy",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Excel Automation",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Smart Gas Leak Detection & Automatic Regulator Control System (IoT)",
    description:
      "Built a smart safety system to detect gas leakage and monitor cylinder level using MQ-5 and ultrasonic sensors, with automated safety actions including buzzer alerts and servo-based regulator shut-off.",
    subDescription: [
      "Built a smart safety system to detect gas leakage and monitor cylinder level using MQ-5 and ultrasonic sensors, displaying real-time readings on an I2C LCD.",
      "Programmed automated safety actions including buzzer alerts and servo-based regulator shut-off when abnormal gas levels were detected.",
      "Designed and wired the complete embedded circuit with stable power delivery, sensor calibration, and reliable detection thresholds for real-world use.",
    ],
    href: "https://github.com/Rijul202/Gas-Cylinder-Alert-and-IoT-Gas-Detection-System",
    logo: "",
    image: "/assets/projects/gas-leak-detection.png",
    tags: [
      {
        id: 1,
        name: "Arduino",
        path: "/assets/logos/git.svg",
      },
      {
        id: 2,
        name: "MQ-5 Sensor",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "Embedded C",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 4,
        name: "IoT",
        path: "/assets/logos/git.svg",
      },
    ],
  },
  {
    id: 4,
    title: "DSA-Based Project | Core Data Structures & Algorithms",
    description:
      "Developed a menu-driven application implementing core Data Structures & Algorithms including arrays, stacks, queues, linked lists, trees, and searching/sorting algorithms with analytics dashboard.",
    subDescription: [
      "Developed a menu-driven application implementing core Data Structures & Algorithms including arrays, stacks, queues, linked lists, trees, and searching/sorting algorithms.",
      "Applied algorithmic problem-solving techniques to efficiently handle operations such as insertion, deletion, traversal, and data retrieval.",
      "Focused on time and space complexity optimization, selecting appropriate data structures based on use cases.",
      "Strengthened understanding of DSA fundamentals through modular, well-structured, and reusable code.",
    ],
    href: "https://github.com/Sudeshhna-01/Dsa-based-Project",
    logo: "",
    image: "/assets/projects/cp analytics.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Smart Nearby Places Recommender",
    description:
      "Developed a location-based web application that recommends nearby places based on user intent modes such as Work, Date, Quick Bite, and Budget, using real-time geolocation and Google Maps API.",
    subDescription: [
      "Developed a location-based web application that recommends nearby places based on user intent modes such as Work, Date, Quick Bite, and Budget, using real-time geolocation.",
      "Integrated Google Maps JavaScript API and Places API to fetch live data including ratings, distance, price level, and opening hours of nearby locations.",
      "Implemented custom filtering and sorting logic to prioritize open places, proximity, ratings, and budget constraints for intelligent recommendations.",
      "Designed an interactive UI with synchronized map markers and recommendation list, enabling seamless user interaction and navigation.",
      "Built a modular React architecture using reusable components, custom hooks, and utility functions to ensure scalability and maintainability.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/smart nearby place.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Google Maps API",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Places API",
        path: "/assets/logos/git.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918218859582",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rijul-yadav-1567b6324/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rijul._yadav",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "SDE Intern",
    job: "POWER GRID",
    date: "Aug. 2025 – Sep. 2025",
    contents: [
      "Enhanced interactive dashboards for real-time monitoring of grid status, improving visibility and enabling faster decision-making for operational teams.",
      "Developed automated test scripts and performed end-to-end verification of software components, increasing system reliability and reducing manual testing efforts.",
      "Worked on a network and security model to enable secure data transfer across devices.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

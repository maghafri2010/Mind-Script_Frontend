let tasks = [
    {title: "onProgress",
        content: []
    },
    {title: "Completed",
        content: []
    },
    {title: "Upcoming",
        content: []
    },
    {title: "Overdue",
        content: []
    },
];



let onProgress = [
    
  {
    title: "Add responsive styling using Tailwind",
    date: "July 9, 2025 → July 16, 2025",
    status: "onProgress",
    project: "N/A",
    team: "N/A"

  },
  {
    title: "Integrate user authentication with Firebase",
    date: "July 10, 2025 → July 18, 2025",
    status: "onProgress",
    project: "Client Portal",
    team: "Frontend"
  },
  {
    title: "Refactor dashboard layout for accessibility",
    date: "July 11, 2025 → July 20, 2025",
    status: "onProgress",
    project: "Admin Panel",
    team: "UI/UX"
  },
  {
    title: "Implement API error handling and retry logic",
    date: "July 13, 2025 → July 22, 2025",
    status: "onProgress",
    project: "Payment System",
    team: "Backend"
  }
];
const completed = [
  {
    title: "Fix login bug on mobile devices",
    date: "June 20, 2025 → June 25, 2025",
    status: "Completed",
    project: "Authentication",
    team: "Frontend"
  },
  {
    title: "Deploy version 2.1 to production",
    date: "June 15, 2025 → June 19, 2025",
    status: "Completed",
    project: "Release",
    team: "DevOps"
  },
  {
    title: "Write unit tests for user module",
    date: "June 10, 2025 → June 14, 2025",
    status: "Completed",
    project: "Testing",
    team: "QA"
  },
  {
    title: "Optimize database queries for reports",
    date: "June 5, 2025 → June 9, 2025",
    status: "Completed",
    project: "Backend",
    team: "DB Admin"
  },
  {
    title: "Design new landing page mockups",
    date: "June 1, 2025 → June 4, 2025",
    status: "Completed",
    project: "Marketing",
    team: "Design"
  }
];
const overdue = [
  
  {
    title: "Set up CI/CD pipeline",
    date: "May 8, 2025 → May 18, 2025",
    status: "Overdue",
    project: "DevOps",
    team: "Infrastructure"
  },
  {
    title: "Conduct security audit",
    date: "April 25, 2025 → May 5, 2025",
    status: "Overdue",
    project: "Security",
    team: "Audit"
  },
  {
    title: "Migrate user data to new schema",
    date: "April 28, 2025 → May 8, 2025",
    status: "Overdue",
    project: "Database",
    team: "Backend"
  }
];
const upcoming = [
  {
    title: "Plan Q3 marketing campaign",
    date: "August 1, 2025 → August 10, 2025",
    status: "Upcoming",
    project: "Marketing",
    team: "Marketing"
  },
  {
    title: "Integrate payment gateway",
    date: "August 5, 2025 → August 15, 2025",
    status: "Upcoming",
    project: "E-commerce",
    team: "Backend"
  },
  {
    title: "Conduct user feedback survey",
    date: "August 10, 2025 → August 20, 2025",
    status: "Upcoming",
    project: "Product Research",
    team: "UX"
  },
  {
    title: "Upgrade server hardware",
    date: "August 15, 2025 → August 25, 2025",
    status: "Upcoming",
    project: "Infrastructure",
    team: "IT"
  },
  {
    title: "Develop chatbot for support",
    date: "August 20, 2025 → August 30, 2025",
    status: "Upcoming",
    project: "Customer Support",
    team: "AI Team"
  }
];

for (let i = 0; i <onProgress.length; i++) {
    tasks[0].content.push(onProgress[i].title);
}
for (let i = 0; i <completed.length; i++) {
    tasks[1].content.push(completed[i].title);
}
for (let i = 0; i <upcoming.length; i++) {
    tasks[2].content.push(upcoming[i].title);
}
for (let i = 0; i <overdue.length; i++) {
    tasks[3].content.push(overdue[i].title);
}


const reminder = [
    {
        title: "Meeting with client",
        date: "July 17, 2025",
        time: "10:00 AM",
        project: "Client Portal",
        team: "Frontend"
    },
    {
        title: "Code review session",
        date: "July 18, 2025",
        time: "2:00 PM",
        project: "Admin Panel",
        team: "UI/UX"
    },
    {
        title: "Team stand-up meeting",
        date: "July 19, 2025",
        time: "9:00 AM",
        project: "Payment System",
        team: "Backend"
    },
     {
        title: "Meeting with client",
        date: "July 17, 2025",
        time: "10:00 AM",
        project: "Client Portal",
        team: "Frontend"
    }
];

const pieData = [
  { id: "On Progress", label: "On Progress", value: onProgress.length },
  { id: "Completed", label: "Completed", value: completed.length },
  { id: "Upcoming", label: "Upcoming", value: upcoming.length },
  { id: "Overdue", label: "Overdue", value: overdue.length },
];

const project = [
    
    {title: "Project A", membres: "Alice, Bob", status: "In Progress", percentage: "60%", date: "July 30, 2025"},
    {title: "Project B", membres: "Charlie, Dave", status: "Completed", percentage: "100%", date: "July 15, 2025"},
    {title: "Project C", membres: "Eve, Frank", status: "Upcoming", percentage: "0%", date: "August 10, 2025"},
    {title: "Project D", membres: "Grace, Heidi", status: "Overdue", percentage: "20%", date: "July 5, 2025"}
    
]

// Generate calendar data dynamically from all tasks (onProgress, completed, overdue, upcoming)
function extractStartDate(dateRange) {
    // Expects format: "July 9, 2025 → July 16, 2025"
    if (!dateRange) return null;
    const [start] = dateRange.split("→").map(s => s.trim());
    // Convert to ISO date string
    const date = new Date(start);
    if (isNaN(date)) return null;
    return date.toISOString().slice(0, 10);
}

const allTasks = [...onProgress, ...completed, ...overdue, ...upcoming];
const dateCount = {};

allTasks.forEach(task => {
    const day = extractStartDate(task.date);
    if (day) {
        dateCount[day] = (dateCount[day] || 0) + 1;
    }
});

const calendarData = Object.entries(dateCount).map(([day, value]) => ({ day, value }));

export default { calendarData, pieData, tasks, onProgress, completed, upcoming, overdue, reminder, project };
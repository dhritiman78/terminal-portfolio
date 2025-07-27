import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState('~');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const username = "dhritiman";
  const hostname = "kali";
  const ip = "192.168.1.100";

  const about = "I'm Dhritiman Saikia, a passionate Computer Science student at Tezpur University with expertise in full-stack development. I love building interactive applications and contributing to open-source projects.";

  const education = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Tezpur University",
      year: "2023-Present",
      cgpa: "7.38 (Current)"
    },
    {
      degree: "Higher Secondary (10+2)",
      institution: "AHSEC Board", 
      year: "2022",
      percentage: "74.0%"
    },
    {
      degree: "High School (10)",
      institution: "SEBA Board",
      year: "2020", 
      percentage: "80.3%"
    }
  ];

  const experience = [
    {
      title: "Backend Developer Intern",
      company: "Bael Tea",
      period: "Dec 2024 - Apr 2025",
      location: "Remote",
      description: "Developed and maintained the backend of Bael Tea's e-commerce platform using Express.js, enabling seamless product listing, user management, and order processing."
    },
    {
      title: "Full Stack Developer",
      company: "GDG (Google Developer Groups) TEZU",
      period: "Oct 2024 - May 2025",
      location: "Tezpur University",
      description: "Contributed to the development of the official GDG TEZU website using Next.js, enhancing the club's online presence and event visibility."
    },
    {
      title: "Full Stack Developer",
      company: "TechXetra",
      period: "Sep 2024 - Nov 2025", 
      location: "Tezpur University",
      description: "Developed a full-stack website for the annual technical fest using React (TypeScript), MongoDB, Express.js, and Redis. Implemented dynamic event registration and real-time updates."
    }
  ];

  const projects = [
    {
      title: "CEE College Predictor",
      description: "Full-stack app to predict colleges and branches based on CEE rank using React, Express, and PostgreSQL. Implemented cutoff analysis with filters and used Sentry for monitoring.",
      tech: "React, Express.js, PostgreSQL, Redis, Sentry",
      link: "cee-assam-college-predictor.vercel.app",
      date: "Apr 2025"
    },
    {
      title: "turing.ai",
      description: "AI-driven learning platform generating personalized courses using React, Express, and Google Gemini API. Tailored course content based on user skill level.",
      tech: "React, Express.js, Google Gemini API",
      link: "github.com/neo-0007/hackvita-2025",
      date: "Apr 2025"
    },
    {
      title: "Harmony",
      description: "Voice-driven AI assistant with Express.js backend, integrating Google Gemini API. Implemented real-time mood detection and mental well-being suggestions.",
      tech: "Express.js, Google Gemini API, Voice Recognition",
      link: "github.com/neo-0007/harmoni",
      date: "Mar 2025"
    },
    {
      title: "Prescriptrix",
      description: "Platform to upload and convert handwritten prescriptions to text using Google Gemini OCR. Enabled secure access via OTP for pharmacists.",
      tech: "Google Gemini OCR, Express.js, OTP System",
      link: "github.com/neo-0007/Prescriptrix",
      date: "Nov 2024"
    },
    {
      title: "Hostel Fee Management System",
      description: "Digital receipt upload system replacing manual fee submission. Enabled admins to filter payments and export records to CSV or download as ZIP files.",
      tech: "React, Express.js, File Management",
      link: "github.com/dhritiman78/Hostel-fee-management-system",
      date: "Apr 2024"
    }
  ];

  const skills = {
    "Programming": "C, C++, Python, JavaScript, Java*",
    "Frontend": "ReactJS, PHP, NextJS*",
    "Backend": "ExpressJS, PHP, NextJS*, FastAPI*", 
    "Database": "MongoDB, MySQL, Redis, PostgreSQL*",
    "Tools": "Git, Github, Postman"
  };

  const socials = {
    "LinkedIn": `https://www.linkedin.com/in/dhritiman-saikia-1a03112a5`,
    "GitHub": "https://github.com/dhritiman78",
    "Email": "dhritiman.saikia.11b.244@gmail.com",
    "Phone": "+91-7002211547"
  };

  const getWelcomeMessage = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return `
╔═══════════════════════════════════╗
║                                   ║
║ ██████╗ ██╗  ██╗██████╗ ██╗████████╗
║ ██╔══██╗██║  ██║██╔══██╗██║╚══██╔══╝
║ ██║  ██║███████║██████╔╝██║   ██║   
║ ██║  ██║██╔══██║██╔══██╗██║   ██║   
║ ██████╔╝██║  ██║██║  ██║██║   ██║   
║ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝   
║ ██╗███╗   ███╗ █████╗ ███╗   ██╗    
║ ██║████╗ ████║██╔══██╗████╗  ██║    
║ ██║██╔████╔██║███████║██╔██╗ ██║    
║ ██║██║╚██╔╝██║██╔══██║██║╚██╗██║    
║ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║    
║ ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    
║                                   ║
║    Dhritiman's Portfolio Terminal ║
║       Penetration Testing Mode    ║
║                                   ║
╚═══════════════════════════════════╝

Target: dhritiman-portfolio.local
[✓] Skills enumerated
[✓] Projects discovered  
[✓] Experience mapped
[✓] Contact vectors identified

Type 'help' for available tools.
`;
    }
    return `
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║ ██████╗ ██╗  ██╗██████╗ ██╗████████╗██╗███╗   ███╗ █████╗ ███╗   ██╗
║ ██╔══██╗██║  ██║██╔══██╗██║╚══██╔══╝██║████╗ ████║██╔══██╗████╗  ██║
║ ██║  ██║███████║██████╔╝██║   ██║   ██║██╔████╔██║███████║██╔██╗ ██║
║ ██║  ██║██╔══██║██╔══██╗██║   ██║   ██║██║╚██╔╝██║██╔══██║██║╚██╗██║
║ ██████╔╝██║  ██║██║  ██║██║   ██║   ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║
║ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
║                                                               ║
║              Welcome to Dhritiman's Portfolio Terminal        ║
║                     Penetration Testing Mode                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝

Target acquired: dhritiman-portfolio.local
Scanning for vulnerabilities... 
[✓] Skills enumerated
[✓] Projects discovered  
[✓] Experience mapped
[✓] Contact vectors identified

Type 'help' to see available exploitation tools.
`;
  };

  const getHelpMessage = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return `
Available Commands:
────────────────────────────────────
  whoami     - Current user info
  about      - Profile overview
  education  - Education background
  experience - Work history  
  projects   - Project portfolio
  skills     - Technical skills
  contact    - Contact info
  resume     - CV download
  clear      - Clear terminal
  exit       - Terminate session
  ls         - List directory
  pwd        - Working directory
────────────────────────────────────
`;
    }
    return `
Available Commands (Exploitation Tools):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  whoami          - Display current user information
  about           - Reconnaissance on target profile  
  education       - Enumerate educational background
  experience      - List work history and internships
  projects        - Display project portfolio
  skills          - Show technical capabilities
  contact         - Extract contact information
  resume          - Download CV payload
  clear           - Clear terminal buffer
  exit            - Terminate session
  ls              - List directory contents
  pwd             - Print working directory
  cat <file>      - Display file contents
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
  };

  const commands = {
    help: () => getHelpMessage(),
    
    whoami: () => `${username}@${hostname}`,
    
    about: () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      if (isMobile) {
        return `
╭─ TARGET PROFILE ──────────────────╮
│                                   │
│  ${about}
│                                   │
│  Status: Active Developer         │
│  Location: Assam, India           │
│  Focus: Full-Stack Development    │
│                                   │
╰───────────────────────────────────╯
`;
      }
      return `
╭─ TARGET PROFILE ─────────────────────────────────────────────────╮
│                                                                  │
│  ${about}
│                                                                  │
│  Current Status: Active Developer & Student                      │
│  Location: Assam, India                                          │
│  Specialization: Full-Stack Development                          │
│                                                                  │
╰──────────────────────────────────────────────────────────────────╯
`;
    },
    
    education: () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      let output = isMobile ? `
╭─ EDUCATION ─────────────────────────────╮
│                                         │` : `
╭─ EDUCATIONAL BACKGROUND ─────────────────────────────────────────╮
│                                                                  │`;
      
      education.forEach(edu => {
        if (isMobile) {
          output += `
│  🎓 ${edu.degree}
│     ${edu.institution}
│     ${edu.year} - ${edu.cgpa || edu.percentage}
│                                         │`;
        } else {
          output += `
│  🎓 ${edu.degree}
│     Institution: ${edu.institution}
│     Year: ${edu.year}
│     Grade: ${edu.cgpa || edu.percentage}
│                                                                  │`;
        }
      });
      
      output += isMobile ? `
╰─────────────────────────────────────────╯` : `
╰──────────────────────────────────────────────────────────────────╯`;
      return output;
    },
    
    experience: () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      let output = isMobile ? `
╭─ EXPERIENCE ────────────────────────────╮
│                                         │` : `
╭─ WORK EXPERIENCE ────────────────────────────────────────────────╮
│                                                                  │`;
      
      experience.forEach(exp => {
        if (isMobile) {
          output += `
│  💼 ${exp.title}
│     ${exp.company}
│     ${exp.period}
│     
│     ${exp.description}
│                                         │`;
        } else {
          output += `
│  💼 ${exp.title}
│     Company: ${exp.company}
│     Period: ${exp.period}
│     Location: ${exp.location}
│     
│     ${exp.description}
│                                                                  │`;
        }
      });
      
      output += isMobile ? `
╰─────────────────────────────────────────╯` : `
╰──────────────────────────────────────────────────────────────────╯`;
      return output;
    },
    
    projects: () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      let output = isMobile ? `
╭─ PROJECTS ──────────────────────────────╮
│                                         │` : `
╭─ PROJECT PORTFOLIO ──────────────────────────────────────────────╮
│                                                                  │`;
      
      projects.forEach(project => {
        if (isMobile) {
          output += `
│  🚀 ${project.title} (${project.date})
│     ${project.description}
│     
│     Tech: ${project.tech}
│     Link: ${project.link}
│                                         │`;
        } else {
          output += `
│  🚀 ${project.title} (${project.date})
│     ${project.description}
│     
│     Tech Stack: ${project.tech}
│     Link: ${project.link}
│                                                                  │`;
        }
      });
      
      output += isMobile ? `
╰─────────────────────────────────────────╯` : `
╰──────────────────────────────────────────────────────────────────╯`;
      return output;
    },
    
    skills: () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      let output = isMobile ? `
╭─ SKILLS ────────────────────────────────╮
│                                         │` : `
╭─ TECHNICAL ARSENAL ──────────────────────────────────────────────╮
│                                                                  │`;
      
      Object.entries(skills).forEach(([category, skillList]) => {
        if (isMobile) {
          output += `
│  ⚡ ${category}: 
│     ${skillList}`;
        } else {
          output += `
│  ⚡ ${category}: ${skillList}`;
        }
      });
      
      output += isMobile ? `
│                                         │
│  * = elementary proficiency             │
│                                         │
╰─────────────────────────────────────────╯` : `
│                                                                  │
│  Note: * indicates elementary proficiency                       │
│                                                                  │
╰──────────────────────────────────────────────────────────────────╯`;
      return output;
    },
    
    contact: () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      let output = isMobile ? `
╭─ CONTACT ───────────────────────────────╮
│                                         │` : `
╭─ CONTACT VECTORS ────────────────────────────────────────────────╮
│                                                                  │`;
      
      Object.entries(socials).forEach(([platform, link]) => {
        if (isMobile) {
          output += `
│  📡 ${platform}: 
│     ${link}`;
        } else {
          output += `
│  📡 ${platform}: ${link}`;
        }
      });
      
      output += isMobile ? `
│                                         │
╰─────────────────────────────────────────╯` : `
│                                                                  │
╰──────────────────────────────────────────────────────────────────╯`;
      return output;
    },
    
    resume: () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      return isMobile ? `
╭─ CV DOWNLOAD ─────────────────────╮
│                                   │
│  🔗 Resume: Contact via email     │
│     dhritiman.saikia.11b.244      │
│     @gmail.com                    │
│                                   │
│  📊 Status: Ready for deployment  │
│                                   │
╰───────────────────────────────────╯
` : `
╭─ PAYLOAD DOWNLOAD ───────────────────────────────────────────────╮
│                                                                  │
│  🔗 Resume/CV: Contact via email for latest version             │
│     Email: dhritiman.saikia.11b.244@gmail.com                   │
│                                                                  │
│  📊 Status: Ready for deployment                                │
│                                                                  │
╰──────────────────────────────────────────────────────────────────╯
`;
    },
    
    clear: () => 'CLEAR',
    cls: () => 'CLEAR',
    
    exit: () => 'Connection terminated. Goodbye!',
    
    pwd: () => `/home/${username}${currentPath === '~' ? '' : currentPath}`,
    
    ls: () => `
total 24
drwxr-xr-x 2 ${username} ${username} 4096 Jul 28 10:30 .
drwxr-xr-x 3 root     root     4096 Jul 28 10:29 ..
-rw-r--r-- 1 ${username} ${username}  220 Jul 28 10:29 .bash_logout
-rw-r--r-- 1 ${username} ${username} 3771 Jul 28 10:29 .bashrc
-rw-r--r-- 1 ${username} ${username}  807 Jul 28 10:29 .profile
-rw-r--r-- 1 ${username} ${username} 2048 Jul 28 10:30 portfolio.txt
-rwxr-xr-x 1 ${username} ${username} 1024 Jul 28 10:30 exploit.sh
    `,
    
    'cat portfolio.txt': () => 'This is my interactive portfolio! Use the available commands to explore.',
    
    neofetch: () => `
                    ██████████                   ${username}@${hostname}
                  ██            ██               ─────────────────────
                ██                ██             OS: Kali GNU/Linux Rolling
              ██                    ██           Host: Portfolio Terminal
            ██                        ██         Kernel: 6.1.0-kali7-amd64
          ██                            ██       Uptime: Connected
        ██                                ██     Packages: Unlimited Skills
      ██                                    ██   Shell: bash 5.2.15
    ██                                        ██ CPU: Full-Stack Developer
  ██                      ████                ██Memory: Creative Solutions
██                    ████████████              ██
██                  ████████████████            ██
██                ██████████████████            ██
██              ████████████████████            ██
  ██          ██████████████████████          ██
    ██      ████████████████████████        ██
      ██  ████████████████████████        ██
        ████████████████████████        ██
          ████████████████████        ██
            ████████████████        ██
              ████████████        ██
                ████████        ██
                  ████        ██
                    ██    ██
                      ████
    `
  };

  const simulateLoading = async (command) => {
    const loadingChars = ['|', '/', '-', '\\'];
    let i = 0;
    const loadingInterval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev];
        newLines[newLines.length - 1] = `Executing ${command}... ${loadingChars[i]}`;
        return newLines;
      });
      i = (i + 1) % loadingChars.length;
    }, 100);

    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
    clearInterval(loadingInterval);
  };

  const handleCommand = async (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
      return;
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
      return;
    }

    if (e.key === 'Enter' && !isLoading) {
      const cmd = input.trim().toLowerCase();
      const fullCommand = `┌──(${username}㉿${hostname})-[${currentPath}]
└─$ ${input}`;
      
      setLines(prev => [...prev, fullCommand]);
      
      // Add to command history if not empty
      if (input.trim()) {
        setCommandHistory(prev => [...prev, input.trim()]);
        setHistoryIndex(-1);
      }
      
      setInput('');

      if (cmd === '') return;

      if (commands[cmd] === undefined && !cmd.startsWith('cat ')) {
        setLines(prev => [...prev, `bash: ${cmd}: command not found`]);
        return;
      }

      // Show loading for certain commands
      if (['projects', 'experience', 'education', 'skills'].includes(cmd)) {
        setIsLoading(true);
        setLines(prev => [...prev, `Executing ${cmd}...`]);
        await simulateLoading(cmd);
        setIsLoading(false);
      }

      const output = commands[cmd] ? commands[cmd]() : `bash: ${cmd}: command not found`;
      
      if (output === 'CLEAR') {
        setLines([getWelcomeMessage()]);
      } else if (cmd === 'exit') {
        setLines(prev => [...prev, output]);
        setTimeout(() => {
          setLines(['Session terminated by user. Refresh to reconnect.']);
        }, 1000);
      } else {
        setLines(prev => [...prev, output]);
      }
    }
  };

  // Click anywhere to focus input
  const handleTerminalClick = () => {
    if (inputRef.current && !isLoading) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    setLines([getWelcomeMessage()]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (inputRef.current && !isLoading) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  return (
    <div 
      className="bg-black text-green-400 font-mono min-h-screen relative overflow-hidden cursor-text"
      onClick={handleTerminalClick}
    >
      {/* Dragon Background - More visible */}
      <div 
        className="fixed inset-0 opacity-20 bg-center bg-no-repeat bg-contain pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cg fill='%2300ff41' stroke='%2300ff41' stroke-width='2'%3E%3C!-- Dragon Head --%3E%3Cellipse cx='400' cy='200' rx='80' ry='60'/%3E%3C!-- Eyes --%3E%3Ccircle cx='370' cy='180' r='8' fill='%23ff0000'/%3E%3Ccircle cx='430' cy='180' r='8' fill='%23ff0000'/%3E%3C!-- Dragon Body --%3E%3Cellipse cx='400' cy='320' rx='120' ry='80'/%3E%3C!-- Wings --%3E%3Cpath d='M280 280 Q250 250 220 280 Q250 310 280 320 Z'/%3E%3Cpath d='M520 280 Q550 250 580 280 Q550 310 520 320 Z'/%3E%3C!-- Tail --%3E%3Cpath d='M400 400 Q450 450 500 400 Q450 430 400 450' fill='none'/%3E%3C!-- Spikes --%3E%3Cpath d='M400 140 L390 120 L400 100 L410 120 Z'/%3E%3Cpath d='M380 150 L370 130 L380 110 L390 130 Z'/%3E%3Cpath d='M420 150 L430 130 L420 110 L410 130 Z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div 
        ref={terminalRef}
        className="relative z-10 p-2 sm:p-4 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-900"
      >
        <div className="max-w-full">
          {lines.map((line, i) => (
            <pre key={i} className="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed mb-1 break-words overflow-x-auto max-w-full">
              {line}
            </pre>
          ))}
          
          {!isLoading && (
            <div className="flex flex-col sm:flex-row sm:items-center mt-2">
              <div className="flex items-center flex-wrap">
                <span className="text-blue-400 font-bold">┌──(</span>
                <span className="text-red-400">{username}</span>
                <span className="text-blue-400">㉿</span>
                <span className="text-red-400">{hostname}</span>
                <span className="text-blue-400 font-bold">)-[</span>
                <span className="text-white">{currentPath}</span>
                <span className="text-blue-400 font-bold">]</span>
              </div>
              <div className="flex items-center w-full sm:w-auto">
                <span className="text-blue-400 font-bold">└─$ </span>
                <input
                  ref={inputRef}
                  className="bg-transparent text-green-400 outline-none flex-1 ml-1 text-xs sm:text-sm"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  disabled={isLoading}
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
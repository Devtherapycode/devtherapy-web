
const consoleMessages = [
  {
    message: "%cWelcome to Devtherapy 🧠",
    style: "color: #3CE6B0; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #3CE6B0;"
  },
  {
    message: "%cYou found the secret console. Now fix that one bug haunting your dreams. 🐛",
    style: "color: #3CE6B0; font-size: 14px;"
  },
  {
    message: "🔥 Recommended Episode: #7 with Zura Abelashvili – GPUs, GTA VI, and Ray Tracing"
  },
  {
    message: "Psst... ever thought about being on the show? DM us on X (@devtherapy_io) 📧"
  },
  {
    message: "\"99 little bugs in the code, 99 bugs in the code...\" 🎵"
  },
  {
    message: "// TODO: Remember to take therapy breaks between debugging sessions"
  },
  {
    message: "console.log('Hello fellow developer! May your builds be green and your coffee strong ☕')"
  },
  {
    message: "%cif (stressed === true) { listen('devtherapy'); }",
    style: "color: #3CE6B0; font-family: 'Courier New', monospace; background: rgba(60, 230, 176, 0.1); padding: 4px;"
  }
];

export const displayConsoleEasterEggs = () => {
  // Welcome message
  console.log(consoleMessages[0].message, consoleMessages[0].style);
  
  // Add a small delay for dramatic effect
  setTimeout(() => {
    console.log(consoleMessages[1].message, consoleMessages[1].style);
  }, 500);
  
  // Display other messages with random delays
  consoleMessages.slice(2).forEach((msg, index) => {
    setTimeout(() => {
      if (msg.style) {
        console.log(msg.message, msg.style);
      } else {
        console.log(msg.message);
      }
    }, 1000 + (index * 800));
  });
  
  // Final ASCII art or signature
  setTimeout(() => {
    console.log(`
%c██████╗ ███████╗██╗   ██╗████████╗██╗  ██╗███████╗██████╗  █████╗ ██████╗ ██╗   ██╗
██╔══██╗██╔════╝██║   ██║╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝
██║  ██║█████╗  ██║   ██║   ██║   ███████║█████╗  ██████╔╝███████║██████╔╝ ╚████╔╝ 
██║  ██║██╔══╝  ╚██╗ ██╔╝   ██║   ██╔══██║██╔══╝  ██╔══██╗██╔══██║██╔═══╝   ╚██╔╝  
██████╔╝███████╗ ╚████╔╝    ██║   ██║  ██║███████╗██║  ██║██║  ██║██║        ██║   
╚═════╝ ╚══════╝  ╚═══╝     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝   
                                                                                     
%cTherapy for developers, one bug at a time 💚
    `, 
    "color: #3CE6B0; font-family: monospace; font-size: 10px;",
    "color: #3CE6B0; font-style: italic; font-size: 12px;"
    );
  }, 4000);
};

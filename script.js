const faqs = [
  {
    q: ["certificate", "internship certificate", "certificate ela vastadi"],
    a: "Certificate kosam minimum 2 or 3 tasks complete cheyali. Submit only one task = incomplete."
  },
  {
    q: ["submit", "submission", "form", "ela submit cheyyali"],
    a: "Completed task ni GitHub lo upload chesi, Submission Form lo links submit cheyyali. Form WhatsApp group lo share chestaru."
  },
  {
    q: ["github", "repo name", "repository"],
    a: "Repo name format: CodeAlpha_ProjectName. Example: CodeAlpha_ChatbotFAQs"
  },
  {
    q: ["linkedin", "post", "video"],
    a: "LinkedIn lo internship status share cheyali, @CodeAlpha tag cheyali. Project video explanation kooda post cheyali GitHub link tho."
  },
  {
    q: ["tasks", "how many", "enni tasks"],
    a: "Mee domain nundi 4 tasks lo 2 or 3 complete cheyali. One task only = certificate radu."
  },
  {
    q: ["time", "deadline", "time frame"],
    a: "Assigned projects ni mentioned time frame lo complete cheyyali. Exact dates WhatsApp group lo check chey."
  }
];

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const userText = input.value.trim().toLowerCase();
  
  if (userText === "") return;

  // User message display
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = input.value;
  chatBox.appendChild(userMsg);

  // Bot reply logic
  let botReply = "Sorry, nenu aa question ki answer nerchukoledu. 'certificate', 'submit', 'github' lanti words tho adugu.";
  
  for (let faq of faqs) {
    for (let keyword of faq.q) {
      if (userText.includes(keyword)) {
        botReply = faq.a;
        break;
      }
    }
  }

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.innerText = botReply;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key support
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});
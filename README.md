# Unievent
This is the evnt platform that can help people get the information of all events hapening in the clg
Here is a professional GitHub `README.md` for the **UniEvent** project, structured to highlight the architecture, scalability, and technical depth of the full-stack system.

---

```markdown
# 🎓 UniEvent

**UniEvent** is a college event discovery and aggregation platform designed to solve the problem of fragmented event information across university campuses. It automatically collects event data from multiple college websites, stores it in a centralized database, and presents it through a modern web interface. Additionally, it features an AI-powered assistant to help students find relevant events using natural language.

---

## ✨ Features

- **Automated Data Aggregation** – Web scrapers collect events from various college portals.
- **Centralized Event Hub** – Browse, search, and filter events from multiple institutions in one place.
- **AI-Powered Assistant** – Ask questions like *"What tech events are happening this week?"* and get intelligent answers.
- **Modern UI/UX** – Built with Next.js and TailwindCSS for a fast, responsive experience.
- **RESTful API** – Well-documented endpoints for integration with external tools.

---

## 🏗️ System Architecture

The system consists of three main components: a web scraper, a core backend with database, and a Next.js frontend. An external AI Assistant service interacts with the same API.

```text
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  College Sites  │────▶│  Web Scraper    │────▶│   Node.js API   │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                          │
                                                          ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ AI Assistant    │────▶│   UniEvent API  │◀────│    MongoDB      │
│    Tool         │     │                 │     │    Atlas        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                          ▲
                                                          │
┌─────────────────┐     ┌─────────────────┐              │
│   Users         │────▶│  UniEvent Site  │──────────────┘
│                 │     │   (Next.js)     │
└─────────────────┘     └─────────────────┘
```

---

## 🛠️ Tech Stack

| Layer          | Technologies                                                                 |
|----------------|------------------------------------------------------------------------------|
| **Frontend**   | Next.js, TailwindCSS, React                                                 |
| **Backend**    | Node.js, Express.js, REST API                                               |
| **Database**   | MongoDB Atlas, Mongoose ODM                                                 |
| **Scraping**   | Puppeteer / Cheerio (for data collection)                                   |
| **AI**         | OpenAI API / Custom LLM integration                                         |
| **Tools**      | Git, npm, dotenv, Nodemon                                                   |

---

## 📁 Project Structure

```text
UniEvent/
├── backend/                # Node.js + Express API
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth, error handling
│   └── server.js           # Entry point
│
├── frontend/               # Next.js application
│   ├── components/         # Reusable UI components
│   ├── pages/              # App routes
│   ├── styles/             # TailwindCSS config
│   └── utils/              # API calls, helpers
│
├── scraper/                # Web scraping tool
│   ├── scrapers/           # Site-specific scrapers
│   ├── utils/              # Helpers
│   └── index.js            # Main scraper runner
│
├── ai-assistant/           # Standalone AI tool
│   ├── client/             # Frontend interface
│   ├── server/             # API connector
│   └── config/             # AI model settings
│
└── README.md
```

---

## 🚀 Installation Guide

### Prerequisites
- Node.js (v18 or later)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/UniEvent.git
cd UniEvent
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env   # Add your MongoDB URI and PORT
npm run dev            # Starts server on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
cp .env.local.example .env.local   # Add NEXT_PUBLIC_API_URL
npm run dev                         # Starts Next.js on http://localhost:3000
```

### 4. Web Scraper Tool (Optional)
```bash
cd ../scraper
npm install
npm start              # Runs scrapers and posts data to the API
```

### 5. AI Assistant Tool (Optional)
```bash
cd ../ai-assistant
npm install
npm run dev            # Launches the AI tool on http://localhost:3001
```

---

## 🖥️ Running the Project

Once all services are running:

- **Main Website**: [http://localhost:3000](http://localhost:3080)
- **Backend API**: [http://localhost:5000/api/events](http://localhost:8000/api/events)
- **AI Assistant**: [http://localhost:3001](http://localhost:3001)

You can test the API using tools like Postman or cURL:
```bash
curl http://localhost:5000/api/events
```

---

## 🤖 AI Assistant Tool

The **AI Assistant Tool** is a standalone service that enhances the user experience by answering natural language queries about events. It uses the UniEvent REST API to fetch event data and an LLM (Large Language Model) to interpret questions and format responses.

**Example Queries:**
- *"Show me workshops in the CS department"*
- *"What events are happening tomorrow?"*
- *"Are there any hackathons next month?"*

The assistant connects to the backend via API, retrieves structured data, and uses prompt engineering to provide human-like answers. It is designed to be easily replaceable or upgradable with different AI providers.

---

## 🚧 Future Improvements

- [ ] **User Authentication** – Allow users to save events and set reminders.
- [ ] **Admin Dashboard** – Manage scrapers, monitor data quality, and review flagged events.
- [ ] **Event Recommendations** – Personalized event suggestions based on user interests.
- [ ] **Mobile App** – React Native version for iOS and Android.
- [ ] **Advanced AI** – Enable multi-turn conversations and context retention in the assistant.
- [ ] **Scalable Scraping** – Use queue systems (BullMQ) for large-scale scraping jobs.

---

## 👨‍💻 Author

**Your Name**  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/AayushMishragit)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)]([https://linkedin.com/in/](https://www.linkedin.com/in/aayush-mishra-b481b6290/))
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://yourportfolio.com)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

⭐️ If you found this project helpful, please consider giving it a star on GitHub!
```

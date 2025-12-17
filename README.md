# 🔧 Equipment Tracker

A full-stack web application for managing equipment inventory with CRUD operations.

## 📋 Features

- ✅ View all equipment in a table format
- ✅ Add new equipment with validation
- ✅ Edit existing equipment
- ✅ Delete equipment with confirmation
- ✅ Status badges with color coding
- ✅ Responsive design for mobile devices
- ✅ Clean, modern UI with animations

## 🛠️ Tech Stack

**Frontend:**
- React.js
- CSS3 (Flexbox, Grid, Animations)
- Fetch API for HTTP requests

**Backend:**
- Node.js
- Express.js
- JSON file storage

## 📁 Project Structure
```
equipment-tracker/
├── backend/
│   ├── routes/
│   │   └── equipment.js       # API routes
│   ├── data/
│   │   └── equipment.json     # Database
│   ├── server.js              # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EquipmentTable.js
│   │   │   └── EquipmentForm.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository**
```bash
   git clone <your-repo-url>
   cd equipment-tracker
```

2. **Install Backend Dependencies**
```bash
   cd backend
   npm install
```

3. **Install Frontend Dependencies**
```bash
   cd ../frontend
   npm install
```

### Running the Application

1. **Start the Backend Server** (Terminal 1)
```bash
   cd backend
   npm run dev
```
   Backend will run on `http://localhost:5000`

2. **Start the Frontend** (Terminal 2)
```bash
   cd frontend
   npm start
```
   Frontend will open at `http://localhost:3000`

3. **Open your browser** and go to `http://localhost:3000`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/equipment` | Get all equipment |
| POST | `/api/equipment` | Add new equipment |
| PUT | `/api/equipment/:id` | Update equipment |
| DELETE | `/api/equipment/:id` | Delete equipment |

## 📝 Equipment Data Model
```javascript
{
  "id": 1,
  "name": "Industrial Mixer A1",
  "type": "Machine | Vessel | Tank | Mixer",
  "status": "Active | Inactive | Under Maintenance",
  "lastCleanedDate": "2024-12-17"
}
```

## ✨ Features Breakdown

### Form Validation
- Name field is required
- Last Cleaned Date is required
- Real-time error messages
- Form clears errors on input

### Status Color Coding
- 🟢 **Active** - Green badge
- 🔴 **Inactive** - Red badge
- 🟡 **Under Maintenance** - Yellow badge

### User Experience
- Confirmation dialog before deletion
- Success alerts after operations
- Modal overlay for forms
- Smooth animations and transitions
- Hover effects on buttons and table rows

## 🧪 Testing

Manually tested all CRUD operations:
- ✅ Create new equipment
- ✅ Read/View equipment list
- ✅ Update existing equipment
- ✅ Delete equipment
- ✅ Form validation
- ✅ Error handling

## 🎯 Assumptions Made

1. **Simple Authentication**: No login/authentication required for this demo
2. **JSON Storage**: Used JSON file instead of a full database for simplicity and quick setup
3. **Single User**: Designed for single-user access (no concurrent editing conflicts)
4. **ID Generation**: Using `Date.now()` for unique IDs (sufficient for demo purposes)

## 🚧 Future Improvements (Given More Time)

- [ ] Add search/filter functionality
- [ ] Add sorting by columns
- [ ] Implement pagination for large datasets
- [ ] Add user authentication (login/signup)
- [ ] Connect to a real database (PostgreSQL/MongoDB)
- [ ] Add unit and integration tests
- [ ] Deploy to cloud platform (Heroku/Vercel)
- [ ] Add equipment history/audit log
- [ ] Export data to CSV/Excel
- [ ] Add bulk operations (delete multiple items)
- [ ] Implement real-time updates with WebSockets
- [ ] Add dark mode toggle

## 📸 Screenshots

(Add screenshots here after taking them)

## 👨‍💻 Development Time

- Total time spent: ~3-4 hours
- Planning & Setup: 30 mins
- Backend Development: 1 hour
- Frontend Development: 1.5 hours
- Styling & Testing: 1 hour

## 📧 Contact

If you have any questions about this project, feel free to reach out!

---

**Built with ❤️ for the internship assignment**
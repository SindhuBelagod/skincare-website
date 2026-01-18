const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

/* =======================
   ORDER API
======================= */
app.post("/order", (req, res) => {
  res.json({ message: "Order placed successfully!" });
});

/* =======================
   FEEDBACK API
======================= */
app.post("/feedback", (req, res) => {
  const { name, email, feedback, time } = req.body;

  const feedbackEntry = `
Name: ${name}
Email: ${email}
Feedback: ${feedback}
Time: ${time}
----------------------------
`;

  fs.appendFile("feedback.txt", feedbackEntry, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error saving feedback" });
    } else {
      res.json({ message: "Thank you for your feedback 💖" });
    }
  });
});

/* =======================
   SERVER START
======================= */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





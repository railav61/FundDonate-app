const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./Models/user");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json());
const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 3000,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas", err));

app.post("/api/create-checkout-session", async (req, res) => {
  const { details } = req.body;
  const amountInPaise = Math.floor(parseFloat(details.amount) * 100);

  // Ensure the amount is at least 50 cents (₹50.00 in INR)
  const minimumAmountInPaise = 5000; // 50 * 100 = 5000 paise

  if (amountInPaise < minimumAmountInPaise) {
    return res.status(400).json({
      error: "The amount must be at least ₹50.00.",
    });
  }
  const userPayments = [
    {
      price_data: {
        currency: "inr",
        product_data: { name: details.customerName },
        unit_amount: amountInPaise,
      },
      quantity: 1,
    },
  ];
  const session = await stripe.checkout.sessions.create({
    // payment_method_options:{"amazon_pay"},
    payment_method_types: ["card"],
    line_items: userPayments,
    mode: "payment",
    success_url: "http://localhost:5173/Success",
    cancel_url: "http://localhost:5173/Cancle",
  });

  res.json({ id: session.id });
});

app.post("/api/form", async (req, res) => {
  const { fullName, email, mobileNumber, address } = req.body;
  const findmail = await User.findOne({ email: email });
  if (findmail) {
    res.status(201).json({ message: "Email Already existed" });
  } else {
    await User.create({ fullName, email, mobileNumber, address });
    res.status(200).json({ message: "Form data received successfully!" });
  }
});

app.listen(PORT, () => {
  console.log("server started");
});

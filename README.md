# 🩸 BloodFind - A React + Firebase Blood Donation Web App

🔗 **Live Website:** [blood-finder-website.vercel.app](https://blood-finder-website.vercel.app/)

---

## 📌 Project Overview

**BloodFind** is a modern web application built with **React (Vite)**, **Firebase (Auth + Firestore)**, and **Node.js**, designed to:

- 🧑‍🤝‍🧑 Register users as voluntary blood donors  
- 🔍 Search for blood donors based on **blood group**, **state**, and **district**  
- 🧾 Display a list of available donors in real time

---

## 🚀 Features

- 🔐 **Firebase Authentication** (Login / Signup)
- 📝 **Donor Registration** with validation (age, contact, and location)
- 🔍 **Search Donors** using real-time Firestore queries
- 📄 **Donor List Display** with Name, Age, Blood Group, Contact, District
- 📊 **Live Donor Count** (fetched from Firestore)
- 📱 **Responsive UI** with a hamburger menu on smaller screens

---

## 🔧 Tech Stack

| Frontend           | Database  | Auth      |
|--------------------|-----------|-----------|
| React (Vite)       | Firestore | Firebase  |


---

## 🏗️ Project Structure

```
📦 bloodfind
├── components/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Registration.jsx
│   ├── BloodFind.jsx
│   ├── BloodDonors.jsx
│   ├── Homepage.jsx
│   ├── Navbar.jsx
├── styles/
│   └── *.css
├── Firebase.js
├── auth.js
├── users.js
├── searchBlood.js
├── App.jsx
├── main.jsx
├── DonorContext.js
├── UserContext.js
```


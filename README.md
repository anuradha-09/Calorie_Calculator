# 🍎 Calorie Calculator

The **Calorie Calculator** is a simple web application that helps users estimate their daily calorie requirements based on age, gender, weight, height, and activity level.
The project demonstrates fundamental concepts of full-stack development, including user input handling, calculations, and clean UI design.

This application was developed as part of an academic project and showcases both frontend design and backend logic in a clean, modular structure.

---

## ⭐ Features

* ✅ Calculate Total Daily Energy Expenditure (TDEE)
* ✅ Supports male and female calorie formulas
* ✅ Accepts user inputs: age, gender, weight, height, activity level
* ✅ Displays calories required to maintain weight
* ✅ Clean and responsive UI
* ✅ Simple backend logic for performing calculations
* ✅ Works completely offline

---

## 🧠 Project Overview

The calculator uses the **Mifflin-St Jeor equation**, one of the most accurate methods for estimating basal metabolic rate (BMR).

### **Formula (Male):**

```
BMR = 10 * weight + 6.25 * height - 5 * age + 5
```

### **Formula (Female):**

```
BMR = 10 * weight + 6.25 * height - 5 * age - 161
```

### **TDEE Calculation:**

```
TDEE = BMR * Activity Factor
```

---

## 🛠️ Tech Stack

### **Frontend**

* HTML5
* CSS3
* JavaScript
* Simple responsive layout

### **Backend (optional – if you used Python)**

* Python
* Flask (or simple script execution)
* BMR & TDEE calculation logic

> If you built the project with only JavaScript, then the backend is not required — calculations happen on the client side.

---

## 🔍 How It Works

1. User enters:

   * Age
   * Gender
   * Height
   * Weight
   * Activity level

2. The application:

   * Computes BMR
   * Multiplies by activity factor
   * Displays results

3. User receives:

   * Calories to maintain weight
   * (Optional) Calories for weight loss/gain

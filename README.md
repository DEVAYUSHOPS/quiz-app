# 🎯 Interactive Quiz Platform

An interactive quiz platform built with **Next.js, Tailwind CSS, and TypeScript**.  
Users can attempt quizzes, receive **instant feedback**, and track their history.  

🚀 **Live Demo**: [Deployed App Link Here]  

---

## 📌 **Features**
- ✅ **Multiple-choice & integer-based quizzes**
- ✅ **Timer (30 seconds per question)**
- ✅ **Instant feedback on answers**
- ✅ **Scoreboard & attempt history**
- ✅ **Offline storage using IndexedDB**
- ✅ **Responsive UI with Tailwind CSS**
- ✅ **Deployed on Vercel/Netlify**

---

## 🛠️ **Setup & Installation**
Follow these steps to run the project locally.

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/interactive-quiz-platform.git
cd interactive-quiz-platform
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```
Now, open **`http://localhost:3000`** in your browser.

---

## 🏗️ **Project Structure**
```
📂 interactive-quiz-platform
│── 📂 app
│   │── 📂 api/quiz/route.ts    # Quiz API with questions
│   │── 📂 quiz/[quizId]/page.tsx # Quiz page with timer & answers
│   │── 📂 results/page.tsx      # Scoreboard page
│   │── 📂 dashboard/page.tsx    # History of quiz attempts
│── 📂 components                # Reusable UI components
│── 📂 lib/indexedDB.ts          # IndexedDB logic for storing quiz history
│── 📂 styles                    # Tailwind CSS styles
│── 📜 README.md                 # Project documentation
│── 📜 package.json              # Dependencies
│── 📜 next.config.js            # Next.js configuration
```

---

## 🎯 **How to Use**
1. Start a quiz from the **home page**.
2. Answer multiple-choice or integer-based questions.
3. View **instant feedback** after selecting an option.
4. **Check quiz history** in the **dashboard**.
5. Track **total scores** and **past attempts**.

---

## 🚀 **Deployment**
The app is deployed on **Vercel/Netlify**.  

🔗 **Live URL**: [Insert Deployment Link Here]  

---

## 📝 **License**
This project is open-source and available under the **MIT License**.

---

💡 **Built by [Your Name]** | 🌟 **Contributions Welcome!**


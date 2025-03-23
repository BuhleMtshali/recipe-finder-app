# 🍽️ Recipe Finder

A simple React app that allows users to search for meal recipes using TheMealDB API. The app fetches random recipes on load and enables users to search for specific meals.

---

## 📌 Features
- Fetches **random meal recipes** when the page loads.
- Allows users to **search for meals** by name.
- Displays recipes in **interactive recipe cards**.
- Uses **React Hooks (`useState`, `useEffect`)** for state management.
- Styled with **CSS** for a clean and responsive layout.

---

## 🚀 Tech Stack
- **React** (Functional Components, Hooks)
- **CSS** (For styling)
- **TheMealDB API** (Fetching meal data)

---

## 📂 Project Structure
```
📦 Recipe Finder
├── 📁 src
│   ├── 📁 components
│   │   ├── Header.js
│   │   ├── RecipeCard.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── package.json
├── README.md
```

---

## 🔧 Setup & Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/BuhleMtshali/recipe-finder.git
   ```
2. **Navigate into the project folder**
   ```bash
   cd recipe-finder
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Run the app**
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔍 How It Works
### Fetching Random Recipes
- When the page loads, `useEffect` calls `searchRecipes()` to fetch random meals from TheMealDB API.

### Searching for Recipes
1. Users type in a meal name in the search box.
2. Clicking the **search button** triggers `searchItems(searchMeal)`, fetching meals that match the query.
3. The results update in real-time, displaying the searched meals.

---

## 🤝 Contributing
Feel free to fork the project and submit pull requests!

---

## 🛠️ Future Improvements
- Improve UI/UX with better animations.
- Add filtering by cuisine or meal type.
- Implement a favorites feature.

---

## 📜 License
This project is open-source and available under the MIT License.

---


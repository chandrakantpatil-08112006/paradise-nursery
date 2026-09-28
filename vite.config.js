import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 1. Type your GitHub repository name here (exactly as it appears on GitHub).
//    Example: if your repo URL is github.com/john/paradise-nursery
//    then write:  const repositoryName = "paradise-nursery";
const repositoryName = "paradise-nursery";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // 2. While developing (npm run dev) the base is "/".
  //    When building for GitHub Pages (npm run build) the base is "/YOUR-REPOSITORY-NAME/".
  base: command === "build" ? `/${repositoryName}/` : "/",
}));

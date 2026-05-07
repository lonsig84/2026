import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [react()],
  base: '/cool-jobs-game/', // 注意：这里的名字必须和你在 GitHub 上创建的仓库名完全一致！
})
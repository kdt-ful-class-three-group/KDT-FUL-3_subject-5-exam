/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  safelist: [
    "text-[#ffffff]",
    "w-full",
    "cursor-pointer",
    "h-full",
    "object-fit",
    "font-[14px]",
    "p-[20px]"
    // 다른 동적 클래스들
  ],
  plugins: [],
};

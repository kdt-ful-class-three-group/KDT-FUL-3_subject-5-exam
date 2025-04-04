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
    "text-[14px]",
    "p-[15%]",
    "bg-[#004F9D40]",
    "bg-[#FF000040]",
    "bg-[#B22222]",
    // 다른 동적 클래스들
  ],
  plugins: [],
};

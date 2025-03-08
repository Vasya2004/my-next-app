import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  js.configs.recommended,
  next.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "no-unused-vars": "warn", // Предупреждение об неиспользуемых переменных
      "no-console": "warn", // Запрещаем console.log (предупреждение)
      "react/jsx-uses-react": "off", // Не нужен в Next.js 13+
      "react/react-in-jsx-scope": "off", // Next.js импортирует React автоматически
      "react-hooks/rules-of-hooks": "error", // Проверка правил хуков
      "react-hooks/exhaustive-deps": "warn", // Проверка зависимостей useEffect
    },
  },
];

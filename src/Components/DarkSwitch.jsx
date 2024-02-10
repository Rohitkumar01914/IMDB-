'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleSystemTheme = () => {
    if (systemTheme) {
      setTheme('system');
    }
  };

  const currentTheme = mounted ? (theme === 'system' ? 'light' : theme) : 'light';

  return (
    <div className="pt-1">
      <button  className="outline-none" onClick={toggleTheme}>
        {currentTheme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <button className="outline-none" onClick={handleSystemTheme}></button>
    </div>
  );
}

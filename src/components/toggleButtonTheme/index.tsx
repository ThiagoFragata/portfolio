import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export function ToggleButtonTheme() {
  const { setTheme, theme } = useTheme()
  const [modeTheme, setModeTheme] = useState('dark')

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      setModeTheme('light');
    } else {
      setTheme('dark');
      setModeTheme('dark');
    }
  };

  return (
    <button onClick={handleToggleTheme}>
      {modeTheme === 'dark' ? <Moon /> : <Sun />}
    </button>
  )
}
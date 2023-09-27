import React, { useEffect, useState } from "react";
import { useCounter } from "../context/CounterContext";

function SettingsInfoUpdater() {
  const { updateSettings, settings } = useCounter();
  const [theme, setTheme] = useState("");
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    // Apply theme and font size to the document when settings change
    document.documentElement.style.setProperty("--theme-color", settings.theme);
    document.documentElement.style.setProperty(
      "--font-size",
      `${settings.fontSize}px`
    );
  }, [settings]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(theme, Number(fontSize));
    setTheme("");
    setFontSize("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Theme"
        value={theme}
        onChange={handleThemeChange}
      />
      <input
        type="number"
        placeholder="fontSize"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <button type="submit" id="settingsButton">
        Update
      </button>
    </form>
  );
}

export default SettingsInfoUpdater;

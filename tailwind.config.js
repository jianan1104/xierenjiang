

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
    theme: {
      extend: {},
    },
    darkMode: ["class", '[data-theme="dark"]'],
    plugins: [],
    corePlugins: {
        preflight: false,
      },
      blocklist: ["container"],
  };
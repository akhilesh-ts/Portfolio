const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rounded-line': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 388 155'%3E%3Cpath d='M 400.825 526.501 C 359.981 521.61 275.061 502.161 262.145 463.503 C 249.228 424.845 64.622 467.64 -26.068 493.869 L -1.845 151.05 C 71.348 136.783 216.884 99.23 213.496 63.159 C 209.26 18.069 245.759 11.716 307.691 18.653 C 369.624 25.591 361.774 9.523 393.416 2.626' fill='transparent' stroke-width='5' stroke='rgba(202,89,46,0.4)' stroke-miterlimit='10' stroke-dasharray='' /%3E%3C/svg%3E")`,
        'line-path': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 422 284'%3E%3Cpath d='M 33.026 0.557 L 4.893 135.318 L 98.467 61.255 L 128.435 164.831 L 227.513 61.255 L 250.754 164.831 L 310.078 107.475 L 328.426 247.247 L 426.893 107.475 L 433.62 254.486 L 472.762 292.353' fill='transparent' stroke-width='5' stroke='rgba(108,227,182,0.5)' stroke-miterlimit='10' stroke-dasharray='' /%3E%3C/svg%3E")`
      },
      colors:{
        'dark-bg':'#151312',
        'box-color-orange':'#f46c38',
        'box-xolor-green':'#c5ff40',
        'secondary-color':'#353334',
        'des-text-color':'#928989',
        'navbg':'#1c1a19'
      }
    },
    
  },
  plugins: [
    flowbite.plugin(),
  ],
}
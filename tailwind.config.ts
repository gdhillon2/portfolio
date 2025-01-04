import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-20%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(20%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-up': {
					'0%': {
						transform: 'translateY(20%)',
						opacity: '0'
					},
					'100%': {
						translate: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-down': {
					'0%': {
						transform: 'translateY(-20%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'slide-in-left': 'slide-in-left 0.4s ease-in-out forwards',
				'slide-in-right': 'slide-in-right 0.4s ease-in-out forwards',
				'slide-in-up': 'slide-in-up 0.4s ease-in-out forwards',
				'slide-in-down': 'slide-in-down 0.4s ease-in-out forwards',
				'slide-in-up-quick': 'slide-in-up 0.2s ease-in-out forwards',
				'slide-in-down-quick': 'slide-in-down 0.2s ease-in-out forwards',
				'slide-in-left-quick': 'slide-in-left 0.2s ease-in-out forwards',
				'slide-in-right-quick': 'slide-in-right 0.2s ease-in-out forwards',
				'slide-in-left-quick-delay-200': 'slide-in-left 0.2s ease-in-out 0.2s forwards',
				'slide-in-right-quick-delay-200': 'slide-in-right 0.2s ease-in-out 0.2s forwards',
				'slide-in-up-quick-delay-200': 'slide-in-up 0.2s ease-in-out 0.2s forwards',
				'slide-in-down-quick-delay-200': 'slide-in-down 0.2s ease-in-out 0.2s forwards',
				'slide-in-left-delay-200': 'slide-in-left 0.4s ease-in-out 0.2s forwards',
				'slide-in-right-delay-200': 'slide-in-right 0.4s ease-in-out 0.2s forwards',
				'slide-in-up-delay-200': 'slide-in-up 0.4s ease-in-out 0.2s forwards',
				'slide-in-down-delay-200': 'slide-in-down 0.4s ease-in-out 0.2s forwards',
				'slide-in-up-delay-400': 'slide-in-up 0.4s ease-in-out 0.4s forwards',
				'slide-in-down-delay-400': 'slide-in-down 0.4s ease-in-out 0.4s forwards',
				'slide-in-left-delay-400': 'slide-in-left 0.4s ease-in-out 0.4s forwards',
				'slide-in-right-delay-400': 'slide-in-right 0.4s ease-in-out 0.4s forwards',
				'slide-in-left-quick-delay-400': 'slide-in-left 0.2s ease-in-out 0.4s forwards',
				'slide-in-right-quick-delay-400': 'slide-in-right 0.2s ease-in-out 0.4s forwards',
				'slide-in-up-quick-delay-400': 'slide-in-up 0.2s ease-in-out 0.4s forwards',
				'slide-in-down-quick-delay-400': 'slide-in-down 0.2s ease-in-out 0.4s forwards',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;

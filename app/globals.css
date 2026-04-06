@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --amber-glow: #D97706;
  --amber-bright: #F59E0B;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0F0F0F;
  color: #F5F0E8;
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #0F0F0F;
}
::-webkit-scrollbar-thumb {
  background: #D97706;
  border-radius: 2px;
}

/* Bokeh glow orbs */
.bokeh-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

/* Grain overlay */
.grain::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 100;
  opacity: 0.35;
}

/* Amber text gradient */
.text-amber-gradient {
  background: linear-gradient(135deg, #D97706, #F59E0B, #FCD34D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Card hover lift */
.card-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(217, 119, 6, 0.15);
}

/* Stagger fade-up animations */
.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }
.animate-delay-400 { animation-delay: 400ms; }
.animate-delay-500 { animation-delay: 500ms; }
.animate-delay-600 { animation-delay: 600ms; }

/* Initially hidden for animation */
.fade-in-up {
  opacity: 0;
  animation: fadeUp 0.7s ease-out forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50%       { opacity: 0.55; transform: scale(1.08); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-14px); }
}

/* Divider line amber */
.divider-amber {
  height: 1px;
  background: linear-gradient(to right, transparent, #D97706, transparent);
  opacity: 0.4;
}

/* Button glow on hover */
.btn-primary {
  position: relative;
  overflow: hidden;
}
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(245,158,11,0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.btn-primary:hover::after {
  opacity: 1;
}

/* Step connector line */
.step-line::after {
  content: '';
  position: absolute;
  top: 20px;
  left: calc(50% + 20px);
  width: calc(100% - 40px);
  height: 1px;
  background: linear-gradient(to right, #D97706, transparent);
}

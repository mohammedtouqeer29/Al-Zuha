Al-Zuha Tours & Travels — Website scaffold

What I added
- `index.html` — One-page responsive site with hero, certifications, packages, contact and WhatsApp link.
- `styles.css` — Styles for layout and responsiveness.
- `script.js` — Minimal interactivity: mobile menu, smooth scroll, year update.

Next steps (required from you)
1. Add a high-quality Makkah video at `assets/makkah.mp4` or replace the `<video>` with a hero image. A 1080p mp4 works best.
2. Replace `YOUR_PHONE_NUMBER` in `index.html` with your WhatsApp phone number in international format without the plus sign (for example: `966512345678`).
   - WhatsApp link format used: `https://wa.me/YOUR_PHONE_NUMBER?text=hi` (message prefilled as `hi`).
3. Replace certification placeholder images with real scanned copies or logos in `assets/` and update the image markup if desired.
4. Optionally customize package details and pricing in `index.html`.

Local preview
- Open `index.html` in your browser. For best experience, serve with a simple static server (optional):

  - PowerShell (if you have Python installed):

```powershell
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Contact me if you want:
- A gallery lightbox for certifications.
- A booking/contact form that posts to email or stores leads.
- Integration with payment or booking engine.

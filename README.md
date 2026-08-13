# Pooja C — Portfolio

A premium, modern personal portfolio built with React + Vite. Lavender/pink
gradient aesthetic inspired by the provided Dribbble reference; all personal
content sourced from the uploaded resume.

## 1. Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── README.txt          ← put your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── sections/
│   │       ├── Hero.jsx / .css
│   │       ├── About.jsx / .css
│   │       ├── Skills.jsx / .css
│   │       ├── Projects.jsx / .css
│   │       ├── Experience.jsx / .css
│   │       ├── Education.jsx / .css
│   │       ├── Certifications.jsx / .css
│   │       ├── ResumeCTA.jsx / .css
│   │       └── Contact.jsx / .css
│   ├── data/
│   │   └── resumeData.js       ← single source of truth for all content
│   ├── hooks/
│   │   └── useReveal.js        ← scroll-reveal animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               ← design tokens, typography, animations
├── index.html
├── package.json
└── vite.config.js
```

## 2. Install & run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Build for production:

```bash
npm run build       # outputs to /dist
npm run preview      # preview the production build locally
```

## 3. Editing your information

Everything personal lives in **`src/data/resumeData.js`** — edit it once and
every section updates automatically. Two fields need a quick check on your
end since the source scan was partly illegible:

- `profile.phone` — placeholder digits, replace with your real number.
- `profile.linkedin` — best-effort transcription, verify the exact slug.

## 4. Adding your resume PDF

Drop your resume file into `public/resume/` and name it exactly:

```
Pooja_C_Resume.pdf
```

This matches `profile.resumeFile` in `resumeData.js`, so both "View Resume"
and "Download Resume" buttons will work immediately. (To use a different
name/path, just update `profile.resumeFile` instead.)

## 5. Replacing the GitHub / LinkedIn links

Also in `resumeData.js`:

```js
export const profile = {
  ...
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-slug",
  leetcode: "https://leetcode.com/your-username", // set this to show the
                                                    // "View Coding Profile"
                                                    // button in the Certifications
                                                    // section (currently null since
                                                    // no LeetCode link was on the resume)
};
```

## 6. Replacing/adding a profile image

The hero currently uses an original AI/code-themed visual (no photo), per
the design brief. If you'd like to add a real photo instead:

1. Drop your image into `src/assets/` (e.g. `profile.jpg`).
2. In `src/components/sections/Hero.jsx`, import it:
   ```js
   import profileImg from "../../assets/profile.jpg";
   ```
3. Replace the `.hero-orb-wrap` block with an `<img src={profileImg} ... />`
   styled to taste (a circular crop with the existing `.hero-orb` glow
   behind it works well).

## 7. Deploying

### Vercel
```bash
npm install -g vercel
vercel
```
Or connect the GitHub repo at vercel.com → "New Project" → framework preset
auto-detects Vite. Build command: `npm run build`, output dir: `dist`.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --build
```
Or drag-and-drop the `dist/` folder at app.netlify.com/drop after running
`npm run build`. For git-based deploys: build command `npm run build`,
publish directory `dist`.

## 8. Notes

- Only the two projects, two internships, and skills actually listed on
  the source resume are included — nothing was invented.
- No LeetCode/competitive-programming link was present on the resume, so
  that section shows a neutral note instead of a fabricated link.

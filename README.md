# Dhia Mosbah Portfolio

A dependency-free, responsive portfolio built with HTML, CSS and JavaScript. English is the default language; the navigation switcher translates the full page into French. It is designed for deployment at `https://dhia17d.github.io/myportfilio/` using GitHub Pages.

## Project structure

```text
myportfilio/
├── .github/
│   └── workflows/
│       └── pages.yml
├── index.html
├── script.js
├── styles.css
└── README.md
```

The profile image is loaded from Dhia's public GitHub avatar. The CV button is intentionally disabled until a PDF is supplied; no placeholder or fabricated CV is linked.

## Local preview

No package installation or build step is required. Open `index.html` directly in a browser, or use VS Code's Live Server extension if you prefer a local HTTP server.

## Add the CV when available

Place the PDF at `assets/dhia-mosbah-cv.pdf`, then change the disabled CV button in `index.html` to an anchor with `href="assets/dhia-mosbah-cv.pdf"` and the `download` attribute. Keep the PDF path relative so it works on the GitHub Pages project site.

## Publish to GitHub Pages

1. The public repository `Dhia17D/myportfilio` already exists on GitHub and is currently empty.
2. From this project folder, initialize Git, connect the existing repository, and push the source:

	```powershell
	git init -b main
	git add .
	git commit -m "Add bilingual portfolio"
	git remote add origin https://github.com/Dhia17D/myportfilio.git
	git push -u origin main
	```

3. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. The included workflow deploys the root of `main`. Check **Actions** for the first deployment to finish.
5. In **Settings → Pages**, confirm the published address is `https://dhia17d.github.io/myportfilio/`.

The account-level URL `https://dhia17d.github.io/` is reserved for a repository named `Dhia17D.github.io`. This project is in `myportfilio`, so its expected project URL includes `/myportfilio/`.

## Notes

- Project descriptions were checked against the public repository READMEs and source files; CyberGuardian is presented as an academic project without a repository link.
- The site uses no backend, database, paid API, runtime dependency or compile step. Google Fonts are an optional external font request; local sans-serif and monospace fallbacks are defined.
- For project-link targets, standard security-related browser attributes (`noopener noreferrer`) are used.
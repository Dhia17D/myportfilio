# Dhia Mosbah Portfolio

A dependency-free, responsive portfolio built with HTML, CSS and JavaScript. English is the default language; the navigation switcher translates the full page into French. It is designed for deployment at `https://dhia17d.github.io/myportfilio/` using GitHub Pages.

## Project structure

```text
myportfilio/
├── .github/
│   └── workflows/
│       └── pages.yml
├── assets/
│   ├── Dhia-Mosbah-CV-EN.pdf
│   └── Dhia-Mosbah-CV-FR.pdf
├── index.html
├── script.js
├── styles.css
└── README.md
```

The hero uses a CSS-built technical identity graphic. The English and French CV PDFs are bundled in `assets/` and linked as direct downloads.

## Local preview

No package installation or build step is required. Open `index.html` directly in a browser, or use VS Code's Live Server extension if you prefer a local HTTP server.

## Publish to GitHub Pages

1. The public repository is `Dhia17D/myportfilio`; this local project is connected to its `main` branch.
2. To publish future changes from this project folder:

	```powershell
	git add .
git commit -m "Describe your change"
git push
	```

3. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. The included workflow deploys the root of `main`. Check **Actions** for the first deployment to finish.
5. In **Settings → Pages**, confirm the published address is `https://dhia17d.github.io/myportfilio/`.

The account-level URL `https://dhia17d.github.io/` is reserved for a repository named `Dhia17D.github.io`. This project is in `myportfilio`, so its expected project URL includes `/myportfilio/`.

## Notes

- Project descriptions were checked against the public repository READMEs and source files; CyberGuardian is presented as an academic project without a repository link.
- The site uses no backend, database, paid API, runtime dependency or compile step. Google Fonts are an optional external font request; local sans-serif and monospace fallbacks are defined.
- For project-link targets, standard security-related browser attributes (`noopener noreferrer`) are used.
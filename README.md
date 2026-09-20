# HITEC Daily Risk Dashboard

This folder is the GitHub repository root. Upload all its contents, including `.github` and `.nojekyll`.

Enable **Settings → Pages → Source: GitHub Actions**. Use the `main` branch. The initial dashboard intentionally has no reports.

The companion n8n workflow updates `data/reports.json` using a repository-scoped GitHub credential. No token belongs in this repository. All current data and the browser view retain only today and the previous six Bangkok calendar dates. Historical Git commits are not erased.

The scheduled retention Action runs at approximately 00:15 Bangkok time and publishes the updated site. GitHub schedules may be delayed. The browser also filters expired report dates.

For local viewing, serve this folder through a local web server, for example `python -m http.server 8080`, then open `http://localhost:8080`. Opening `index.html` directly as `file://` will not reliably load its JSON data.

Reports contain AI-generated preliminary assessments. Review whether this information may be published publicly before enabling your deployment. A private repository alone does not guarantee a private Pages site.

Full setup instructions accompany the delivery in `README_TH.md`, outside this publishable folder.

# Task 9: GitHub Pages Deployment

Status: Pending
Created: 2026-06-23
Completed: —

## Goal
Add a GitHub Actions workflow that automatically deploys the site to GitHub Pages on every push to `main`.

## Acceptance criteria
- should deploy successfully when code is pushed to the main branch
- should serve the live site at https://harshvardhan7395.github.io/<repo-name>/

## Notes
- Workflow file: `.github/workflows/deploy.yml`
- Uses the official `actions/deploy-pages` + `actions/upload-pages-artifact` actions
- Source: root of the repo (no build step needed — it's plain HTML/CSS/JS)
- The repo will need GitHub Pages enabled in Settings → Pages → Source: GitHub Actions
- Sample workflow structure:
  ```yaml
  on:
    push:
      branches: [main]
  jobs:
    deploy:
      permissions:
        pages: write
        id-token: write
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/upload-pages-artifact@v3
          with:
            path: '.'
        - uses: actions/deploy-pages@v4
          id: deployment
  ```
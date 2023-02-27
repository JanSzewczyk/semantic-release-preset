/** @type {import('semantic-release').Options} */
module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogTitle: `<!-- markdownlint-disable --><!-- textlint-disable -->
# 📓 Changelog
All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.`
      }
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        message: "chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}",
        assets: ["CHANGELOG.md", "package.json"]
      }
    ],
    "@semantic-release/github"
  ]
};

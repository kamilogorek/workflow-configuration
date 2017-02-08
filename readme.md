# Workflow configuration

This repository is my attempt at configuring a modern web development environment. I'm trying to cut out using things like Foundation and Bootstrap in order to reduce the amount of bloat in my code.

I was keeping up with the rise of ECMAScript 6 on the web, but the amount of different requirements and libraries that then needed configuring baffled me. After finding [Dev.to](https://dev.to) _(it's so fast)_, I stumbled across an article titled [Setting up a Minimal, Yet Useful JavaScript Dev Environment](https://dev.to/corgibytes/setting-up-a-minimal-yet-useful-javascript-dev-environment). I followed the process in this article and I now have a Test Driven Development (TDD) environment configured on my MacBook.

I had heard of TDD before, but not in JavaScript. I'm going to use this repository as a chance to get familiar with a modern development workflow. It can also act as a sandbox where I can test new libraries which may make the workflow more efficient than it was before.

## What's installed
- Git _(umm)_
- Node.js (npm)
- Ava (testing)
- Standard (linting)
- Cokidar-cli (watching)
- Precommit-hook (auto-run npm scripts)

The above list of packages are not packages which I've seen in each of those _10 NPM packages you can't live without_ type posts. In fact, I had never heard of anything below _Node.js_ until I stumbled upon the article linked above. But, having the trendy packages up and running doesn't mean everything, as Kamil claims in the article, depending on on NPM's mood, you can have this configuration up and running in 5 minutes.

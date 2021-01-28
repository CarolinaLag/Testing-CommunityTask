# Testing CommunityTask
_An assignment using Cypress for a course in working methodology with the aim to test all functionalities of an application._

## Examples of tested functionalities
- Login
- Registration
- Posting
- Links
- End to end

## Intallation
To install, use the following command:

```
npm i
```

## How to run
1. Make sure to run `serve` from the Frontend folder.
2. Run `npm test` in a new terminal in the project root to launch Cypress.
3. Run the tests from the Cypress browser.

## Folder structure
```
Project root
├── cypress
│   └── fixtures
│   └── integration
│   └── plugins
│   └── support
├── Frontend
├── node_modules
│   └── modules
```
When creating new tests, make sure to put them in the integration folder.

## Variables
When using variables make sure to use camelCase. *E.g:*
```
let numberOfPosts = 0;
```
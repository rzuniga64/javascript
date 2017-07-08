Installation and Usage

1. View > Tool Windows > Terminal.
2. On the command line navigate to your project directory.
3. The recommended installation method is a local npm installer for your project:

$ npm install lite-server --save-dev
4. Add a "script" entry within your project's package.json file:

{
  "name": "weather",
  "version": "1.0.0",
  "description": "A Weather applicaton",
  "main": "app.js",
  "scripts": {
    "dev": "lite-server"
  },
  "devDependencies": {
    "lite-server": "^2.3.0"
  }
}

With the above script entry, you can then start lite-server via:
% npm run dev

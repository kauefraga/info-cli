<h1 align="center">Infy</h1>

<p align="center">
  <img
    alt="GitHub top language"
    src="https://img.shields.io/github/languages/top/kauefraga/info-cli.svg"
  />
  <img
    alt="Repository size"
    src="https://img.shields.io/github/repo-size/kauefraga/info-cli.svg"
  />
  <a href="https://github.com/kauefraga/info-cli/commits/main">
    <img
      alt="GitHub last commit"
      src="https://img.shields.io/github/last-commit/kauefraga/info-cli.svg"
    />
  </a>
  <img
    alt="GitHub LICENSE"
    src="https://img.shields.io/github/license/kauefraga/info-cli.svg"
  />
</p>

<h4 align="center">🌌 Show you some infos (time, weather...)</h4>

## 📖 Usage

```bash
# infy [options]

# options:
  -f --format   # set time output -- default h:m
  -l --location # set location to fetch of weatherapi -- required

# examples:
infy -l London
infy --format h:m:s --location London
```

## ⬇️ How to download

```bash
npm i -g infy
pnpm i -g infy
```

## 👷‍♂️ How to set development env

```bash
git clone https://github.com/kauefraga/info-cli.git infy
cd infy
npm install
npm run dev
```

Or downloading with yarn? `yarn && yarn dev`

## 💻 Technologies

- **[Weather API](https://www.weatherapi.com)**
- [Axios](https://www.npmjs.com/package/axios)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Figlet](https://www.npmjs.com/package/figlet)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Minimist](https://www.npmjs.com/package/minimist)
- [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
- [Typescript](https://www.typescriptlang.org)

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/info-cli/blob/{branch}/LICENSE) for more information.

---

<div align="center" display="flex">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>

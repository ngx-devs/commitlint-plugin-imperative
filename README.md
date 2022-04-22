# Commitlint Imperative Plugin

A Commitlint plugin to ensure that commits are made using imperative mood.

</div>

<p align="center">

  <a href="https://codecov.io/gh/ngx-devs/commitlint-plugin-imperative">
    <img src="https://codecov.io/gh/ngx-devs/commitlint-plugin-imperative/branch/main/graph/badge.svg?token=RS4ZQA057M"/>
  </a>

  <a href="https://github.com/ngx-devs/commitlint-plugin-imperative/actions?query=workflow%3A%22CI%22">
    <img alt="Build" src="https://github.com/ngx-devs/commitlint-plugin-imperative/workflows/CI/badge.svg">
  </a>

  <a href="https://www.npmjs.com/package/@ngx-devs/commitlint-plugin-imperative">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@ngx-devs/commitlint-plugin-imperative">
  </a>

  <a href="https://packagephobia.com/result?p=@ngx-devs/commitlint-plugin-imperative">
    <img alt="Install Size" src="https://packagephobia.com/badge?p=@ngx-devs/commitlint-plugin-imperative&">
  </a>

  <img alt="Top Language" src="https://img.shields.io/github/languages/top/ngx-devs/commitlint-plugin-imperative?color=3498db">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ngx-devs/commitlint-plugin-imperative?color=3498db&label=latest commit">

   <a href="https://github.com/ngx-devs/commitlint-plugin-imperative/blob/main/LICENSE">
      <img alt="License" src="https://img.shields.io/packagist/l/doctrine/orm.svg">
  </a>

</p>

<p align="center"> 
 <a href="#information_source-about">About</a> •
 <a href="#arrow_forward-installation">Installation</a> •
 <a href="#hammer_and_wrench-technologies">Usage</a> •   
 <a href="#boy-author">Author</a> •
 <a href="#balance_scale-license">License</a>
</p>

## :information_source: About

<div align="center">

If you want to write a git commit message properly, you should use the imperative mood. This means you need to eliminate the temptation to use gerunds or past tense in your subject lines. Don't write a git commit subject line that talks about what you did, or what you are doing. Instead, describe what was done.

Use this plugin to enforce this rule.

---

</div>

## :arrow_forward: **Installation**

```bash
#install
npm install -D @ngx-devs/commitlint-plugin-imperative
```

---

## :robot: Usage

Set your commitlint config to:

```bash
{
    plugins: ["@ngx-devs/commitlint-plugin-imperative"],
    rules: {
        "imperative-rule/en": [2, "always", ]
    }
}
```

## Example

```bash
$ git commit -m "adding a project"
⧗   input: adding a project
✖   This commit is in the gerund. Please use the imperative form. [imperative-rule/en]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

```

## :boy: **Author**

<div align="center">

<a href="https://github.com/gleisonkz">
 <img src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4" width="100px;" alt="Profile Photo Gleison Almeida"/>
 <br/>
 <sub><b>Gleison de Almeida</b></sub>
</a>

Developed with ❤️ by Gleison Almeida <br/> 👋🏽 My Contacts:

[![Linkedin Badge](https://img.shields.io/badge/-Gleison-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gleison-ribeiro-a65257119) [![Github Badge](https://img.shields.io/badge/-Gleison-000?style=flat-square&logo=Github&logoColor=white)](https://github.com/gleisonkz) [![Outlook Badge](https://img.shields.io/badge/-Gleison-0078d4?style=flat-square&logo=microsoft-outlook&logoColor=white)](mailto:gleisonsubzerokz@gmail.com)

</div>

---

## :balance_scale: **License**

<div align="center">

Copyright © 2021 [Gleison Almeida](https://github.com/gleisonkz).<br />
This project is licensed by [MIT](./LICENSE).

</div>

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
 <a href="#robot-usage">Usage</a> •     
 <a href="#boy-author">Author</a> •
 <a href="#balance_scale-license">License</a>
</p>

## :information_source: About

<div align="center">

If you want to write a git commit message properly, you should use the _imperative mood_. This means you need to eliminate the temptation to use gerunds or past tense in your subject lines.

Use the _imperative mood_. It is easier to read and scan quickly:

We use _imperative mood_ because it's going to complete the sentence “**If applied, this commit will …**”
(e.g. “**If applied, this commit will** _add alert admin for new user registration_”).

Using _imperative mood_ and not past tense in commit messages has made a big thread of discussions between developers over the question _“Why should it be present tense?”_.

The reason behind using present tense is that the commit message is answering the question _“What will happen after the commit is applied?”_. If we think of a commit as an independent patch, it doesn’t matter if it applied in the past. What matters is that this patch is always supposed to make that particular change when it’s applied.

Even Git itself suggests and uses imperative mood in commit messages in [Documentation/SubmittingPatches](https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches?h=v2.36.1#n181)

For example, the default message created when using `git merge` reads:

```
Merge branch 'feature/login'
```

And when using `git revert`:

```
Revert "Add the thing with the stuff"
This reverts commit cc87791524aedd593cff5a74532befe7ab69ce9d.
```

Or when clicking the “Merge” button on a GitHub pull request:

```
Merge pull request #123 from someuser/somebranch
```

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

<details open>

  <summary>
    <code>
      imperative-rule/en
    </code>
  </summary>

<p style="margin-top:10px" >Set your commitlint config to:</p>

```bash
{
    plugins: ["@ngx-devs/commitlint-plugin-imperative"],
    rules: {
        "imperative-rule/en": [2, "always", ]
    }
}
```

</details>

<details open>

  <summary>
    <code>
      imperative-rule/pt-br
    </code>
  </summary>

<p style="margin-top:10px" >Set your commitlint config to:</p>

```bash
{
    plugins: ["@ngx-devs/commitlint-plugin-imperative"],
    rules: {
        "imperative-rule/pt-br": [2, "always", ]
    }
}
```

</details>

### :writing_hand: Examples

<details open>

  <summary>
    <code>
      imperative-rule/en
    </code>
  </summary>

<p style="margin-top:10px">

```bash
$ git commit -m "adding a project"

⧗   input: adding a project
✖   This commit is in gerund. Please use the imperative form. [imperative-rule/en]

✖   found 1 problems, 0 warnings
```

</p>

<p style="margin-top:10px">

```bash
$ git commit -m "added new project"

⧗   input: added new project
✖   This commit is in past tense. Please use the imperative form. [imperative-rule/en]

✖   found 1 problems, 0 warnings
```

</p>

</details>

<details open>

  <summary>
    <code>
      imperative-rule/pt-br
    </code>
  </summary>

<p style="margin-top:10px">

```bash
$ git commit -m "adicionando autenticação"

⧗   input: adicionando autenticação
✖   This commit is in gerund. Please use the imperative form. [imperative-rule/pt-br]

✖   found 1 problems, 0 warnings
```

</p>

<p style="margin-top:10px">

```bash
$ git commit -m "adicionado autenticação"

⧗   input: adicionado autenticação
✖   This commit is in past tense. Please use the imperative form. [imperative-rule/pt-br]

✖   found 1 problems, 0 warnings
```

</p>

</details>

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

<h1 align="center">React Native Onboarding Screen</h1>

<div align="center">
  <p align="center">
    Create Onboarding Screen in React Native using
    <a href="https://docs.swmansion.com/react-native-reanimated/docs">Reanimated</a>
    <br />
    <a href="#demo">View Demo</a>
    •
    <a href="https://github.com/castromaciel/onboarding-screen/issuesissues">Report Bug</a>
    •
    <a href="https://github.com/castromaciel/onboarding-screen/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies-used">Technologies used</a></li>
      </ul>
    </li>
    <li>
      <a href="#development">Development</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#make-it-your-own">Make it your own</a></li>
        <li><a href="#install-dependencies">Install dependencies</a></li>
        <li><a href="#available-scripts">Available Scripts</a></li>
      </ul>
    </li>
    <li><a href="#base-dependencies">Base Dependencies</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#credits">Credits</a></li>
  </ol>
</details>

## About the project

This project focuses on creating an onboarding screen in a mobile application using React Native and the powerful Reanimated library.

With React Native, you can develop a highly responsive and cross-platform user interface, ensuring that the onboarding screen is accessible on both iOS and Android devices. The integration of the Reanimated library adds a touch of magic to our animations, allowing us to create smooth transitions and stunning visuals.

## Demo

Demo iOS

<video width="375" height="812" autoplay loop muted playsinline>
  <source src="./assets/Demo.mp4" type="video/mp4">
  Your browser does not support videos.
</video>

### Technologies used

[![react native][react-native]][react-native-url]
[![react native reanimated][reanimated]][reanimated-url]

## Development

### Prerequisites

Here we'll list things you need to use the software and how to install them.

- [Node js][nodejs-url]
- [Watchman][watchman-url]
- [Xcode 12][xcode-url]
- [Cocoapods 1.10.1][cocoapods-url]

### Make it your own

To get a local copy, clone it using:

```bash
git clone https://github.com/castromaciel/onboarding-screen.git
```

Or get it downloading

```bash
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```

### Install dependencies:

```bash
yarn install
#or
npm install
```

For iOS

```bash
npx pod-install
```


### Available Scripts

In this project, you can run the following scripts:

| Scripts         | Description                      |
| --------------- | -------------------------------- |
| npm run-android | Runs the app at android devices. |
| npm run-ios     | Runs the app at iOS devices.     |
| npm test        | Runs tests.                      |

## Base Dependencies

- [reanimated][reanimated-url] animation library.
- [lottie-react-native][lottie-react-native-url] Lottie component for React Native.

## Folder Structure

- `src`: This folder is the main container of all the code inside application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through app (such as a generic button)
  - `data`: Folder used for mock data used for development and testing purposes.
  - `interfaces`: Folder to defining TypeScript interfaces that help in defining data structures and contracts between different parts of the application.
  - `screens`: Folder that contains all application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code.
      - `index.tsx`
- `App.tsx`: Main component that starts whole app.
- `index.js`: Entry point of application as per React-Native standards.

## License

This project is licensed under the terms of the [MIT license][license-url].

## Credits

Based on video [Rakha Wibowo](https://www.youtube.com/watch?v=E-y4lCQF6_I).

Badges used from [Ileriayo • markdown-badges](https://github.com/Ileriayo/markdown-badges).

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/castromaciel/readme-template
[license-url]: https://github.com/castromaciel/readme-template/blob/main/LICENSE
[stars-shield]: https://img.shields.io/github/stars/castromaciel/readme-template
[stars-url]: https://github.com/castromaciel/readme-template
[nodejs-url]: https://nodejs.org/en
[watchman-url]: https://facebook.github.io/watchman
[xcode-url]: https://developer.apple.com/xcode
[cocoapods-url]: https://cocoapods.org
[lottie-react-native-url]: https://github.com/lottie-react-native/lottie-react-native



[react-native]: https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react-native-url]: https://reactnative.dev/
[reanimated]: https://img.shields.io/badge/react%20native%20reanimated-20B2AA?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2OSA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMjUuMjA2NlYyNC40MjhMMi45NzA4NiAyMi45MTQxQzIuOTcwODYgMjIuOTE0MSAyLjk3MDg2IDIxLjQwMDIgMi45NzA4NiAyMS4yMjcyQzIuOTcwODYgMjEuMDU0MiAyLjk3MDg2IDIwLjEwMjYgMi45NzA4NiAyMC4xMDI2TDIuNjAyNjggMTkuNDc1NEMyLjYwMjY4IDE5LjQ3NTQgNi4xMTEyNCAxNy4wNzQ3IDYuMjg0NSAxNi45MjMzQzYuNDU3NzYgMTYuNzUwMyA5LjEwMDAxIDE1LjIzNjQgOS4xMDAwMSAxNS4yMzY0TDExLjE1NzUgMTQuNTg3NkMxMS4xNTc1IDE0LjU4NzYgMTMuNTE4MiAxNC40Nzk0IDEzLjkwOCAxNC41ODc2QzE0LjI5NzkgMTQuNjk1NyAxNy42NTQ4IDE0LjY5NTcgMTcuNjU0OCAxNC42OTU3TDE4LjcxNjEgMTQuMDkwMUwyMi40MTk2IDEyLjI5NTFMMjYuNTU2MiAxMS4xNzA1SDI5LjYzMTZMMzMuNTA4MyAxMS45NDlIMzkuMzc3Nkw0NC4zNTg5IDExLjE3MDVMNDYuMDkxNSAxMC4xNzU2TDQ3Ljk1NDEgOS4yMjM5OUw0Ni4xMTMyIDkuMDA3NzJDNDYuMTEzMiA5LjAwNzcyIDQ2LjU0NjMgOC4yNTA3NiA0Ni41ODk2IDguMTg1ODhDNDYuNjMzIDguMTIwOTkgNDcuNzU5MiA3LjUxNTQzIDQ3Ljc1OTIgNy41MTU0M0w0OS4wODAzIDYuNzU4NDdINDcuNDM0M0M0Ny40MzQzIDYuNzU4NDcgNDguNDk1NSA1Ljg5MzM3IDQ4LjYwMzggNS43MjAzNUM0OC43MTIxIDUuNTQ3MzQgNDkuNDA1MiA1LjI2NjE4IDQ5LjQwNTIgNS4yNjYxOEw1MC42ODMgNS4wMDY2NUw1Mi41ODg4IDQuMDU1MDVMNTMuNzU4NCAyLjQzM0M1My43NTg0IDIuNDMzIDU1LjA1NzggMS45Nzg4MiA1NS4yNzQ0IDEuOTc4ODJDNTUuNDkxIDEuOTc4ODIgNTYuMDEwOCAxLjk3ODgyIDU2LjIyNzQgMS45Nzg4MkM1Ni40NDM5IDEuOTc4ODIgNTcuNjU2OCAxLjE1Njk4IDU3LjY1NjggMS4xNTY5OEw1OC42OTY0IDIuMDIyMDhMNjAuOTI3MSAzLjE0NjdMNjMuMjg3OCA0Ljk4NTAzTDY0LjAyNDIgNi4zOTA4TDY3LjA1NjIgOS4wMjkzNEw2Ny44NzkyIDEwLjQ1NjdMNjcuMzM3OCAxMi4wMTM5TDY2LjY2NjQgMTIuMjMwMkw2NS41NDAyIDEyLjUxMTNMNjQuNTY1NiAxMS45NDlMNjEuNjYzNSAxMS4yNzg2TDYwLjMyMDcgMTAuNUw1OC4wODk5IDEwLjMyN0w1Ni4zMTQgMTEuMzQzNUw1NC40NTE0IDE2LjI1MjlMNTQuMTY5OSAxOS4wNDI4TDUzLjcxNSAyMC44Mzc5TDUzLjA0MzcgMjEuOTYyNUw1OC44MjYzIDIzLjkzMDZMNjIuOTYyOSAyNi44NTAzTDY2LjI3NjYgMjkuMTQyOEw2Ni4zODQ5IDMwLjAyOTVMNjcuODc5MiAzMS4xOTc0TDY4LjI2OTEgMzIuNDk1TDY1LjgyMTggMzIuODg0M0w2NC40MTQgMzAuNDYyMUw2My4wMDYyIDI5LjEyMTJMNTguOTc3OSAyNi4xNTgySDU3LjAwN0w1Ni40NDM5IDI4LjM0MjZMNTQuMjU2NSAzMS4wMjQ0SDUzLjE5NTNMNTEuMTE2MSAzMi4yMTM5VjMwLjExNkw1MS42NzkyIDI5LjYxODZINTMuMDIyTDU0LjE0ODIgMjguNTU4OUw1NC44MTk2IDI3LjYwNzNWMjYuMTU4Mkw1Mi4yNDIzIDI1LjM3OTZMNDguNjAzOCAyNi4yODhMNDYuMzk0NyAyNS44NzcxTDQ0LjAxMjQgMjYuOTE1MkM0NC4wMTI0IDI2LjkxNTIgMzYuMjgwNSAyNS40NDQ1IDM2LjEwNzMgMjUuMzM2NEMzNS45MzQgMjUuMjI4MiAzMy41MyAyNC40NDk3IDMzLjUzIDI0LjQ0OTdMMzIuNDY4OCAyNC41NTc4SDMxLjg2MjNMMzMuMTE4NSAyNy4zMDQ1TDM0Ljc4NjIgMjkuNzA1MUw0MC41Njg4IDMyLjU1OTlMNDEuNzYgMzMuMjUyTDQxLjkzMzIgMzMuNzI3OEw0My43MzA4IDM0LjQ0MTVMNDQuMDk5IDM1LjA2ODdMNDIuMTI4MSAzNS44NDczTDQwLjU0NzEgMzQuODc0MUM0MC41NDcxIDM0Ljg3NDEgMzguNDg5NiAzMy43MDYyIDM4LjMzOCAzMy42NjI5QzM4LjE2NDggMzMuNTk4IDM1Ljc2MDcgMzIuMDg0MSAzNS43NjA3IDMyLjA4NDFDMzUuNzYwNyAzMi4wODQxIDMyLjI1MjIgMzEuNDM1MyAzMi4yNTIyIDMxLjI4MzlDMzIuMjUyMiAzMS4xMTA5IDMwLjE3MyAyOC40OTQgMzAuMDY0NyAyOC4yOTkzQzI5Ljk1NjUgMjguMTA0NyAyOC4wMjg5IDI1LjUzMSAyOC4wMjg5IDI1LjUzMUwyNi44Mzc3IDI0LjgzODlMMjUuNjAzMyAyOC45MjY1TDIyLjk2MSAzMi44NDExTDIzLjA2OTMgMzQuMjkwMUwyNS4wODM1IDM4LjQ4NThMMjYuNzcyOCA0MC4yODA5TDI2LjI3NDYgNDAuODQzMkgyMy45MTM5TDIyLjg1MjcgMzkuMDQ4MVYzOC4xNjE0TDE5LjkwNzIgMzMuMDU3M1YzMS45MzI3TDIwLjQ3MDQgMzAuOTU5NUwyMS43Njk4IDI4LjA4M0wyMS45ODY0IDI2LjI0NDdDMjEuOTg2NCAyNi4yNDQ3IDE5LjIzNTkgMjMuMTczNiAxOS4wNjI2IDIyLjkzNTdDMTguODg5MyAyMi43MTk1IDE3LjkzNjQgMTkuMDIxMiAxNy45MzY0IDE5LjAyMTJWMTYuNzkzNkMxNy45MzY0IDE2Ljc5MzYgMTcuMTU2NyAxNi43OTM2IDE2Ljk4MzQgMTYuNzI4N0MxNi44MTAyIDE2LjY2MzggMTQuNzUyNyAxNy42MTU0IDE0Ljc1MjcgMTcuNjE1NEMxNC40MDYyIDE3LjYxNTQgMTQuNDA2MiAxNy42MTU0IDE0LjQwNjIgMTcuNjE1NEwxMS45MzcyIDE4LjIyMUwxMC4xODI5IDE5LjIzNzVMOC40MDY5NiAyMC41MzUxTDYuNTAxMDggMjAuMjUzOUw1LjA5MzMyIDIxLjQ4NjdMMy42ODU1NyAyMy45MDlMMi4zNjQ0NCAyNS4xMjAxTDEgMjUuMjA2NloiIGZpbGw9IiMwMDFBNzIiLz4KPHBhdGggZD0iTTEuMDAwMDIgNDAuODQzMkg2OC4yNjkxTTEgMjUuMjA2NlYyNC40MjhMMi45NzA4NiAyMi45MTQxQzIuOTcwODYgMjIuOTE0MSAyLjk3MDg2IDIxLjQwMDIgMi45NzA4NiAyMS4yMjcyQzIuOTcwODYgMjEuMDU0MiAyLjk3MDg2IDIwLjEwMjYgMi45NzA4NiAyMC4xMDI2TDIuNjAyNjggMTkuNDc1NEMyLjYwMjY4IDE5LjQ3NTQgNi4xMTEyNCAxNy4wNzQ3IDYuMjg0NSAxNi45MjMzQzYuNDU3NzYgMTYuNzUwMyA5LjEwMDAxIDE1LjIzNjQgOS4xMDAwMSAxNS4yMzY0TDExLjE1NzUgMTQuNTg3NkMxMS4xNTc1IDE0LjU4NzYgMTMuNTE4MiAxNC40Nzk0IDEzLjkwOCAxNC41ODc2QzE0LjI5NzkgMTQuNjk1NyAxNy42NTQ4IDE0LjY5NTcgMTcuNjU0OCAxNC42OTU3TDE4LjcxNjEgMTQuMDkwMUwyMi40MTk2IDEyLjI5NTFMMjYuNTU2MiAxMS4xNzA1SDI5LjYzMTZMMzMuNTA4MyAxMS45NDlIMzkuMzc3Nkw0NC4zNTg5IDExLjE3MDVMNDYuMDkxNSAxMC4xNzU2TDQ3Ljk1NDEgOS4yMjM5OUw0Ni4xMTMyIDkuMDA3NzJDNDYuMTEzMiA5LjAwNzcyIDQ2LjU0NjMgOC4yNTA3NiA0Ni41ODk2IDguMTg1ODhDNDYuNjMzIDguMTIwOTkgNDcuNzU5MiA3LjUxNTQzIDQ3Ljc1OTIgNy41MTU0M0w0OS4wODAzIDYuNzU4NDdINDcuNDM0M0M0Ny40MzQzIDYuNzU4NDcgNDguNDk1NSA1Ljg5MzM3IDQ4LjYwMzggNS43MjAzNUM0OC43MTIxIDUuNTQ3MzQgNDkuNDA1MiA1LjI2NjE4IDQ5LjQwNTIgNS4yNjYxOEw1MC42ODMgNS4wMDY2NUw1Mi41ODg4IDQuMDU1MDVMNTMuNzU4NCAyLjQzM0M1My43NTg0IDIuNDMzIDU1LjA1NzggMS45Nzg4MiA1NS4yNzQ0IDEuOTc4ODJDNTUuNDkxIDEuOTc4ODIgNTYuMDEwOCAxLjk3ODgyIDU2LjIyNzQgMS45Nzg4MkM1Ni40NDM5IDEuOTc4ODIgNTcuNjU2OCAxLjE1Njk4IDU3LjY1NjggMS4xNTY5OEw1OC42OTYzIDIuMDIyMDhMNjAuOTI3MSAzLjE0NjdMNjMuMjg3OCA0Ljk4NTAzTDY0LjAyNDIgNi4zOTA4TDY3LjA1NjIgOS4wMjkzNEw2Ny44NzkyIDEwLjQ1NjhMNjcuMzM3OCAxMi4wMTM5TDY2LjY2NjQgMTIuMjMwMkw2NS41NDAyIDEyLjUxMTNMNjQuNTY1NiAxMS45NDlMNjEuNjYzNSAxMS4yNzg2TDYwLjMyMDcgMTAuNUw1OC4wODk5IDEwLjMyN0w1Ni4zMTQgMTEuMzQzNUw1NC40NTE0IDE2LjI1MjlMNTQuMTY5OSAxOS4wNDI4TDUzLjcxNTEgMjAuODM3OUw1My4wNDM3IDIxLjk2MjVMNTguODI2MyAyMy45MzA2TDYyLjk2MjkgMjYuODUwM0w2Ni4yNzY2IDI5LjE0MjhMNjYuMzg0OSAzMC4wMjk1TDY3Ljg3OTIgMzEuMTk3NEw2OC4yNjkxIDMyLjQ5NUw2NS44MjE4IDMyLjg4NDNMNjQuNDE0IDMwLjQ2MjFMNjMuMDA2MiAyOS4xMjEyTDU4Ljk3NzkgMjYuMTU4Mkg1Ny4wMDdMNTYuNDQzOSAyOC4zNDI2TDU0LjI1NjUgMzEuMDI0NEg1My4xOTUzTDUxLjExNjEgMzIuMjEzOVYzMC4xMTZMNTEuNjc5MiAyOS42MTg2SDUzLjAyMkw1NC4xNDgyIDI4LjU1ODlMNTQuODE5NiAyNy42MDczVjI2LjE1ODJMNTIuMjQyMyAyNS4zNzk2TDQ4LjYwMzggMjYuMjg4TDQ2LjM5NDcgMjUuODc3MUw0NC4wMTI0IDI2LjkxNTJDNDQuMDEyNCAyNi45MTUyIDM2LjI4MDUgMjUuNDQ0NSAzNi4xMDczIDI1LjMzNjRDMzUuOTM0IDI1LjIyODIgMzMuNTMgMjQuNDQ5NyAzMy41MyAyNC40NDk3TDMyLjQ2ODggMjQuNTU3OEgzMS44NjIzTDMzLjExODUgMjcuMzA0NUwzNC43ODYyIDI5LjcwNTFMNDAuNTY4OCAzMi41NTk5TDQxLjc2IDMzLjI1Mkw0MS45MzMyIDMzLjcyNzhMNDMuNzMwOCAzNC40NDE1TDQ0LjA5OSAzNS4wNjg3TDQyLjEyODEgMzUuODQ3M0w0MC41NDcxIDM0Ljg3NEM0MC41NDcxIDM0Ljg3NCAzOC40ODk2IDMzLjcwNjIgMzguMzM4IDMzLjY2MjlDMzguMTY0OCAzMy41OTggMzUuNzYwOCAzMi4wODQxIDM1Ljc2MDggMzIuMDg0MUMzNS43NjA4IDMyLjA4NDEgMzIuMjUyMiAzMS40MzUzIDMyLjI1MjIgMzEuMjgzOUMzMi4yNTIyIDMxLjExMDkgMzAuMTczIDI4LjQ5NCAzMC4wNjQ3IDI4LjI5OTNDMjkuOTU2NSAyOC4xMDQ3IDI4LjAyODkgMjUuNTMxIDI4LjAyODkgMjUuNTMxTDI2LjgzNzcgMjQuODM4OUwyNS42MDMyIDI4LjkyNjVMMjIuOTYxIDMyLjg0MTFMMjMuMDY5MyAzNC4yOTAxTDI1LjA4MzUgMzguNDg1OEwyNi43NzI4IDQwLjI4MDlMMjYuMjc0NiA0MC44NDMySDIzLjkxMzlMMjIuODUyNyAzOS4wNDgxVjM4LjE2MTRMMTkuOTA3MiAzMy4wNTczVjMxLjkzMjdMMjAuNDcwNCAzMC45NTk1TDIxLjc2OTggMjguMDgzTDIxLjk4NjQgMjYuMjQ0N0MyMS45ODY0IDI2LjI0NDcgMTkuMjM1OSAyMy4xNzM2IDE5LjA2MjYgMjIuOTM1N0MxOC44ODkzIDIyLjcxOTUgMTcuOTM2NCAxOS4wMjEyIDE3LjkzNjQgMTkuMDIxMlYxNi43OTM2QzE3LjkzNjQgMTYuNzkzNiAxNy4xNTY3IDE2Ljc5MzYgMTYuOTgzNCAxNi43Mjg3QzE2LjgxMDIgMTYuNjYzOCAxNC43NTI3IDE3LjYxNTQgMTQuNzUyNyAxNy42MTU0QzE0LjQwNjIgMTcuNjE1NCAxNC40MDYyIDE3LjYxNTQgMTQuNDA2MiAxNy42MTU0TDExLjkzNzIgMTguMjIxTDEwLjE4MjkgMTkuMjM3NUw4LjQwNjk2IDIwLjUzNTFMNi41MDEwOCAyMC4yNTM5TDUuMDkzMzIgMjEuNDg2N0wzLjY4NTU3IDIzLjkwOUwyLjM2NDQ0IDI1LjEyMDFMMSAyNS4yMDY2WiIgc3Ryb2tlPSIjMDAxQTcyIiBzdHJva2Utd2lkdGg9IjAuNzExODQyIi8+Cjwvc3ZnPg==&color=782aeb
[reanimated-url]: https://docs.swmansion.com/react-native-reanimated/
[ts]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[ts-url]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white

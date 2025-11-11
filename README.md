<!-- Banner Image -->

<p align="center">
  <a href="https://expo.dev/">
    <img alt="Expo logo" height="128" src="./.github/resources/banner.png">
    <h1 align="center">Expo — Fork Pessoal de Estudos</h1>
  </a>
</p>

<p align="center">
   <a aria-label="SDK version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Expo SDK version" src="https://img.shields.io/npm/v/expo.svg?style=flat-square&label=SDK&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="Chat or ask a question" href="https://chat.expo.dev" target="_blank">
    <img alt="Chat or ask a question" src="https://img.shields.io/discord/695411232856997968.svg?style=flat-square&labelColor=000000&color=4630EB&logo=discord&logoColor=FFFFFF&label=Chat%20with%20us" />
  </a>
  <a aria-label="Expo is free to use" href="https://github.com/expo/expo/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />
  </a>
  <a aria-label="expo downloads" href="http://www.npmtrends.com/expo" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/expo.svg?style=flat-square&labelColor=gray&color=33CC12&label=Downloads" />
  </a>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://snack.expo.dev"><b>Try Expo in the Browser</b></a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://docs.expo.dev">Read the Documentation</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://expo.dev/blog">Learn more on our blog</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://expo.canny.io/feature-requests">Request a feature</a>
</p>

<h6 align="center">Follow us on</h6>
<p align="center">
  <a aria-label="Follow @expo on X" href="https://x.com/intent/follow?screen_name=expo" target="_blank">
    <img alt="Expo on X" src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on GitHub" href="https://github.com/expo" target="_blank">
    <img alt="Expo on GitHub" src="https://img.shields.io/badge/GitHub-222222?style=for-the-badge&logo=github&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on Reddit" href="https://www.reddit.com/r/expo/" target="_blank">
    <img alt="Expo on Reddit" src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on Bluesky" href="https://bsky.app/profile/expo.dev" target="_blank">
    <img alt="Expo on Bluesky" src="https://img.shields.io/badge/Bluesky-1DA1F2?style=for-the-badge&logo=bluesky&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on LinkedIn" href="https://www.linkedin.com/company/expo-dev" target="_blank">
    <img alt="Expo on LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
</p>

---

## 📘 Fork Pessoal para Estudos

> **Autor:** [Wendel Muniz](https://github.com/wendel211)  
> **Propósito:** Exploração e acompanhamento do ecossistema Expo e React Native.  
> **Status:** Em andamento — foco em entender a estrutura interna e ferramentas da plataforma.

Este repositório é um **fork pessoal** do projeto oficial **[Expo](https://github.com/expo/expo)**, criado para fins de **aprendizado e acompanhamento técnico**.  
O foco é compreender como o **SDK Expo** é estruturado e suas atualizações, também como os módulos nativos funcionam e como as ferramentas de build e deploy se integram com **EAS (Expo Application Services)**.


---

## 🎯 Objetivos de Estudo

- Explorar o funcionamento do **Expo Go**, CLI e SDK.  
- Entender a **estrutura monorepo** e o gerenciamento de pacotes.  
- Estudar o **EAS Build**, **EAS Update** e automações de deploy.  
- Criar exemplos próprios com **módulos nativos personalizados**.  
- Acompanhar a evolução do **React Native** dentro do ecossistema Expo.  

---

## 🗺 Estrutura do Projeto

- [`packages/`](/packages): Códigos dos módulos do SDK Expo.  
- [`apps/`](/apps): Projetos de teste integrados aos módulos.  
- [`apps/expo-go/`](/apps/expo-go): Código-fonte do app **Expo Go**.  
- [`docs/`](/docs): Código da documentação em **https://docs.expo.dev**.  
- [`templates/`](/templates): Templates gerados por `npx create-expo-app`.  
- [`react-native-lab/`](/react-native-lab): Fork do React Native usado pelo Expo Go.  
- [`guides/`](/guides): Tutoriais técnicos e guias avançados.  
- [`tools/`](/tools): Scripts e utilitários internos de build.  
- [`template-files/`](/template-files): Arquivos com chaves e dependências privadas.  

---

## 📚 Documentação Atualizada (2025)

Acompanhe as versões e guias mais recentes do Expo:

- 📘 [Documentação Oficial](https://docs.expo.dev/)  
- ⚙️ [API Reference (última versão)](https://docs.expo.dev/versions/latest/)  
- 🧩 [Custom Native Modules](https://docs.expo.dev/workflow/customizing/)  
- ☁️ [EAS Build & Submit](https://docs.expo.dev/build/introduction/)  
- 🚀 [Router e Navegação](https://docs.expo.dev/router/introduction/)  
- 🧠 [Blog Oficial — Insights e Updates](https://expo.dev/blog)  

---

## 🧠 Conceitos-Chave

- **Expo SDK:** APIs universais para recursos nativos com JS/TS.  
- **Expo Go:** App cliente para rodar projetos instantaneamente.  
- **EAS Build:** Compila apps nativos em nuvem (Android/iOS).  
- **EAS Update:** Atualiza apps publicados sem reenvio às stores.  
- **Router:** Nova API de rotas baseada em filesystem (Next.js-like).  
- **Metro Bundler:** Empacotador JS usado pelo React Native.  

---

## 🏅 Badges

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

---

## 🤝 Contribuição e Créditos

Este fork é **somente para estudos**, sem alterações de código destinadas à redistribuição pública.  
Para contribuir com o projeto original, acesse:  
👉 [Expo Contributing Guide](https://github.com/expo/expo/blob/main/CONTRIBUTING.md)

---

## 🪪 Licença

Este projeto mantém a licença **[MIT](LICENSE)** original.  
Todo o código e marca pertencem à **Expo** e seus colaboradores.  
As modificações aqui são de caráter **educacional e pessoal**.

---

<p align="center">
  <img alt="Star the Expo repo on GitHub to support the project" src="https://user-images.githubusercontent.com/9664363/185428788-d762fd5d-97b3-4f59-8db7-f72405be9677.gif" width="50%">
  <br/>
  <sub>⭐ Fork mantido para estudo contínuo das ferramentas e atualizações do ecossistema Expo.</sub>
</p>

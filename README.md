<h1 style="display:flex; align-items:center; gap:0.5rem;">
  <img src="src/icons/logo-white.svg#gh-light-mode-only" alt="Duck.ai Logo" width="32" height="32" />
  <img src="src/icons/logo-dark.svg#gh-dark-mode-only" alt="Duck.ai Logo" width="32" height="32" />
  <span>Duck.ai Sidebar</span>
</h1>

> [!warning]
> This extension is not yet available on the Firefox Add-ons Store;
> please refer to the original extension for now.

[![License: MIT][badge-mit]][url-mit] [![Firefox Add-on][badge-firefox]][url-firefox]

[badge-mit]: https://img.shields.io/badge/License-MIT-blue.svg
[url-mit]: https://opensource.org/licenses/MIT
[badge-firefox]: https://img.shields.io/badge/Support-Firefox-brightgreen.svg
[url-firefox]: https://addons.mozilla.org/en-US/firefox/addon/duck-ai-sidebar/

This extension allows you to open the [Duck.ai][duck.ai] chat interface in the Firefox sidebar, similar to Microsoft Edge's Copilot sidebar.

[Duck.ai][duck.ai] is an AI chat service provided by [DuckDuckGo][duckduckgo-about], which lets users access various AI models for free without sacrificing personal data[^1].

## Features

[Duck.ai][duck.ai] and [Duck.ai Sidebar extension][duck.ai-sidebar-repo] features. <!-- To-Do: repository link needs to be switched with extension link, once uploaded to Firefox Add-ons -->

<details>
  <summary>Click here to expand/collapse Duck.ai's features.</summary>
  
  <!-- To-Do: add Duck.ai feature descriptions -->
  Duck.ai | Description
  ------- | -------
  AI Chat | 
  AI Voice Chat | 
  AI Image Creation | 
</details>

<details open>
  <summary>Click here to expand/collapse.</summary>
  
  Sidebar Features | Status
  ---------------- | ------
  Access to Duck.ai and it's features in a Sidebar. | Implemented
  Ask Duck.ai about selected text on a webpage, using the context menu. | Planned
  Ask Duck.ai to summarize the current webpage, using the context menu. | Planned
</details>

## Base Models

As of February 2026, [Duck.ai][duck.ai] offers the following models to all users:

<details>
  <summary>Click here to expand/collapse.</summary>
  
  Model | Documentation
  ----- | -------------
  [GPT-4o mini][chatgpt-4o-mini] | [OpenAI API][chatgpt-4o-mini-platform]
  [GPT-5 mini][chatgpt-5-mini] | [OpenAI API][chatgpt-5-mini-platform]
  [GPT-OSS 120B][chatgpt-oss-120b] | [OpenAI API][chatgpt-oss-120b-platform]
  [Llama 4 Scout][llama-4] | [Llama Docs][llama-4-docs]
  [Claude Haiku 3.5][claude-haiku-3.5] | [Claude API][claude-api-platform]
  [Mistral Small 3][mistral-small-3] | [Mistral Docs][mistral-small-3-docs]
</details>

## Advanced Models

Additionally, users with a [DuckDuckGo Pro][duckduckgo-pro] **subscription** can access *advanced* models:
<details>
  <summary>Click here to expand/collapse.</summary>
  
  Model | Documentation
  ----- | -------------
  [GPT-4o][chatgpt-4o] | [OpenAI API][chatgpt-4o-platform]
  [GPT-5.1][chatgpt-5.1] | [OpenAI API][chatgpt-5.1-platform]
  [Claude Sonnet 4.5][claude-sonnet-4.5] | [Claude API][claude-api-platform]
  [Llama 4 Maverick][llama-4] | [Llama Docs][llama-4-docs]
</details>

## Credits

The original extension was created by [@yookoala](https://github.com/yookoala/duckduckgo-ai-chat-sidebar).

## License

This software is distributed under the MIT License. A copy of the license is
distributed along with the source code [here](LICENSE.md).

<!-- Base Model Links -->
[chatgpt-4o-mini]: https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence
[chatgpt-4o-mini-platform]: https://platform.openai.com/docs/models/gpt-4o-mini
[chatgpt-5-mini]: https://openai.com/index/introducing-gpt-5/
[chatgpt-5-mini-platform]: https://platform.openai.com/docs/models/gpt-5-mini
[chatgpt-oss-120b]: https://openai.com/index/introducing-gpt-oss/
[chatgpt-oss-120b-platform]: https://platform.openai.com/docs/models/gpt-oss-120b
[llama-4]: https://www.llama.com/models/llama-4/
[llama-4-docs]: https://www.llama.com/docs/model-cards-and-prompt-formats/llama4/
[claude-haiku-3.5]: https://www.anthropic.com/news/3-5-models-and-computer-use
[claude-api-platform]: https://platform.claude.com/docs/en/about-claude/models/overview
[mistral-small-3]: https://mistral.ai/news/mistral-small-3
[mistral-small-3-docs]: https://docs.mistral.ai/models/mistral-small-3-0-25-01

<!-- Advanced Model Links -->
[chatgpt-4o]: https://openai.com/index/hello-gpt-4o/
[chatgpt-4o-platform]: https://platform.openai.com/docs/models/gpt-4o
[chatgpt-5.1]: https://openai.com/index/gpt-5-1/
[chatgpt-5.1-platform]: https://platform.openai.com/docs/models/gpt-5.1
[claude-sonnet-4.5]: https://www.anthropic.com/news/claude-sonnet-4-5

<!-- Duck.ai Links -->
[duck.ai]: https://duck.ai
[duck.ai-pp-tos]: https://duckduckgo.com/duckai/privacy-terms
[duckduckgo-about]: https://duckduckgo.com/about
[duckduckgo-pro]: https://duckduckgo.com/pro

<!-- Duck.ai Sidebar Extension Project Links -->
[duck.ai-sidebar]: https://nocyei.github.io
[duck.ai-sidebar-repo]: https://github.com/nocyei/duck-ai-sidebar

<!-- Footnotes -->
[^1]: [Duck.ai's Privacy Policy and Terms of Service][duck.ai-pp-tos] provide more details on how user data is handled.

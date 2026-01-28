<h1 style="display:flex; align-items:center; gap:0.5rem;">
  <img src="src/icons/logo-white.svg#gh-light-mode-only" alt="Duck.ai Logo" width="32" height="32" />
  <img src="src/icons/logo-dark.svg#gh-dark-mode-only" alt="Duck.ai Logo" width="32" height="32" />
  <span>Duck.ai Sidebar</span>
</h1>

[![License: MIT][badge-mit]][url-mit] [![Firefox Addon][badge-firefox]][url-firefox]

[badge-mit]: https://img.shields.io/badge/License-MIT-blue.svg
[url-mit]: https://opensource.org/licenses/MIT
[badge-firefox]: https://img.shields.io/badge/Support-Firefox-darkgreen.svg
[url-firefox]: https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-ai-chat-sidebar/

This extension allows you to open the [Duck.ai][duck.ai] chat interface in the Firefox sidebar, similar to Microsoft Edge's Copilot sidebar.

[Duck.ai][duck.ai] is an AI chat service provided by [DuckDuckGo][duckduckgo-about], which lets users access various AI models for free without sacrificing personal data.

## Base Models

As of January 2026, [Duck.ai][duck.ai] offers the following models to all users:

Model | Documentation
----- | -------------
[GPT-4o mini][chatgpt-4o-mini] | [OpenAI API][chatgpt-4o-mini-platform]
[GPT-5 mini][chatgpt-5-mini] | [OpenAI API][chatgpt-5-mini-platform]
[GPT-OSS 120B][chatgpt-oss-120b] | [OpenAI API][chatgpt-oss-120b-platform]
[Llama 4 Scout][llama-4] | [Llama Docs][llama-4-docs]
[Claude Haiku 3.5][claude-haiku-3.5] | [Claude API][claude-api-platform]
[Mistral Small 3][mistral-small-3] | [Mistral Docs][mistral-small-3-docs]

## Advanced Models

Additionally, users with a [DuckDuckGo Pro][duckduckgo-pro] **subscription** can access *advanced* models:

Model | Documentation
----- | -------------
[GPT-4o][chatgpt-4o] | [OpenAI API][chatgpt-4o-platform]
[GPT-5.1][chatgpt-5.1] | [OpenAI API][chatgpt-5.1-platform]
[Claude Sonnet 4.5][claude-sonnet-4.5] | [Claude API][claude-api-platform]
[Llama 4 Maverick][llama-4] | [Llama Docs][llama-4-docs]

## Extension Features
Feature | Status
------- | ------
Access [Duck.ai][duck.ai] in the Firefox sidebar. | Complete
Reload [Duck.ai][duck.ai] in the Firefox sidebar with the click of a button. | Planned
Ask [Duck.ai][duck.ai] about selected text on any webpage by right-clicking and choosing "Ask Duck.ai". | Planned

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

[chatgpt-4o]: https://openai.com/index/hello-gpt-4o/
[chatgpt-4o-platform]: https://platform.openai.com/docs/models/gpt-4o
[chatgpt-5.1]: https://openai.com/index/gpt-5-1/
[chatgpt-5.1-platform]: https://platform.openai.com/docs/models/gpt-5.1
[claude-sonnet-4.5]: https://www.anthropic.com/news/claude-sonnet-4-5

[duck.ai]: https://duck.ai
[duckduckgo-about]: https://duckduckgo.com/about
[duckduckgo-pro]: https://duckduckgo.com/pro

## Credits

The original extension was created by @yookoala

## License

This software is distributed under the MIT License. A copy of the license is
distributed along with the source code [here](LICENSE.md).

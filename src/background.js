const extensionApi = globalThis.browser ?? globalThis.chrome;
const ASK_DUCK_AI_MENU_ID = "ask-duck-ai";

function createAskDuckAiMenu() {
  if (!extensionApi?.contextMenus) {
    return;
  }

  try {
    extensionApi.contextMenus.removeAll(() => {
      extensionApi.contextMenus.create({
        id: ASK_DUCK_AI_MENU_ID,
        title: "Ask Duck.ai",
        contexts: ["selection"],
      });
    });
    return;
  } catch {
    // Fallback for Promise-based APIs.
  }

  Promise.resolve(extensionApi.contextMenus.removeAll())
    .catch(() => undefined)
    .finally(() => {
      extensionApi.contextMenus.create({
        id: ASK_DUCK_AI_MENU_ID,
        title: "Ask Duck.ai",
        contexts: ["selection"],
      });
    });
}

function openDuckAiWithSelection(info, tab) {
  const selectedText = info.selectionText?.trim();
  if (!selectedText || info.menuItemId !== ASK_DUCK_AI_MENU_ID) {
    return;
  }

  const prompt = tab?.url
    ? `Can you explain this selected text from ${tab.url}?\n\n${selectedText}`
    : selectedText;

  const askUrl = new URL("https://duck.ai/");
  askUrl.searchParams.set("q", prompt);

  extensionApi.tabs?.create({ url: askUrl.toString() });
}

extensionApi.runtime?.onInstalled?.addListener(createAskDuckAiMenu);
extensionApi.runtime?.onStartup?.addListener(createAskDuckAiMenu);
extensionApi.contextMenus?.onClicked?.addListener(openDuckAiWithSelection);
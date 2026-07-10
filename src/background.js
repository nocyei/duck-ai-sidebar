const extensionApi = globalThis.browser ?? globalThis.chrome;
const ASK_DUCK_AI_MENU_ID = "ask-duck-ai";
const SIDEBAR_PATH = "src/sidebar.html";

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
  const sidebarPath = `${SIDEBAR_PATH}?q=${encodeURIComponent(prompt)}`;
  const hasFirefoxSidebarApi = extensionApi.sidebarAction?.setPanel;

  if (hasFirefoxSidebarApi) {
    extensionApi.sidebarAction.setPanel({ panel: sidebarPath });
    extensionApi.sidebarAction.open();
    return;
  }

  if (extensionApi.sidePanel?.setOptions && tab?.id !== undefined) {
    extensionApi.sidePanel.setOptions({
      tabId: tab.id,
      path: sidebarPath,
      enabled: true,
    });
    extensionApi.sidePanel.open({ tabId: tab.id });
  }
}

extensionApi.runtime?.onInstalled?.addListener(createAskDuckAiMenu);
extensionApi.runtime?.onStartup?.addListener(createAskDuckAiMenu);
extensionApi.contextMenus?.onClicked?.addListener(openDuckAiWithSelection);
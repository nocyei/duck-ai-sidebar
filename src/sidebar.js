const currentUrl = new URL(window.location.href);
const duckAiUrl = new URL("https://duck.ai/");
const prompt = currentUrl.searchParams.get("q");

if (prompt) {
  duckAiUrl.searchParams.set("q", prompt);
}

window.location.replace(duckAiUrl.toString());

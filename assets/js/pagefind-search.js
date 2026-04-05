const form = document.querySelector("[data-pagefind-form]");
const input = document.querySelector("[data-pagefind-input]");
const results = document.querySelector("[data-pagefind-results]");
const status = document.querySelector("[data-pagefind-status]");

if (!form || !input || !results || !status) {
  // This script is loaded only for the search page, but guard anyway.
} else {
  let pagefind;
  let searchNonce = 0;

  const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
  input.value = initialQuery;

  const escapeHtml = (value) =>
    value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

  const setStatus = (message, tone = "default") => {
    status.textContent = message;
    status.dataset.tone = tone;
  };

  const updateQueryString = (query) => {
    const url = new URL(window.location.href);
    if (query) {
      url.searchParams.set("q", query);
    } else {
      url.searchParams.delete("q");
    }
    window.history.replaceState({}, "", url);
  };

  const renderResults = (matches, query) => {
    if (!matches.length) {
      results.innerHTML = `
        <div class="search-shell rounded-[28px] p-6">
          <p class="text-lg font-semibold">No results for "${escapeHtml(query)}"</p>
          <p class="mt-2 opacity-70">Try a shorter phrase, a page title, or a key topic from the content.</p>
        </div>
      `;
      return;
    }

    results.innerHTML = matches
      .map((match) => {
        const title = escapeHtml(match.meta.title || "Untitled result");
        const excerpt = escapeHtml(match.excerpt || match.content || "Open this page to read more.");
        const url = escapeHtml(match.url);

        return `
          <article class="search-result rounded-[28px] p-6">
            <a class="block" href="${url}">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Search Result</p>
              <h2 class="mt-2 text-2xl font-semibold text-white">${title}</h2>
              <p class="mt-3 text-base text-white/70">${excerpt}</p>
              <span class="mt-5 inline-flex items-center text-sm font-semibold text-red-300">
                Open page
              </span>
            </a>
          </article>
        `;
      })
      .join("");
  };

  const loadPagefind = async () => {
    if (!pagefind) {
      pagefind = await import(new URL("/pagefind/pagefind.js", window.location.origin).toString());
      await pagefind.init();
    }

    return pagefind;
  };

  const runSearch = async (rawQuery) => {
    const query = rawQuery.trim();
    const currentSearch = ++searchNonce;

    updateQueryString(query);

    if (!query) {
      results.innerHTML = "";
      setStatus("Search runs entirely in the browser with a static Pagefind index.");
      return;
    }

    setStatus(`Searching for "${query}"...`);

    const pagefindInstance = await loadPagefind();
    const response = await pagefindInstance.search(query);
    const matches = await Promise.all(response.results.slice(0, 10).map((result) => result.data()));

    if (currentSearch !== searchNonce) {
      return;
    }

    renderResults(matches, query);
    setStatus(`${matches.length} result${matches.length === 1 ? "" : "s"} for "${query}".`);
  };

  let debounceTimer;
  const queueSearch = (query) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => {
      runSearch(query).catch((error) => {
        console.error(error);
        setStatus("Search failed to load. Try refreshing the page.", "error");
      });
    }, 180);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    queueSearch(input.value);
  });

  input.addEventListener("input", (event) => {
    queueSearch(event.target.value);
  });

  input.addEventListener(
    "focus",
    () => {
      loadPagefind().catch((error) => {
        console.error(error);
      });
    },
    { once: true },
  );

  if (initialQuery) {
    queueSearch(initialQuery);
  }
}

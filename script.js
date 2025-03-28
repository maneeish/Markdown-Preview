document.addEventListener("DOMContentLoaded", function () {
    const inputArea = document.getElementById("markdown-input");
    const previewArea = document.getElementById("markdown-preview");
    const clearButton = document.getElementById("clear-btn");
    const downloadButton = document.getElementById("download-btn");

    // Configure marked.js to support line breaks
    marked.setOptions({
        breaks: true,
        gfm: true
    });

    function updatePreview() {
        const markdownText = inputArea.value;
        previewArea.innerHTML = marked.parse(markdownText);
    }

    function downloadMarkdown() {
        const markdownText = inputArea.value;
        const blob = new Blob([markdownText], { type: "text/markdown" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "markdown_preview.md";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    inputArea.addEventListener("input", updatePreview);
    clearButton.addEventListener("click", function () {
        inputArea.value = "";
        previewArea.innerHTML = "";
    });
    downloadButton.addEventListener("click", downloadMarkdown);

    updatePreview(); // Initialize preview on page load
});

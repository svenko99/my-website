class AlfredPlugin {
    constructor(name, url, description) {
        this.name = name;
        this.url = url;
        this.description = description;
    }

    createListItem() {
        return `<li class="plugins-list">
                    <a class="colored" href="${this.url}" target="_blank">${this.name}</a> – ${this.description}
                </li>`;
    }
}

// Seznam pluginov
const plugins = [
    new AlfredPlugin("alfred-annas-archive", "https://github.com/svenko99/alfred-annas-archive/", "search Anna's Archive"),
    new AlfredPlugin("alfred-sskj", "https://alfred.app/workflows/svenko99/sskj/", "search SSKJ dictionary"),
    new AlfredPlugin("alfred-notion", "https://github.com/svenko99/alfred-notion", "search Notion pages"),
    new AlfredPlugin("alfred-genius", "https://github.com/svenko99/alfred-genius", "search Genius lyrics"),
    new AlfredPlugin("alfred-spell-checker", "https://github.com/svenko99/alfred-spell-checker", "spell checker for Alfred"),
    new AlfredPlugin("alfred-WLED", "https://github.com/svenko99/alfred-WLED", "control your WLED devices"),
    new AlfredPlugin("alfred-shazem", "https://alfred.app/workflows/svenko99/shazam/", "Identify music from Alfred"),
]

// Dodaj znotraj HTML
const ul = document.getElementById("plugins");
plugins.forEach(plugin => {
    ul.innerHTML += plugin.createListItem()
});

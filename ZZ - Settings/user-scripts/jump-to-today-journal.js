const fs = this.app.vault.getFiles();

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const directory = "1. Inbox/Journals/"; // Target directory
const fileName = `${today}.md`; // File name with today's date
const filePath = `${directory}${fileName}`; // Full file path

module.exports = async (params) => {
    // Find the first file in the directory that starts with today's date
    const fileToOpen = fs.find(f => f.path.startsWith(directory) && f.name.startsWith(today));

    if (fileToOpen) {
        // If the file exists, open it
        app.workspace.openLinkText(fileToOpen.path, "/", true);
    } else {
        const templateName = "Journals"
        // If the file doesn't exist, create it using the Journals template
        const template = fs.find(f => f.name === `${templateName}.md`);
        
        if (template) {
            this.app.vault.read(template).then(templateContent => {
                this.app.vault.create(filePath, templateContent).then(() => {
                    app.workspace.openLinkText(filePath, "/", true);
                }).catch(error => {
                    console.error("Error creating file:", error);
                    new Notice("Failed to create the file.");
                });
            }).catch(error => {
            console.error("Error reading template:", error);
            new Notice("Failed to read the template.");
            });
        } else {
            new Notice(`Template "${templateName}" not found.`);
        }
    }
}

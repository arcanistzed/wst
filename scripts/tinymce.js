Hooks.on("ready", () => {
	const world = game.world.data.name ?? game.world.id;

	CONFIG.TinyMCE.plugins += " searchreplace visualchars visualblocks textpattern preview template";
	CONFIG.TinyMCE.toolbar += " | searchreplace template";
	CONFIG.TinyMCE.visualchars_default_state = true;
	CONFIG.TinyMCE.visualblocks_default_state = true;
	CONFIG.TinyMCE.style_formats.push({
		title: "World Smiths",
		items: [
			{ title: "Highlight", block: "section", classes: "ws-block ws-highlight", wrapper: true },
			{ title: "Skill Challenge", block: "section", classes: "ws-block ws-skill-challenge", wrapper: true },
			{ title: "Box", block: "section", classes: "ws-block ws-box", wrapper: true },
		],
	});
	CONFIG.TinyMCE.template_selected_content_classes += " ws-contents";
	CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
	CONFIG.TinyMCE.templates.push({
		title: "Note",
		description: "A World Smiths note",
		content: `<section class="ws-block ws-note"><img src="worlds/${world}/styles/ws.svg" width="48" /><div class="contents"><h3></h3><p class="ws-contents">{$contents}</p></div></section>`,
	});
	CONFIG.TinyMCE.content_css.push(`worlds/${world}/styles/ws.css`);

	// Use TinyMCE Sheet on v10
	if (game.release?.generation >= 10) {
		DocumentSheetConfig.registerSheet(JournalEntryPage, "core", JournalTextTinyMCESheet, {
			types: ["text"],
			label: () => game.i18n.localize("EDITOR.TinyMCE"),
			makeDefault: true,
		});
	}
});

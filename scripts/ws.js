Hooks.on("ready", () => {
    CONFIG.TinyMCE.plugins += " searchreplace visualchars visualblocks textpattern preview template";
    CONFIG.TinyMCE.toolbar += " | searchreplace template";
    CONFIG.TinyMCE.visualchars_default_state = true;
    CONFIG.TinyMCE.visualblocks_default_state = true;
    CONFIG.TinyMCE.style_formats.push({
        title: 'World Smiths', items: [
            { title: 'Highlight', block: 'section', classes: 'ws-block highlight', wrapper: true },
            { title: 'Skill Challenge', block: 'section', classes: 'ws-block skill-challenge', wrapper: true },
            { title: 'Box', block: 'section', classes: 'ws-block box', wrapper: true }
        ]
    });
    CONFIG.TinyMCE.template_selected_content_classes += " ws-contents";
    CONFIG.TinyMCE.templates = CONFIG.TinyMCE.templates ?? [];
    CONFIG.TinyMCE.templates.push(
        {
            title: 'Sidebar',
            description: 'A World Smiths sidebar',
            content: '<section class="ws-sidebar-group"><main><p></p></main><aside class="ws-block sidebar"><h3></h3><p class="ws-contents">{$contents}</p></aside></section>'
        },
        {
            title: 'Note',
            description: 'A World Smiths note',
            content: '<section class="ws-block note"><img src="worlds/the-sky-isles/ws.svg" width="48" /> <div class="contents"><h3></h3><p class="ws-contents">{$contents}</p></div></section>'
        });
    CONFIG.TinyMCE.content_css.push('modules/wst/styles/ws.css');
});
/**
 * @class NAME
 */
class NAME {
    constructor() {
        Hooks.on("init", () => {
            game.settings.register(NAME.ID, "", {
                name: "",
                hint: "",
                scope: "client",
                config: true,
                type: Boolean,
                choices: {
                    "a": "Alphabet"
                },
                default: true,
                onChange: () => { },
            });
        });
    };

    /** The module's ID */
    static ID = "";
    
};

import playerOptions from '../config/playerOptions.json';
import spritesheetButton from './spritesheetButton';


export default {
    onLoad: function(ctx) { },

    onInit: function(player, ctx) {
        player.ui.override(['button_beginning_e3bdbd', 'button_beginning_34a305', 'button_beginning_6c2e1e'], spritesheetButton);
    },

    playerOptions
};

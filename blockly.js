import Blockly from 'blockly';
import DarkTheme from '@blockly/theme-dark';
import toolbox from './toolbox.js';

Blockly.inject('blockly_container', {
    theme: DarkTheme,
    sounds: false,
    scrollbars: true,
    trashcan: true,
    renderer: 'zelos',
    zoom: {
        controls: true,
        wheel: true,
        startScale: 0.8,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true
    },
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
    },
    toolbox: toolbox
})
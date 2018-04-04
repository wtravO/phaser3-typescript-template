import { config } from '../config/preload';

export class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'preloader',
            files: [
                { type: 'image', key: 'bar', url: '../../assets/images/loadBar.png' },
                { type: 'image', key: 'barBg', url: '../../assets/images/barBg.png' }
            ]
        });
    }

    preload() {
        // add the loading bar to use as a display for the loading progress of the remainder of the assets
        const barBg = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'barBg');
        const bar = this.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'bar');
        bar.setOrigin(0, 0.5);
        bar.setPosition(bar.x - (bar.width / 2), bar.y);
        bar.setScale(0, 1);
        
        this.load.on('progress', (progress: number) => {
            bar.setScale(progress, 1);
        });

        this.load.on('complete', function () {
            barBg.destroy();
            bar.destroy();
        });

        // load assets declared in the preload config
        this.loadAtlas();
        this.loadAudio();
    }

    create() {
        this.scene.start('main');
        this.scene.remove('preloader');
    }

    loadAtlas() {
        const sheetPath = config.ssPath;
        const sheets = config.sheets;

        this.load.setPath(sheetPath);

        for (let i = 0; i < sheets.length; i++) {
            this.load.atlas(sheets[i], `${sheetPath + sheets[i]}.png`, `${sheetPath + sheets[i]}.json`);
        }
    }

    loadAudio() {
        const audioPath = config.audioPath;
        const audioFiles = config.audioFiles;

        this.load.setPath(audioPath);

        for (let i = 0; i < audioFiles.length; i++) {
            this.load.audio(audioFiles[i].key, audioPath + audioFiles[i].mp3, audioPath + audioFiles[i].ogg);
        }
    }
}
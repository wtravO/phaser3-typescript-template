/**
 * MP3 and OGG-Vorbis are the most heavily supported
 * audio formats for modern browsers
 * 
 * OGG-Vorbis is optionally set as the fallback audio
 */
export class AudioFile {
    constructor(key: string, mp3: string, ogg?: string) {
        this.key = key;
        this.mp3 = mp3;
        this.ogg = ogg;
    }

    key: string;
    mp3: string;
    ogg?: string;
}

const assetDir = "./assets"; // relative to build dir

export const config = {
    // spritesheets
    ssPath: `${assetDir}/spritesheets/`,
    sheets: [
        "sheet1"
    ],

    // audio
    audioPath: `${assetDir}/audio/`,
    audioFiles: [
        new AudioFile('DOG', 'DOG.mp3', 'DOG.ogg')
    ]
}
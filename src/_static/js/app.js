import { callerName } from './modules/index.js';

const status = new callerName('app');

export const app =  {
    initialize() {
        status.init();
        
        this.cache();
        this.showHeroMessage();
    },
    
    cache() {
        status.add('cache');
        
        this.heroMsg = document.querySelector('#heroMsg');
    },
    
    showHeroMessage() {
        status.add('showHeroMessage');
        
        const message = '11ty boilerplate';
        this.heroMsg.innerHTML = message;
        status.log(`rendered hero message: ${message}`);
    }
}

app.initialize();
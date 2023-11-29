import { registerSW } from 'virtual:pwa-register';
import { updateSWEvent } from './events';

export const updateSW = registerSW({
  onNeedRefresh() {
    console.log(' --- onNeedRefresh ---', new Date().toISOString());
    document.dispatchEvent(updateSWEvent);
  },

  onOfflineReady() {
    console.log(' --- onOfflineReady ---', new Date().toISOString());
  },

  onRegisterError(error) {
    console.log(' --- onRegisterError ---', new Date().toISOString());
    console.log(error);
  },

  onRegisteredSW(swScriptUrl, registration) {
    console.log(' --- onRegisteredSW ---', new Date().toISOString());
    console.log(swScriptUrl, registration);
  },
});

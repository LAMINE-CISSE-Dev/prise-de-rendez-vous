import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rendez-vous.app',
  appName: 'rendez-vous-medical',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

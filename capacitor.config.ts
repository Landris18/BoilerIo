import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.boilerio.com',
  appName: 'BoilerIo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

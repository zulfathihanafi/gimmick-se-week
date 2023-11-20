import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'test-gimmick',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;

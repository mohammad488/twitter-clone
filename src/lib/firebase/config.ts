const config = {
  apiKey: 'AIzaSyAE3kjlepMdiInFjPr0oBjJfQC0b5Ietbs',
  authDomain: 'strings-a2531.firebaseapp.com',
  projectId: 'strings-a2531',
  storageBucket: 'strings-a2531.appspot.com',
  messagingSenderId: '143251220617',
  appId: '1:143251220617:web:7bd5e2d365af10d524fe58',
  measurementId: 'G-4EGSL0T20M'
} as const;

type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}

globalThis.__IS_BROWSER__ = typeof window === 'object';
globalThis.__NODE_ENV__ = !globalThis.__IS_BROWSER__ ? (process.env.NODE_ENV as 'development' | 'production') : 'development';

export {}

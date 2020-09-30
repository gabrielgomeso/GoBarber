interface IMaiLConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'gabrielgo@gabrielgo.dev',
      name: 'Gabriel Gomes',
    },
  },
} as IMaiLConfig;

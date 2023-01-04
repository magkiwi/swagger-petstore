
interface Info {
    description: string;
    title: string;
    version: string;
    license: {
      name: string;
      url: string;
    },
}

  export type ContextProps = {
    info: Info;
  };

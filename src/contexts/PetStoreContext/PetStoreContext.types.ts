
interface Info {
    contact: {
      email: string;
    }
    description: string;
    title: string;
    version: string;
    license: {
      name: string;
      url: string;
    },
    termsOfServices: string;
}

interface Tag {
  name: string;
  description: string;
  externalDocs: {
    description: string;
    url: string;
  }
}

  export type ContextProps = {
    info: Info;
    tags: Array<Tag>
  };

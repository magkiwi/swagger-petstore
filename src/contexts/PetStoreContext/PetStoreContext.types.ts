
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

interface Tab {
  name: string;
  description: string;
  externalDocs: {
    description: string;
    url: string;
  }
}

  export type ContextProps = {
    info: Info;
    tabs: Array<Tab>
  };

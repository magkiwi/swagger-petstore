
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

export type Parameter = {
  description: string;
  format: string; 
  in: string;
  name: string;
  required: boolean;
  type: string;
  schema: {}
  collectionFormat: string;
  items: {
    enum: string[];
  }
}

export type OperationType = {
  description: string;
  summary: string;
  parameters: Array<Parameter>;
  produces: string[];
  responses: {[key: string | number]: {description: string, schema?: {}}};
  tags: string[];
  
}

export type Path = {
  tag: Set<any>;
  endpoint: string;
  method: string;
  detail: OperationType;
}

  export type ContextProps = {
    info: Info;
    tags: Array<Tag>;
    paths: Array<Path>;
  };

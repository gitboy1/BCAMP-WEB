/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/*Wild card for importing .json objects*/
declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'json!*' {
  const value: any;
  export default value;
}


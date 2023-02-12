namespace UserModule {
  export type User = {
    ID: number;
    managedEvents: number[]; // Event IDs
    participatingEvents: number[]; // Event IDs
  };
}

export default UserModule;

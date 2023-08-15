export type RootStackParamList = {
  Home: undefined;
  DetailedItem: Partial<{
    title: string;
    type: string;
    author: string;
    url: string;
  }>;
};

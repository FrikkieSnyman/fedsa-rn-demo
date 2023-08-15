import { useTopStories } from "../../hooks/useTopStories";
import { Center, Spinner } from "@gluestack-ui/react";
import { FlatList } from "react-native";
import { HNItemPreview } from "../common/HNItemPreview";

export function Home() {
  const { ids, fetching, refresh, fetchMore } = useTopStories();

  if (!ids) {
    return (
      <Center flex={1}>
        <Spinner size="large" />
      </Center>
    );
  }

  return (
    <FlatList
      keyExtractor={(id) => id.toString()}
      data={ids}
      refreshing={fetching}
      onRefresh={refresh}
      onEndReached={fetchMore}
      renderItem={({ item }) => <HNItemPreview id={item} />}
      ListFooterComponent={fetching ? <Spinner size="large" /> : null}
    />
  );
}

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types";
import { Box, Divider, Heading, Text, VStack } from "@gluestack-ui/react";
import WebView from "react-native-webview";

export function DetailedItem({
  route,
}: StackScreenProps<RootStackParamList, "DetailedItem">) {
  const { title, author, type, url } = route.params;
  return (
    <>
      <Box padding={8}>
        <VStack>
          <Heading textAlign="center">{title}</Heading>
          <Divider marginVertical={4} />
          <Text textAlign="center">
            {type} by {author}
          </Text>
        </VStack>
      </Box>
      {url && <WebView style={{ flex: 1 }} source={{ uri: url }} />}
    </>
  );
}

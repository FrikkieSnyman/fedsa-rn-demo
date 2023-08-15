import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@gluestack-ui/react";
import { useItem } from "../../hooks/useItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types";

export function HNItemPreview({ id }: { id: number }) {
  const navigation =
    useNavigation<StackScreenProps<RootStackParamList, "Home">["navigation"]>();
  const item = useItem(id);
  if (!item) {
    return (
      <Center height={100} flex={1}>
        <Spinner size="small" />
        <Divider margin={8} />
      </Center>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailedItem", {
          title: item.title,
          type: item.type,
          author: item.by,
          url: item.url,
        });
      }}
    >
      <VStack flex={1}>
        <HStack marginBottom={8}>
          <Box justifyContent="center" alignItems="center" flex={1}>
            <Text textAlign="center">{item.score}</Text>
          </Box>
          <Divider marginEnd={8} orientation="vertical" />
          <Heading flex={8}>{item.title}</Heading>
        </HStack>
        <HStack marginHorizontal={8}>
          <Text>
            {item.type} by {item.by}
          </Text>

          <Text textAlign="right" flexGrow={1}>
            {new Date(
              item.time ? item.time * 1000 : Date.now()
            ).toLocaleString()}
          </Text>
        </HStack>
        <Divider margin={8} />
      </VStack>
    </TouchableOpacity>
  );
}

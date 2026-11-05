import type { FC } from "react";
import { useGetItemQuery } from "../store/api/hnApi";
import { Flex, Typography } from "antd";

type StoryItemProps = {
  id: number;
};

export const StoryItem: FC<StoryItemProps> = ({ id }) => {
  const { data: story, isLoading, isError } = useGetItemQuery(id);

  if (isError) {
    return;
  }

  if (isLoading) {
    return;
  }

  return story ? (
    <Flex>
      <Typography.Title>{story.title}</Typography.Title>
    </Flex>
  ) : null;
};

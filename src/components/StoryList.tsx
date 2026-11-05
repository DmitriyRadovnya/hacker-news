import { useState } from "react";
import { useGetNewItemsQuery } from "../store/api/hnApi";
import { StoryItem } from "./StoryItem";
import { Pagination, type PaginationProps } from "antd";

const PAGE_SIZE = 20;

export const StoryList = () => {
  const [page, setPage] = useState(3);
  const { data: ids, isLoading, isError } = useGetNewItemsQuery();

  if (isError) {
    return;
  }

  if (isLoading) {
    return;
  }

  if (!ids) return null;

  const totalPages = Math.ceil(ids.length / PAGE_SIZE) * 10;
  const visibleIds = ids.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  console.log(totalPages);

  const handlePagination: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };

  return (
    <>
      <Pagination
        current={page}
        onChange={handlePagination}
        total={totalPages}
      />
      {visibleIds.map((id) => (
        <StoryItem key={id} id={id} />
      ))}
      <Pagination
        current={page}
        onChange={handlePagination}
        total={totalPages}
      />
    </>
  );
};

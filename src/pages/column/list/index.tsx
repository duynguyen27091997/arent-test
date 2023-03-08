import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Button from "src/components/common/Button";
import { getColumns } from "src/services/api";
import { ColumnItem } from "src/types";

import ColumnBoxItem from "./ColumnBoxItem";

const List = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(["columns"], getColumns, {
    getNextPageParam: () => page,
  });

  return (
    <div className="my-8">
      {!isLoading && (
        <>
          <div className="grid grid-cols-4 gap-2">
            {data?.pages.map((page, pageIndex) => {
              return page.map((item: ColumnItem, itemIndex: any) => (
                <ColumnBoxItem item={item} key={`${pageIndex}_${itemIndex}`} />
              ));
            })}
          </div>
          <div className="flex justify-center mt-8 text-lg">
            <Button onClick={fetchNextPage}>記録をもっと見る</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default List;

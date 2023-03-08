import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Button from "src/components/common/Button";
import { getHistories } from "src/services/api";
import { HistoryItem } from "src/types";

import MealHistoryItem from "./MealHistoryItem";

const MealHistory = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ["histories"],
    getHistories,
    {
      getNextPageParam: () => page,
    },
  );

  return (
    <div className="my-8">
      {!isLoading && (
        <>
          <div className="grid grid-cols-4 gap-2">
            {data?.pages.map((page, pageIndex) => {
              return page.map((item: HistoryItem, itemIndex: any) => (
                <MealHistoryItem item={item} key={`${pageIndex}_${itemIndex}`} />
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

export default MealHistory;

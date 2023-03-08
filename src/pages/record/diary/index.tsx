import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Button from "src/components/common/Button";
import { getDiaries } from "src/services/api";
import { DiaryItem } from "src/types";

import DiaryNoteItem from "./DiaryNoteItem";

const Diary = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(["diaries"], getDiaries, {
    getNextPageParam: () => page,
  });

  return (
    <div className="my-12">
      <h4 className="text-xl">MY DIARY</h4>

      {!isLoading && (
        <>
          <div className="mt-2 grid grid-cols-4 gap-3">
            {data?.pages.map((page, pageIndex) => {
              return page.map((item: DiaryItem, itemIndex: any) => (
                <DiaryNoteItem item={item} key={`${pageIndex}_${itemIndex}`} />
              ));
            })}
          </div>
          <div className="flex justify-center mt-8 text-lg">
            <Button onClick={fetchNextPage}>自分の日記をもっと見る</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Diary;

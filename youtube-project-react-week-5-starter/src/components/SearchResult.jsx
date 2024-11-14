import React from "react";
import LeftNav from "./LeftNav";
import SearchResultVideo from "./SearchResultVideo";

const SearchResult = () => {
  const result = [];

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-zinc-900">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return <SearchResultVideo key={video.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

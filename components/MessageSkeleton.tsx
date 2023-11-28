import React from "react";
import Skeleton from "react-loading-skeleton";

const MessageSkeleton = () => {
  return (
    <div className="py-5">
      <div className="flex space-x-3 px-10 max-w-2xl mx-auto">
        <div className="flex-shrink-0">
          <Skeleton circle height={24} width={24} />
        </div>
        <div>
          <p className="text-white text-sm font-medium">
            <Skeleton width={80} />
          </p>
          <p className="text-white pt-1">
            <Skeleton count={3} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageSkeleton;

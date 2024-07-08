import React from "react";

const MetricsCard = (props) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-gray-50 bg-clip-border text-gray-700 shadow-lg">
    
      <div class="p-3">
        <div class="w-full max-w-md p-0">
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate dark:text-white ">
                      Acceptance rate: [Value]
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate dark:text-white ">
                    Submission to final decision: [Value]
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate dark:text-white ">
                    Acceptance to publication: [Value]
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate dark:text-white ">
                    CiteScore: [Value]
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate dark:text-white ">
                    Journal Citation Indicator: [Value]
                    </p>
                  </div>
                </div>
              </li>
              <li class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-sm font-bold text-gray-900 truncate dark:text-white ">
                    Impact Factor: [Value]
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;

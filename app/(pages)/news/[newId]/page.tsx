import Image from "next/image";
import React from "react";
import NewImage from "@/public/images/new1.png";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-bold text-5xl text-gray-800">
          Apple's Earnings and Sales Show Growth
        </h1>
        <p className="text-base text-gray-400">Sep 21, 202408:27 UTC</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-800">Key points:</p>
        <p className="text-lg font-semibold text-gray-800">
          + Apple's earnings per share expected to increase by 9.6%
        </p>
        <p className="text-lg font-semibold text-gray-800">
          + Sales estimate for current quarter at $94.52 billion, up 5.6%
        </p>
        <p className="text-lg font-semibold text-gray-800">
          + Apple's stock closed at $228.30, a slight decrease of -0.25%
        </p>
      </div>
      <div className="space-y-12">
        <Image src={NewImage} alt="image-new" className="w-full" />
        {/* Content */}
        <div>
          <p className="text-base text-gray-800">
            Apple (AAPL) is expected to report earnings of $1.60 per share for
            the current quarter, marking a year-over-year increase of +9.6%. The
            earnings estimate for the current fiscal year is $6.70 per share, a
            rise of +9.3% from the previous year. For the upcoming fiscal year,
            the earnings estimate is projected at $7.55 per share, indicating a
            growth of +12.6% from the expected report of the current year. The
            sales estimate for the current quarter stands at $94.52 billion,
            suggesting a year-over-year growth of +5.6%. The sales estimates for
            the current and next fiscal years are $390.63 billion and $424.09
            billion, respectively, showing changes of +1.9% and +8.6%. Apple's
            stock closed at $228.30, a slight decrease of -0.25% from the
            previous day. The revenue for the current quarter is predicted to be
            $94.52 billion, a 5.61% increase compared to the same quarter of the
            previous year. For the entire fiscal year, the earnings are
            projected to be $6.70 per share and the revenue is expected to be
            $390.63 billion, indicating changes of +9.3% and +1.92%,
            respectively, from the previous year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;

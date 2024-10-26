/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LogoCompany from "../../../../components/LogoCompany";
import InterestRate from "../../../../components/InterestRate";
import { getAllStockHolding } from "@/app/actions/trade";
import { getLatestCandleStick } from "@/lib/utils";

const TableInvest = async () => {
  const allStockHolding = await getAllStockHolding();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-app">
      <h1 className="text-3xl font-bold leading-9 text-gray-800">Invest</h1>
      {allStockHolding.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          There are currently no transactions.
        </div>
      ) : (
        <Table className="min-w-[768px] overflow-x-scroll">
          <TableHeader>
            <TableRow>
              <TableHead className="text-base font-semibold text-gray-400">
                Name
              </TableHead>
              <TableHead className="text-base font-semibold text-gray-400">
                Total Shares
              </TableHead>
              <TableHead className="text-base font-semibold text-gray-400">
                Current Price
              </TableHead>
              <TableHead className="text-base font-semibold text-gray-400">
                Profit/Loss
              </TableHead>
              <TableHead className="text-base font-semibold text-gray-400">
                Investment
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allStockHolding.map((elm: any) => {
              const latestStick = getLatestCandleStick(
                elm.stock!.candlesticks!
              );
              return (
                <TableRow key={elm.stock?.id}>
                  <TableCell>
                    <LogoCompany stock={elm.stock!} />
                  </TableCell>
                  <TableCell className="text-base text-gray-800">
                    {elm.stockHolding}
                  </TableCell>
                  <TableCell className="text-base text-gray-800">
                    ${latestStick?.close}
                  </TableCell>
                  <TableCell>
                    {/* TODO: Change Logic here */}
                    <InterestRate value={elm.unrealizedProfitLoss} />
                  </TableCell>
                  <TableCell className="text-base text-gray-800">
                    $
                    {latestStick?.close
                      ? (latestStick?.close * elm.stockHolding).toFixed(2)
                      : 0}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default TableInvest;

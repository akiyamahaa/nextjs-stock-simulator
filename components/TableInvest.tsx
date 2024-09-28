import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LogoCompany from "./LogoCompany";
import InterestRate from "./InterestRate";
type Props = {};

const TableInvest = (props: Props) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-app">
      <h1 className="text-3xl font-bold leading-9 text-gray-800">Invest</h1>
      <Table className="min-w-[768px] overflow-x-scroll">
        <TableHeader>
          <TableRow>
            <TableHead className="text-base font-semibold text-gray-400">
              Name
            </TableHead>
            <TableHead className="text-base font-semibold text-gray-400">
              Market Cap
            </TableHead>
            <TableHead className="text-base font-semibold text-gray-400">
              Price
            </TableHead>
            <TableHead className="text-base font-semibold text-gray-400">
              Change
            </TableHead>
            <TableHead className="text-base font-semibold text-gray-400">
              Investment
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3].map((elm) => (
            <TableRow key={elm}>
              <TableCell>
                <LogoCompany />
              </TableCell>
              <TableCell className="text-base text-gray-800">$3.355</TableCell>
              <TableCell className="text-base text-gray-800">$220.69</TableCell>
              <TableCell>
                <InterestRate isUp={true} value={1.8} />
              </TableCell>
              <TableCell className="text-base text-gray-800">
                $21,182.50
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableInvest;

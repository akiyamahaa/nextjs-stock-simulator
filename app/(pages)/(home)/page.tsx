import TableInvest from "@/components/TableInvest";
import ListCardTotal from "./components/ListCardTotal";
import ListMarket from "@/components/ListMarket";
import ListNew from "@/components/ListNew";

export default function Home() {
  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <ListCardTotal />
        <TableInvest />
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Trending on Market</h1>
        <ListMarket />
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Lastest Stock News</h1>
        <ListNew />
      </div>
    </div>
  );
}

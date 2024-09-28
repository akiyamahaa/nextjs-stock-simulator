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
      <ListMarket />
      <ListNew />
    </div>
  );
}

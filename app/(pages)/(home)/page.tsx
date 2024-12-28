import ListCardTotal from "./components/ListCardTotal";
import ListMarket from "@/components/ListMarket";
// import ListNew from "@/components/ListNew";
import { SignedIn } from "@clerk/nextjs";
import TableInvest from "./components/TableInvest";
// import { checkUser } from "@/lib/checkUser";

export default async function Home() {
  // const user = await checkUser();
  // if (!user) {
  //   console.log("go here");
  //   // Handle user not found, maybe redirect or return early
  //   return <div>User not found</div>;
  // }

  return (
    <div className="space-y-16">
      <SignedIn>
        <div className="space-y-8">
          <ListCardTotal />
          <TableInvest />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Trending on Market
          </h1>
          <ListMarket />
        </div>
        {/* <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Lastest Stock News
          </h1>
          <ListNew type="latest" />
        </div> */}
      </SignedIn>
    </div>
  );
}

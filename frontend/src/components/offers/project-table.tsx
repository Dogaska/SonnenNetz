import { HeaderOffers } from "../common/header";
import { OfferList } from "./offer-list";
import { NewOffer } from "./create_new_offer";
import { SearchBar } from "../common/search_bar";
import { Filter } from "../common/filter";

export function ProjectTable() {
  const numOfferPerPage = 12;
  return (
    <div className="bg-white">
      <HeaderOffers />
      <SearchBar barText="Search offers..." />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex justify-between items-center">
        <Filter />
        <NewOffer />
      </div>
      <OfferList numOfferPerPage={numOfferPerPage} />
    </div>
  );
}

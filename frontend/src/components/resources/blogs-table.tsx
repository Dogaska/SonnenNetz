import { ResourceList } from "./resource-list";
import { AddNewBlog } from "./create-new-blog";
import { SearchBar } from "../common/search_bar";
import { Filter } from "../common/filter";
import { HeaderBlogs } from "../common/header";

export function BlogsTable() {
  return (
    <div className="bg-white">
      <HeaderBlogs />
      <SearchBar barText="Search blogs..." />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex justify-between items-center">
        <Filter />
        <AddNewBlog />
      </div>
      <ResourceList />
    </div>
  );
}

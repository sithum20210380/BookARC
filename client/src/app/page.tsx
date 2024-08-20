import TopHeader from "@/components/Home/topHeader/page";
import BookList from "@/components/Home/bookList/page";

export default function Home() {
  return (
    <main className="h-full w-full bg-white">
        <div className="flex items-center flex-col">
          <TopHeader />
          <BookList />
        </div>
    </main>
  );
}

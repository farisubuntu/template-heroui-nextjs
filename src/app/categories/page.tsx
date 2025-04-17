import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Category } from "@/lib/category";
async function getCategories() {
  const res = await fetch("https://langisor.netlify.app/api/v2/c");
  const data = await res.json();
  return data as Category[];
}

export default async function CategoriesPage() {
  const categories = await getCategories();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>ID: {category.id}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={`/categories/${category.id}`}>
                    View category
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

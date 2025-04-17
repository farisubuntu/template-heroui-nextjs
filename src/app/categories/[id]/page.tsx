import { Lesson } from "@/lib/lesson";
import { Category } from "@/lib/category";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
 Card,
 CardHeader,
 CardFooter,
 CardTitle,
 CardDescription,
 CardContent
} from "@/components/ui/card";
interface CategoryLessons {
 category: Category;
 lessons: Lesson[];
}
async function getLessons(id: number) {
 const res = await fetch(`https://langisor.netlify.app/api/v2/c/${id}`);
 const category: Category = await res.json();
 const lessonsData = Promise.all(category.lessons.map((lessonId: number) => fetch(`https://langisor.netlify.app/api/v2/l/${lessonId}`)));
 const lessons: Lesson[] = await lessonsData.then((responses) => Promise.all(responses.map((response) => response.json())));
 return { category, lessons };
}

export default async function CategoryPage(props: { params: Promise<{ id: string }> }) {
 const params = await props.params;
 // const id= await params.id
 const { category, lessons } = await getLessons(parseInt( (await params).id));
 return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <h1 className="text-2xl font-bold">Category: {params.id}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {lessons.map((lesson) => (
      <Card key={lesson.id}>
       <CardHeader>
        <CardTitle>{lesson.name}</CardTitle>
        <CardDescription>ID: {lesson.id}</CardDescription>
       </CardHeader>
       <CardContent>

       </CardContent>
       <CardFooter>
        <Button asChild>
         <Link href={`/categories/quizzes/${lesson.id}`}>View lesson</Link>
        </Button>
       </CardFooter>
      </Card>
     ))}
    </div>
   </main>
  </div>
 );
}